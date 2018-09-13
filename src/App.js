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
      enableWalkthrough: true,
      checkedExchanges: [],
      currenciesToExplore: '',
      currentSceneNumber: 0,
      discoveryReason: '',
      email: '',
      isPastCryptoTrader: false,
      moneyWillingToInvest: '',
      name: '',
      phone: '',
      phoneTradeSetup: '',
      priceIncrease: 15,
      priceDecrease: 5,
      timeOut: 24,
      spacing: '40',
      spareTimeAvailability: '',
      technicalAnalysisUse: '',
    };
  }

  componentDidMount() {
    if (this.state.enableWalkthrough) {
      let twoSeconds = 2000;
      let currentSceneNum = this.state.currentSceneNumber;
      if (WalkthroughConfig.scenesConfig[currentSceneNum].method === undefined) {
        setTimeout(() => {
          this.setState({
            currentSceneNumber: currentSceneNum + 1,
          });
        }, twoSeconds)
      }
    }
  }

  componentDidUpdate() {
    let twoSeconds = 2000;
    let currentSceneNum = this.state.currentSceneNumber;

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
      if (currentSceneNum === 13) {
        console.log('componentDidUpdate()', this.state);
      }
    }

    if (this.state.enableWalkthrough && currentSceneNum === 13) {
        setTimeout(() => {
          this.setState({
            enableWalkthrough: false,
          });
        }, twoSeconds)
      }
  }

  getStarted = () => {
    this.setState({
      enableWalkthrough: !this.state.enableWalkthrough
    });
  }

  changeToNextScene = () => {
    let currentSceneNum = this.state.currentSceneNumber;
    this.setState({
      currentSceneNumber: currentSceneNum + 1,
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
    this.setState({
      [name]: event.target.value,
    });
  };

  handleExchangeListToggle = value => () => {
    const { checkedExchanges } = this.state;
    const currentIndex = checkedExchanges.indexOf(value);
    const newChecked = [...checkedExchanges];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    this.setState({
      checkedExchanges: newChecked,
    });
  };

  handleSelection = (selection, propertyName) => {
    let currentSceneNum = this.state.currentSceneNumber;
    this.setState({
      [propertyName]: selection,
      currentSceneNumber: currentSceneNum + 1,
    });
  };

  handlePastCryptoTrader = isPastCryptoTrader => {
    let currentSceneNum = this.state.currentSceneNumber;
    if (!isPastCryptoTrader) {
      currentSceneNum = currentSceneNum + 2;
    }
    this.setState({
      currentSceneNumber: currentSceneNum + 1,
      isPastCryptoTrader
    });
  };

   handleDiscoveryReasonSelection = event => {
    this.setState({ discoveryReason: event.target.value });
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      let currentSceneNum = this.state.currentSceneNumber;
      this.setState({
        currentSceneNumber: currentSceneNum + 1,
      });
    }
  };


  renderWalkthrough() {
    // <Walkthrough />
    // <Chart />
    return (
      <Walkthrough
        changeToNextScene={this.changeToNextScene}
        handleChange={this.handleChange}
        handleExchangeListToggle={this.handleExchangeListToggle}
        handleSelection={this.handleSelection}
        handlePastCryptoTrader={this.handlePastCryptoTrader}
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
        changePriceIncrease={this.changePriceIncrease}
        changePriceDecrease={this.changePriceDecrease}
        changeTimeOut={this.changeTimeOut}
        currenciesToExplore={this.state.currenciesToExplore}
        checkedExchanges={this.state.checkedExchanges}
        name={this.state.name}
        phone={this.state.phone}
        email={this.state.email}
        spareTimeAvailability={this.state.spareTimeAvailability}
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
    return (
      <div className="App">
        {!this.state.enableWalkthrough ? this.renderSummary() : this.renderWalkthrough()}
      </div>
    );
  }
}

export default withStyles(styles)(App);
