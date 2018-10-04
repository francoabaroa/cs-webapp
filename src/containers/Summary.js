import React, { Component } from "react";

import logo from "../cs-logo.png";

import "../App.css";
import "react-phone-number-input/style.css";

import AppBar from "../components/AppBar";
import Grid from "@material-ui/core/Grid";
import LeftSummaryCard from "../components/LeftSummaryCard";
import Logo from "../components/Logo";
import RightSummaryCard from "../components/RightSummaryCard";
import { withStyles } from "@material-ui/core/styles";

import SummaryConfig from "../config/SummaryConfig";

import classNames from "classnames";

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkBoxes: {},
      currencies: [],
      currentTitleHeader: "recommended",
      enableWalkthrough: true,
      open: false,
      showMore: false,
      showMoreIndex: 16,
      userId: null,
      value: 0
    };
  }

  componentDidMount() {
    const self = this;
    const stripeKeys = {
      Coinbase: "prod_Dchlih0hVExbPP",
      Trader: "prod_DdQ8YRYxcMDOuF"
    };
    const handler = window.StripeCheckout.configure({
      key: stripeKeys[self.props.packageSelected],
      image: logo,
      locale: "auto",
      token: function(token) {
        self.createStrategy();
      }
    });

    if (this.props.currenciesToExplore.length > 0) {
      let currencyNum = 0;
      // top 5 needs to be coinbase ones
      if (this.props.currenciesToExplore === SummaryConfig.currencyStrings[0]) {
        currencyNum = 5;
      } else if (
        this.props.currenciesToExplore === SummaryConfig.currencyStrings[1]
      ) {
        currencyNum = 100;
      } else if (
        this.props.currenciesToExplore === SummaryConfig.currencyStrings[2]
      ) {
        currencyNum = 250;
      }

      if (currencyNum === 5) {
        let currencies = SummaryConfig.coinbaseCurrencies;
        currencies.unshift(null);
        let checkboxes = {
          BTC: true,
          ETH: true,
          BCH: true,
          LTC: true,
          ETC: true
        };
        this.setState({ currencies, checkBoxes: checkboxes });
      } else {
        fetch(SummaryConfig.topXCoinsApiUrl + currencyNum)
          .then(response => {
            return response.json();
          })
          .then(data => {
            let checkboxes = {};
            data.forEach(coin => {
              checkboxes[coin] = true;
            });
            let currencies = data;
            currencies.unshift(null);
            this.setState({ currencies: data, checkBoxes: checkboxes });
          });
      }
    }

    document
      .getElementById("customButton")
      .addEventListener("click", function(e) {
        let scrubbedPhone = self.props.phone.split("+")[1];
        fetch(SummaryConfig.checkIfValidPhoneApiUrl + scrubbedPhone)
          .then(response => {
            return response.json();
          })
          .then(data => {
            if (data.valid) {
              if (self.props.phoneNumberError) {
                self.props.removePhoneErrorMessage();
              }
              self.saveUser();
              handler.open({
                name: SummaryConfig.cryptospotlight,
                description: self.props.packageSelected + " Package",
                zipCode: true,
                amount: SummaryConfig.prices[self.props.packageSelected] + "00"
              });
              e.preventDefault();
            } else if (!data.valid) {
              self.props.triggerPhoneErrorMessage();
              handler.close();
              e.preventDefault();
            }
          });
      });

    window.addEventListener("popstate", function() {
      handler.close();
    });
  }

  handleShowMore = currenciesLength => {
    let currentShowMoreIndex = this.state.showMoreIndex;
    let updatedShowMoreIndex = currentShowMoreIndex + 8;
    let showMore = false;

    if (updatedShowMoreIndex >= currenciesLength) {
      showMore = true;
    }

    this.setState({
      showMoreIndex: updatedShowMoreIndex,
      showMore
    });
  };

  handleCheckbox = coin => {
    const { checkBoxes } = this.state;
    checkBoxes[coin] = !checkBoxes[coin];
    this.setState({ checkBoxes });
  };

  createUser() {
    const self = this;
    let userInfo = {
      active: true,
      cellphone: this.props.phone,
      email: this.props.email,
      firstName: this.props.name,
      lastName: "",
      preferences: [],
      surveyAnswers: this.props.surveyAnswers
    };

    const createNewUser = async () => {
      const response = await fetch(SummaryConfig.saveUserUrl, {
        method: SummaryConfig.POST,
        body: JSON.stringify(userInfo),
        headers: {
          Accept: SummaryConfig.applicationJson,
          "Content-Type": SummaryConfig.applicationJson
        }
      });
      const { userId } = await response.json();
      self.setState({ userId });
    };
    createNewUser();
  }

  createStrategy() {
    const { checkBoxes } = this.state;
    let currenciesToSave = [];

    for (let key in checkBoxes) {
      if (checkBoxes[key] === true) {
        currenciesToSave.push(key);
      }
    }

    let strategyInfo = {
      active: true,
      currencies: currenciesToSave,
      exchanges: this.props.checkedExchanges,
      profitTakePercent: this.props.priceIncrease,
      stopLossPercent: this.props.priceDecrease,
      timeOutPeriodInHrs: this.props.timeOut,
      userId: this.state.userId
    };

    const createNewStrategy = async () => {
      const response = await fetch(SummaryConfig.saveStrategyUrl, {
        method: SummaryConfig.POST,
        body: JSON.stringify(strategyInfo),
        headers: {
          Accept: SummaryConfig.applicationJson,
          "Content-Type": SummaryConfig.applicationJson
        }
      });
      const serverResponse = await response;
      window.location.replace("https://cryptospotlight.net/thank-you");
    };
    createNewStrategy();
  }

  saveUser = () => {
    this.createUser();
  };

  renderAppBar() {
    return (
      <AppBar
        goBack={this.props.goBack}
        widthLessThan452PX={this.props.widthLessThan452PX}
      />
    );
  }

  renderLogo() {
    return (
      <Logo
        widthLessThan1222PX={this.props.widthLessThan1222PX}
        widthLessThan452PX={this.props.widthLessThan452PX}
      />
    );
  }

  renderLeftSummaryCard() {
    return (
      <LeftSummaryCard
        checkedExchanges={this.props.checkedExchanges}
        phone={this.props.phone}
        phoneNumberError={this.props.phoneNumberError}
        packageSelected={this.props.packageSelected}
        setPhoneNumber={this.props.setPhoneNumber}
        name={this.props.name}
        priceIncrease={this.props.priceIncrease}
        priceDecrease={this.props.priceDecrease}
        timeOut={this.props.timeOut}
        currenciesToExplore={this.props.currenciesToExplore}
        widthLessThan452PX={this.props.widthLessThan452PX}
        widthLessThan1222PX={this.props.widthLessThan1222PX}
      />
    );
  }

  renderRightSummaryCard() {
    return (
      <RightSummaryCard
        priceIncrease={this.props.priceIncrease}
        priceDecrease={this.props.priceDecrease}
        timeOut={this.props.timeOut}
        changePriceIncrease={this.props.changePriceIncrease}
        changePriceIncreaseSlider={this.props.changePriceIncreaseSlider}
        changePriceDecrease={this.props.changePriceDecrease}
        changePriceDecreaseSlider={this.props.changePriceDecreaseSlider}
        changeTimeOut={this.props.changeTimeOut}
        changeTimeOutSlider={this.props.changeTimeOutSlider}
        handleCheckbox={this.handleCheckbox}
        handleShowMore={this.handleShowMore}
        cryptoRiskProfile={this.props.cryptoRiskProfile}
        currenciesToExplore={this.props.currenciesToExplore}
        checkBoxes={this.state.checkBoxes}
        currencies={this.state.currencies}
        packageSelected={this.props.packageSelected}
        showMoreIndex={this.state.showMoreIndex}
        showMore={this.state.showMore}
        widthLessThan452PX={this.props.widthLessThan452PX}
        widthLessThan1222PX={this.props.widthLessThan1222PX}
      />
    );
  }

  renderSummary() {
    const { classes } = this.props;
    return (
      <Grid
        container
        className={classNames(classes.gridRoot, classes.greyishBackground)}
        spacing={24}
      >
        {this.renderAppBar()}
        {this.renderLogo()}
        {this.renderLeftSummaryCard()}
        {this.renderRightSummaryCard()}
      </Grid>
    );
  }

  render() {
    return <div className="App">{this.renderSummary()}</div>;
  }
}

export default withStyles(SummaryConfig.styles)(Summary);
