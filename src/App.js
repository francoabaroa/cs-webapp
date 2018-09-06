import React, { Component } from 'react';
import logo from './cs-logo.png';
import './App.css';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Chart from './components/Chart';
import Walkthrough from './components/Walkthrough';

import Walkthrough_Old from './components/Walkthrough_Old';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enableWalkthrough: false,
    };
  }

  getStarted = () => {
    this.setState({
      enableWalkthrough: !this.state.enableWalkthrough
    });
  }

  renderWalkthrough() {
    console.log('this.state', this.state);
    // <Walkthrough_Old />
    // <Walkthrough />
    // <Chart />
    return (
      <Walkthrough />
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
        {!this.state.enableWalkthrough ? this.renderWelcome() : this.renderWalkthrough()}
      </div>
    );
  }
}

export default withStyles(styles)(App);
