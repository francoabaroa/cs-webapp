import React, { Component } from 'react';
import logo from './cs-logo.png';
import './App.css';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Chart from './components/Chart';
import Walkthrough from './components/Walkthrough';
import Summary from './components/Summary';

import WalkthroughConfig from './config/WalkthroughConfig';

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
      packageSelected: null,
      phone: '',
      phoneTradeSetup: '',
      priceIncrease: 15,
      priceDecrease: 5,
      referralSource: '',
      spacing: '40',
      spareTimeAvailability: '',
      technicalAnalysisUse: '', // unused
      timeOut: 24,
    };
  }

  componentDidMount() {
    if (this.state.enableWalkthrough) {
      let twoSeconds = 2000;
      let currentSceneNum = this.state.currentSceneNumber;
      let activeStep = WalkthroughConfig.scenesConfig[currentSceneNum].stepLevel;
      if (WalkthroughConfig.scenesConfig[currentSceneNum].method === undefined) {
        setTimeout(() => {
          this.setState({
            currentSceneNumber: currentSceneNum + 1,
            activeStep: activeStep,
          });
        }, twoSeconds)
      }
    }
  }

  componentDidUpdate() {
    let twoSeconds = 2000;
    let currentSceneNum = this.state.currentSceneNumber;
    let isLastScene = WalkthroughConfig.scenesConfig[currentSceneNum + 1] === undefined;

    if (this.state.enableWalkthrough) {
      let fiveSeconds = 5000;
      let secondsToWait = currentSceneNum === 1 ? fiveSeconds : twoSeconds;
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

    if (this.state.enableWalkthrough && isLastScene) {
      // TODO: better way to determine package
      let pkg = '';
      if (this.state.currenciesToExplore === 'Top currencies') {
        pkg = 'Coinbase';
      } else {
        pkg = 'Trader';
      }
        setTimeout(() => {
          this.setState({
            enableWalkthrough: false,
            packageSelected: pkg,
          });
        }, twoSeconds)
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
    let activeStep = WalkthroughConfig.scenesConfig[currentSceneNum].stepLevel;

    if (WalkthroughConfig.scenesConfig[currentSceneNum - 1].method === undefined) {
      scenesToSubtract = 2;
    }

    this.setState({
      currentSceneNumber: currentSceneNum - scenesToSubtract,
      enableWalkthrough: true,
      activeStep,
    });
  };

  changeToNextScene = () => {
    let currentSceneNum = this.state.currentSceneNumber;
    let activeStep = WalkthroughConfig.scenesConfig[currentSceneNum].stepLevel;
    this.setState({
      currentSceneNumber: currentSceneNum + 1,
      activeStep,
    });
  };

  changePriceIncrease = (event, value) => {
    this.setState({ priceIncrease: value.toFixed() });
  }

  changePriceDecrease = (event, value) => {
    this.setState({ priceDecrease: value.toFixed() });
  }

  changeTimeOut = (event, value) => {
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
    this.setState({
      [propertyName]: selection,
      currentSceneNumber: currentSceneNum + 1,
      activeStep
    });
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
    this.setState({
      currentSceneNumber: currentSceneNum + 1,
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
    if (e.key === 'Enter') {
      let currentSceneNum = this.state.currentSceneNumber;
      // TODO: potential bug here
      let activeStep = WalkthroughConfig.scenesConfig[currentSceneNum + 1].stepLevel;
      console.log('activeStep', activeStep);
      this.setState({
        currentSceneNumber: currentSceneNum + 1,
        activeStep,
      });
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
        handleChange={this.handleChange}
        handleExchangeListToggle={this.handleExchangeListToggle}
        handleSelection={this.handleSelection}
        handlePastCryptoTrader={this.handlePastCryptoTrader}
        handleUseOfTA={this.handleUseOfTA}
        handleDiscoveryReasonSelection={this.handleDiscoveryReasonSelection}
        handleKeyPress={this.handleKeyPress}
        currentSceneNumber={this.state.currentSceneNumber}
        name={this.state.name}
        phone={this.state.phone}
        checkedExchanges={this.state.checkedExchanges}
        discoveryReason={this.state.discoveryReason}
       />
    );
  }

  renderSummary() {
    return (
      <Summary
        goBack={this.goBack}
        changePriceIncrease={this.changePriceIncrease}
        changePriceDecrease={this.changePriceDecrease}
        changeTimeOut={this.changeTimeOut}
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
