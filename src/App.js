import React, { Component } from 'react';
import logo from './cs-logo.png';
import './App.css';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import Chart from './components/Chart';
import Walkthrough from './components/Walkthrough';
import Summary from './components/Summary';

import WalkthroughConfig from './config/WalkthroughConfig';

const prices = {
  Coinbase: 10,
  Trader: 30,
};

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      enableWalkthrough: true,
      checkedExchanges: [],
      cryptoRiskProfile: '',
      cryptoCurrentStatus: '',
      cryptoTradingHabit: '',
      currenciesToExplore: '',
      currentSceneNumber: 0,
      discoveryReason: '', // unused
      doesUseTSA: false,
      email: '',
      incorporatingCryptoLifeAnswer: '',
      isPastCryptoTrader: false,
      moneyWillingToInvest: '', // unused
      name: '',
      packagePrice: 0,
      packageSelected: null,
      phone: '',
      phoneTradeSetup: '',
      priceIncrease: 15,
      priceDecrease: 5,
      referralSource: '',
      showEmailField: false,
      showNameField: false,
      spacing: '40',
      spareTimeAvailability: '',
      technicalAnalysisUse: '', // unused
      timeOut: 24,
    };
  }

  componentDidMount() {
    if (this.state.enableWalkthrough) {
      let twoAndAHalfSeconds = 2500;
      let currentSceneNum = this.state.currentSceneNumber;
      let activeStep = WalkthroughConfig.scenesConfig[currentSceneNum].stepLevel;
      if (WalkthroughConfig.scenesConfig[currentSceneNum].method === undefined) {
        setTimeout(() => {
          this.setState({
            currentSceneNumber: currentSceneNum + 1,
            activeStep: activeStep,
          });
        }, twoAndAHalfSeconds)
      }
    }
  }

  componentDidUpdate() {
    let twoAndAHalfSeconds = 2500;
    let currentSceneNum = this.state.currentSceneNumber;
    let isLastScene = WalkthroughConfig.scenesConfig[currentSceneNum + 1] === undefined;

    if (this.state.activeStep !== WalkthroughConfig.scenesConfig[currentSceneNum].stepLevel) {
      this.setState({activeStep: WalkthroughConfig.scenesConfig[currentSceneNum].stepLevel});
    }

    if (this.state.enableWalkthrough) {
      let fiveSeconds = 5000;
      let halfASecond = 500;
      let oneSecond = 1000;
      let secondsToWait = currentSceneNum === 1 || currentSceneNum === 5 ?
        fiveSeconds :
        currentSceneNum === 2 || currentSceneNum === 3 ?
        oneSecond :
        twoAndAHalfSeconds;
      if (WalkthroughConfig.scenesConfig[currentSceneNum].method === undefined) {
        setTimeout(() => {
          this.setState({
            currentSceneNumber: currentSceneNum + 1,
          });
        }, secondsToWait)
      }
      if (isLastScene) {
        console.log('componentDidUpdate()', this.state);
      }
    }

    if (WalkthroughConfig.scenesConfig[currentSceneNum].multipleSelections && this.state.checkedExchanges.length > 0) {
      window.scrollTo(0,document.body.scrollHeight);
    }

    if (this.state.enableWalkthrough && isLastScene) {
      // TODO: better way to determine package
      let pkg = '';
      let priceIncrease = 0;
      let priceDecrease = 0;
      let timeOut = 0;
      if (this.state.currenciesToExplore === 'Top currencies') {
        pkg = 'Coinbase';
      } else {
        pkg = 'Trader';
      }

      var tradingHabits = ['Trade quick', 'Hold for a bit', 'Sit back and relax'];
      if (this.state.cryptoTradingHabit === tradingHabits[0]) {
        timeOut = 24;
      } else if (this.state.cryptoTradingHabit === tradingHabits[1]) {
        timeOut = 48;
      } else if (this.state.cryptoTradingHabit === tradingHabits[2]) {
        timeOut = 96;
      }

      var riskProfiles = ['Risk averse', 'The middle', 'High risk,'];
      if (this.state.cryptoRiskProfile === riskProfiles[0]) {
        priceIncrease = 5;
        priceDecrease = 2;
      } else if (this.state.cryptoRiskProfile === riskProfiles[1]) {
        priceIncrease = 8;
        priceDecrease = 3;
      } else if (this.state.cryptoRiskProfile === riskProfiles[2]) {
        priceIncrease = 10;
        priceDecrease = 4;
      }

        setTimeout(() => {
          this.setState({
            enableWalkthrough: false,
            packageSelected: pkg,
            priceIncrease,
            priceDecrease,
            timeOut,
          });
        }, twoAndAHalfSeconds)
      }
  }

  getStarted = () => {
    this.setState({
      enableWalkthrough: !this.state.enableWalkthrough
    });
  }

  goBack = () => {
    let currentSceneNum = this.state.currentSceneNumber;
    let scenesToSubtract = 1;
    // TODO: bug check?
    let activeStep = WalkthroughConfig.scenesConfig[currentSceneNum].stepLevel;

    if (WalkthroughConfig.scenesConfig[currentSceneNum].arguments && WalkthroughConfig.scenesConfig[currentSceneNum].arguments[0] === 'email') {
      scenesToSubtract = 3;
    } else if (WalkthroughConfig.scenesConfig[currentSceneNum - 1].method === undefined) {
      scenesToSubtract = 2;
    }

    this.setState({
      currentSceneNumber: 1,
      enableWalkthrough: true,
      activeStep,
    });
  };

  changeToNextScene = () => {
    let currentSceneNum = this.state.currentSceneNumber;
    const name = document.getElementById('nameContent') ? document.getElementById('nameContent').textContent : '';
    const email = document.getElementById('emailContent') ? document.getElementById('emailContent').textContent : '';
    let activeStep = WalkthroughConfig.scenesConfig[currentSceneNum].stepLevel;
    let stateObject = {};

    stateObject['currentSceneNumber'] = currentSceneNum + 1;
    stateObject['activeStep'] = activeStep;

    if (name.length > 0) {
      stateObject['name'] = name;
    }

    if (email.length > 0) {
      stateObject['email'] = email;
    }

    if (
      WalkthroughConfig.scenesConfig[currentSceneNum].arguments && (
        WalkthroughConfig.scenesConfig[currentSceneNum].arguments[0] === 'email' ||
        WalkthroughConfig.scenesConfig[currentSceneNum].arguments[0] === 'name')
      ) {
      if (WalkthroughConfig.scenesConfig[currentSceneNum].arguments[0] === 'email') {
        if (email.length > 0) {
          this.setState(stateObject);
        }
      } else {
        if (name.length > 0) {
          this.setState(stateObject);
        }
      }
    } else {
      this.setState(stateObject);
    }
  };

  changePriceIncrease = (event) => {
    let entry = event.target.value.replace('%', '');
    const re = /^[0-9\b]+$/;

    if (entry === '' || re.test(entry)) {
      if (entry <= 100) {
        this.setState({ priceIncrease: entry });
      }
    }
  }

  changePriceIncreaseSlider = (event, value) => {
    this.setState({ priceIncrease: value.toFixed() });
  }

  changePriceDecrease = (event) => {
    let entry = event.target.value.replace('%', '');
    const re = /^[0-9\b]+$/;

    if (entry === '' || re.test(entry)) {
      if (entry <= 100) {
        this.setState({ priceDecrease: entry });
      }
    }
  }

  changePriceDecreaseSlider = (event, value) => {
    this.setState({ priceDecrease: value.toFixed() });
  }

  changeTimeOut = (event) => {
    let entry = event.target.value.replace(' hours', '');
    const re = /^[0-9\b]+$/;

    if (entry === '' || re.test(entry)) {
      if (entry <= 168) {
        this.setState({ timeOut: entry });
      }
    }
  }

  changeTimeOutSlider = (event, value) => {
    this.setState({ timeOut: value.toFixed() });
  }

  handleChange = name => event => {
    let currentSceneNum = this.state.currentSceneNumber;
    let activeStep = WalkthroughConfig.scenesConfig[currentSceneNum].stepLevel;
    this.setState({
      [name]: event.target.value,
      activeStep,
    });
  };

  handleExchangeListToggle = value => () => {
    const { checkedExchanges, currentSceneNumber } = this.state;
    const currentIndex = checkedExchanges.indexOf(value);
    const newChecked = [...checkedExchanges];
    let activeStep = WalkthroughConfig.scenesConfig[currentSceneNumber].stepLevel;
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    this.setState({
      checkedExchanges: newChecked,
      activeStep,
    });
  };

  handleSelection = (selection, propertyName) => {
    let currentSceneNum = this.state.currentSceneNumber;
    let activeStep = WalkthroughConfig.scenesConfig[currentSceneNum].stepLevel;
    let exchanges = this.state.checkedExchanges;

    let stateObject = {
      activeStep
    };

    if (propertyName === undefined) {
      // this is for exchange selection
      let existingIndex = exchanges.indexOf(selection);
      if (existingIndex !== -1) {
        exchanges.splice(existingIndex, 1);
      } else {
        exchanges.push(selection);
      }
      stateObject['checkedExchanges'] = exchanges;
    } else {
      stateObject['currentSceneNumber'] = currentSceneNum + 1;
      stateObject[propertyName] = selection;
    }

    this.setState(stateObject);
  };

  // handlePastCryptoTrader = isPastCryptoTrader => {
  //   let currentSceneNum = this.state.currentSceneNumber;
  //   if (!isPastCryptoTrader) {
  //     currentSceneNum = currentSceneNum + 2;
  //   }
  //   this.setState({
  //     currentSceneNumber: currentSceneNum + 1,
  //     isPastCryptoTrader
  //   });
  // };

  handlePastCryptoTrader = isPastCryptoTrader => {
    let currentSceneNum = this.state.currentSceneNumber;
    let activeStep = WalkthroughConfig.scenesConfig[currentSceneNum].stepLevel;
    let stepOrSteps = 1;
    if (!isPastCryptoTrader) {
      stepOrSteps = 3;
    }
    this.setState({
      currentSceneNumber: currentSceneNum + stepOrSteps,
      isPastCryptoTrader,
      activeStep,
    });
  };

  handleUseOfTA = doesUseTSA => {
    let currentSceneNum = this.state.currentSceneNumber;
    let activeStep = WalkthroughConfig.scenesConfig[currentSceneNum].stepLevel;
    this.setState({
      currentSceneNumber: currentSceneNum + 1,
      doesUseTSA,
      activeStep
    });
  };

   handleDiscoveryReasonSelection = event => {
    this.setState({ discoveryReason: event.target.value });
  };

  handleKeyPress = e => {
    const name = document.getElementById('nameContent') ? document.getElementById('nameContent').textContent : '';
    const email = document.getElementById('emailContent') ? document.getElementById('emailContent').textContent : '';

    var contenteditable = document.querySelector('[contenteditable]'),
    text = contenteditable.textContent;
    let stateObject = {};

    if (e.key === 'Enter') {
      let currentSceneNum = this.state.currentSceneNumber;
      // TODO: potential bug here
      let activeStep = WalkthroughConfig.scenesConfig[currentSceneNum + 1].stepLevel;

      stateObject['currentSceneNumber'] = currentSceneNum + 1;
      stateObject['activeStep'] = activeStep;

      if (name.length > 0) {
        stateObject['name'] = name;
      }

      if (email.length > 0 && email.indexOf('.') !== -1) {
        stateObject['email'] = email;
      }

      if (
        WalkthroughConfig.scenesConfig[currentSceneNum].arguments && (
          WalkthroughConfig.scenesConfig[currentSceneNum].arguments[0] === 'email' ||
          WalkthroughConfig.scenesConfig[currentSceneNum].arguments[0] === 'name')
        ) {
        if (WalkthroughConfig.scenesConfig[currentSceneNum].arguments[0] === 'email') {
          if (email.length > 0 && email.indexOf('.') !== -1) {
            this.setState(stateObject);
          } else {
            e.preventDefault();
          }
        } else {
          if (name.length > 0) {
            this.setState(stateObject);
          } else {
            e.preventDefault();
          }
        }
      } else {
        this.setState(stateObject);
      }

    } else {
      if (name.length > 0) {
        stateObject['showNameField'] = true;
      } else if (name.length === 0) {
        stateObject['showNameField'] = false;
      }

      if (email.length > 0 && email.indexOf('.') !== -1) {
        stateObject['showEmailField'] = true;
      } else if (email.length === 0) {
        stateObject['showEmailField'] = false;
      }

      this.setState(stateObject);
    }
  };


  renderWalkthrough() {
    // <Walkthrough />
    // <Chart />
    return (
      <Walkthrough
        activeStep={this.state.activeStep}
        goBack={this.goBack}
        changeToNextScene={this.changeToNextScene}
        cryptoCurrentStatus={this.state.cryptoCurrentStatus}
        handleChange={this.handleChange}
        handleExchangeListToggle={this.handleExchangeListToggle}
        handleSelection={this.handleSelection}
        handlePastCryptoTrader={this.handlePastCryptoTrader}
        handleUseOfTA={this.handleUseOfTA}
        handleDiscoveryReasonSelection={this.handleDiscoveryReasonSelection}
        handleKeyPress={this.handleKeyPress}
        currentSceneNumber={this.state.currentSceneNumber}
        name={this.state.name}
        email={this.state.email}
        phone={this.state.phone}
        showEmailField={this.state.showEmailField}
        showNameField={this.state.showNameField}
        checkedExchanges={this.state.checkedExchanges}
        discoveryReason={this.state.discoveryReason}
       />
    );
  }

  renderSummary() {
    return (
      <Summary
        goBack={this.goBack}
        cryptoRiskProfile={this.state.cryptoRiskProfile}
        changePriceIncrease={this.changePriceIncrease}
        changePriceIncreaseSlider={this.changePriceIncreaseSlider}
        changePriceDecrease={this.changePriceDecrease}
        changePriceDecreaseSlider={this.changePriceDecreaseSlider}
        changeTimeOut={this.changeTimeOut}
        changeTimeOutSlider={this.changeTimeOutSlider}
        currenciesToExplore={this.state.currenciesToExplore}
        checkedExchanges={this.state.checkedExchanges}
        name={this.state.name}
        phone={this.state.phone}
        email={this.state.email}
        spareTimeAvailability={this.state.spareTimeAvailability}
        packageSelected={this.state.packageSelected}
        priceIncrease={this.state.priceIncrease}
        priceDecrease={this.state.priceDecrease}
        timeOut={this.state.timeOut}
        surveyAnswers={this.state}
      />
    );
  }

  renderWelcome() {
    const {classes} = this.props;
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the CryptoSpotlight Walkthrough</h1>
        </header>
        <br />
        <Button
          variant="outlined"
          size="large"
          color="primary"
          className={classes.button}
          onClick={this.getStarted}>
          {'Get Started'}
        </Button>
      </div>
    );
  }

  render() {
    console.log('THIS STATE', this.state);
    return (
      <div className="App">
      {!this.state.enableWalkthrough ? this.renderSummary() : this.renderWalkthrough()}
      </div>
    );
  }
}

export default withStyles(styles)(App);
