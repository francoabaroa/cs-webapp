import React, { Component } from 'react';
import '../App.css';

// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/lab/Slider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  bigButton: {
    margin: theme.spacing.unit,
    height: '340px',
    width: '300px',
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 340,
    width: 300,
    textAlign: 'center',
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  slider: {
    width: '300px',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 480,
  },
});

const experienceLevels = {
  curious: 'We\'ll reward that curiosity, Goob. But first, let\'s get to know you!',
  informed: 'An expert, huh? We\'ll see if we can show you something new.',
  rekt: 'Oops, looks like you weren\'t using an indicator.  Let\'s fix that',
  skeptical: 'Excellent, we built our research database with skeptics in mind (and in our office).',
};

const scenes = {
  0: 'Hey, What\'s your name?', // text input
  1: 'Nice to meet you, ', // just headline
  2: 'When it comes to crypto, you are:', // just headline
  3: experienceLevels,
  4: 'Don\'t worry, it\'ll only take a few minutes.', // just headline
  5: 'Have you traded crypto in the past?', // yes - no
  6: 'Do you currently trade crypto?', // yes - no
  7: 'What exchange accounts do you have?', // options select list
  8: 'What are you looking for?', // 3 buttons
  9: 'What currencies should we explore?',
  10: 'What\'s your email?', // text input (NEED VALIDATION)
  11: 'When it comes to incorporating crypto into your life, you are: ', // 3 buttons
  12: 'When it comes to spare time during your day, you are: ', // 3 buttons
  13: 'When you receive an alert, can you trade it within 30 minutes?', // yes - no
  14: 'When it comes to crypto technology, you are: ', // 3 buttons
  15: 'When you trade cryptocurrencies, do you want to be: ', // slider
  16: 'When you make a profit, do you: ', // slider
  17: 'Lastly, We are happy to have met you. How did you hear about us?', // options select list
  18: 'FIN',
};

// const scenes = {
//   0: 'Hey there!', // just headline
//   1: 'Over the next few minutes, we will build a personalized alerts service for you using your answers to the following questions.', // just headline
//   2: 'What\’s your name?', // text input
//   3: 'Nice to meet you, ', // just headline
//   4: 'Have you traded crypto before?', // yes - no
//   5: 'Roughly how much money do you currently want to trade with in cryptocurrencies?', // 4 papers
//   6: 'What exchange accounts do you currently have?', // options select list
//   7: 'Are you setup to make trades from your phone?', // 3 papers
//   8: 'If you begin to receive frequent alerts, what is the most frequent you would be able to log in to your exchanges to make trades?', // 4 papers
//   9: 'When it comes to trading crypto, do you prefer to focus on a specific set of currencies?', // 4 papers
//   10: 'How much do you currently use technical analysis in your trading? (ex. RSI, MACD, etc.)', // 3 papers
//   11: 'What\'s your phone number?', // text input
//   12: 'How did you hear about us?', // options select list
//   13: 'FIN',
// };

// const actions = {
//   0: 'renderScene0',
//   2: 'renderScene2',

//   // 2: 'renderScene2',
//   5: 'renderScene5',
//   6: 'renderScene6',
//   7: 'renderScene7',
//   8: 'renderScene8',
//   9: 'renderScene9',
//   10: 'renderScene10',
//   11: 'renderScene11',
//   12: 'renderScene12',
//   13: 'renderScene13',
//   14: 'renderScene14',
//   15: 'renderScene15',
//   16: 'renderScene16',
// };

// const scenesWithoutUserAction = {
//   1: 1,
//   3: 3,
//   4: 4,
//   17: 17,
// };

const actions = {
  0: 'renderScene0',
  2: 'renderScene2',
  5: 'renderScene5',
  6: 'renderScene6',
  7: 'renderScene7',
  8: 'renderScene8',
  9: 'renderScene9',
  10: 'renderScene10',
  11: 'renderScene11',
  12: 'renderScene12',
  13: 'renderScene13',
  14: 'renderScene14',
  15: 'renderScene15',
  16: 'renderScene16',
};

const scenesWithoutUserAction = {
  1: 1,
  3: 3,
  4: 4,
  17: 17,
};



let riskTradingProfileLabels = {
  0: 'Risk Averse',
  1: 'Somewhere In The Middle',
  2: 'High Risk, High Reward',
};

let profitReachedActionLabels = {
  0: 'Let It Ride ',
  1: 'Take Some Money Of The Table ',
  2: 'Pocket The Gains',
};

let exchangesList = {
  1: 'Binance',
  2: 'Bitfinex',
  3: 'Bittrex',
  4: 'Coinbase',
  5: 'Cryptopia',
  6: 'HitBTC',
  7: 'Huobi',
  8: 'Kucoin',
  9: 'Okex',
  10: 'Poloniex',
}

class Walkthrough_Old extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canRespondToAlertQuickly: null,
      checkedExchanges: [],
      cryptoTechnologyBeliefLevel: '',
      currenciesToExplore: '',
      currentExperienceLevel: '',
      currentSceneNumber: 0,
      email: '',
      exchangeAccounts: [],
      incorporatingCryptoReason: '',
      isCurrentCryptoTrader: false,
      isPastCryptoTrader: false,
      name: '',
      profitReachedActionSliderValue: 0,
      searchReason: '',
      riskTradingProfileSliderValue: 0,
      spacing: '40',
      spareTimeAvailability: '',
    };
  }

  componentDidUpdate() {
    let twoSeconds = 2000;
    let currentSceneNum = this.state.currentSceneNumber;
    if (scenesWithoutUserAction[currentSceneNum]) {
      setTimeout(() => {
        this.setState({
          currentSceneNumber: currentSceneNum + 1,
        });
      }, twoSeconds)
    }
    console.log('componentDidUpdate()', this.state);
  }

  changeToNextScene = () => {
    let currentSceneNum = this.state.currentSceneNumber;
    this.setState({
      currentSceneNumber: currentSceneNum + 1,
    });
  };

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

  handleCurrenciesSelection = currenciesToExplore => {
    let currentSceneNum = this.state.currentSceneNumber;
    this.setState({
      currenciesToExplore: currenciesToExplore.toLowerCase(),
      currentSceneNumber: currentSceneNum + 1,
    });
  };

  handleRiskTradingProfileSliderValue = (event, value) => {
    this.setState({
      riskTradingProfileSliderValue: value
    });
  };

  handleProfitReachedActionSliderValueValueChange = (event, value) => {
    this.setState({
      profitReachedActionSliderValue: value
    });
  };

  handleExperienceLevelSelection = experienceLevel => {
    let currentSceneNum = this.state.currentSceneNumber;
    this.setState({
      currentExperienceLevel: experienceLevel.toLowerCase(),
      currentSceneNumber: currentSceneNum + 1,
    });
  };

  handleIncorporatingCryptoReasonSelection = incorporatingCryptoReason => {
    let currentSceneNum = this.state.currentSceneNumber;
    this.setState({
      incorporatingCryptoReason: incorporatingCryptoReason.toLowerCase(),
      currentSceneNumber: currentSceneNum + 1,
    });
  };

  handleSearchReasonSelection = searchReason => {
    let currentSceneNum = this.state.currentSceneNumber;
    this.setState({
      searchReason: searchReason.toLowerCase(),
      currentSceneNumber: currentSceneNum + 1,
    });
  };

  handleSpareTimeAvailabilitySelection = spareTimeAvailability => {
    let currentSceneNum = this.state.currentSceneNumber;
    this.setState({
      spareTimeAvailability: spareTimeAvailability.toLowerCase(),
      currentSceneNumber: currentSceneNum + 1,
    });
  };

  handleCryptoTechnologyBeliefLevelSelection = cryptoTechnologyBeliefLevel => {
    let currentSceneNum = this.state.currentSceneNumber;
    this.setState({
      cryptoTechnologyBeliefLevel: cryptoTechnologyBeliefLevel.toLowerCase(),
      currentSceneNumber: currentSceneNum + 1,
    });
  };

  handleCurrentCryptoTrader = isCurrentCryptoTrader => {
    let currentSceneNum = this.state.currentSceneNumber;
    if (!isCurrentCryptoTrader) {
      currentSceneNum = currentSceneNum + 1;
    }

    this.setState({
      currentSceneNumber: currentSceneNum + 1,
      isCurrentCryptoTrader
    });
  };

  handleCanRespondToAlertQuickly = canRespondToAlertQuickly => {
    let currentSceneNum = this.state.currentSceneNumber;
    this.setState({
      currentSceneNumber: currentSceneNum + 1,
      canRespondToAlertQuickly
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

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      let currentSceneNum = this.state.currentSceneNumber;
      this.setState({
        currentSceneNumber: currentSceneNum + 1,
      });
    }
  };

  renderHeadline() {
    let showName = this.state.currentSceneNumber === 1;
    let text = typeof scenes[this.state.currentSceneNumber] === 'string' ?
      scenes[this.state.currentSceneNumber] :
      scenes[this.state.currentSceneNumber][this.state.currentExperienceLevel];

    if (showName) {
      text = text + this.state.name;
    }

    return (
      <Grid key={this.state.currentSceneNumber} item>
        <header className="App-header2">
          <Typography variant="display2" color="primary">
            {text}
          </Typography>
        </header>
      </Grid>
    );
  }

  renderScene2(classes) {
    let strings = ['Informed', 'Curious', 'Skeptical', 'Rekt'];
    return [0, 1, 2, 3].map(value => (
      <Grid key={value} item>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          className={classes.bigButton}
          onClick={this.handleExperienceLevelSelection.bind(this, strings[value])}>
          {strings[value]}
        </Button>
      </Grid>
    ));
  }

  renderScene0(classes) {
    return (
      <Grid key={this.state.currentSceneNumber} item>
        <TextField
          fullWidth
          id="name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          onKeyPress={this.handleKeyPress}
          margin="normal"
        />
      </Grid>
    );
  }

  renderScene5(classes) {
    let strings = ['Yes', 'No'];
    return [0, 1].map(value => (
      <Grid key={value} item>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          className={classes.bigButton}
          onClick={this.handlePastCryptoTrader.bind(this, strings[value] === 'Yes')}>
          {strings[value]}
        </Button>
      </Grid>
    ));
  }

  renderScene6(classes) {
    let strings = ['Yes', 'No'];
    return [0, 1].map(value => (
      <Grid key={value} item>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          className={classes.bigButton}
          onClick={this.handleCurrentCryptoTrader.bind(this, strings[value] === 'Yes')}>
          {strings[value]}
        </Button>
      </Grid>
    ));
  }

  renderScene7(classes) {
    let strings = ['Yes', 'No'];

    return (
      <div className={classes.list}>
        <List>
          {Object.values(exchangesList).map(value => (
            <ListItem
              key={value}
              role={undefined}
              dense
              button
              onClick={this.handleExchangeListToggle(value)}
              className={classes.listItem}
            >
              <Checkbox
                checked={this.state.checkedExchanges.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
              />
              <ListItemText primary={`${value}`} />
            </ListItem>
          ))}
        </List>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          className={classes.button}
          onClick={this.changeToNextScene}>
          {'Submit'}
        </Button>
      </div>
    );
  }

  renderScene8(classes) {
    let strings = ['Specific Need', 'General Interest', 'Discovery'];
    return [0, 1, 2].map(value => (
      <Grid key={value} item>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          className={classes.bigButton}
          onClick={this.handleSearchReasonSelection.bind(this, strings[value])}>
          {strings[value]}
        </Button>
      </Grid>
    ));
  }

  renderScene9(classes) {
    let strings = ['Top Currencies', 'Well Known Currencies', 'All Currencies'];
    return [0, 1, 2].map(value => (
      <Grid key={value} item>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          className={classes.bigButton}
          onClick={this.handleCurrenciesSelection.bind(this, strings[value])}>
          {strings[value]}
        </Button>
      </Grid>
    ));
  }

  renderScene10(classes) {
    return (
      <Grid key={this.state.currentSceneNumber} item>
        <TextField
          fullWidth
          id="email"
          className={classes.textField}
          value={this.state.email}
          onChange={this.handleChange('email')}
          onKeyPress={this.handleKeyPress}
          margin="normal"
        />
      </Grid>
    );
  }

  renderScene11(classes) {
    let strings = ['Dedicated', 'On A Kick', 'Ready To Learn'];
    return [0, 1, 2].map(value => (
      <Grid key={value} item>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          className={classes.bigButton}
          onClick={this.handleIncorporatingCryptoReasonSelection.bind(this, strings[value])}>
          {strings[value]}
        </Button>
      </Grid>
    ));
  }

  renderScene12(classes) {
    let strings = ['Completely Booked', 'Occasionally Available', 'Pretty Free'];
    return [0, 1, 2].map(value => (
      <Grid key={value} item>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          className={classes.bigButton}
          onClick={this.handleSpareTimeAvailabilitySelection.bind(this, strings[value])}>
          {strings[value]}
        </Button>
      </Grid>
    ));
  }

  renderScene13(classes) {
    let strings = ['Yes', 'No'];
    return [0, 1].map(value => (
      <Grid key={value} item>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          className={classes.bigButton}
          onClick={this.handleCanRespondToAlertQuickly.bind(this, strings[value] === 'Yes')}>
          {strings[value]}
        </Button>
      </Grid>
    ));
  }

  renderScene14(classes) {
    let strings = ['A Believer', 'Open', 'Skeptical'];
    return [0, 1, 2].map(value => (
      <Grid key={value} item>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          className={classes.bigButton}
          onClick={this.handleCryptoTechnologyBeliefLevelSelection.bind(this, strings[value])}>
          {strings[value]}
        </Button>
      </Grid>
    ));
  }

  renderScene15(classes) {
    let value = this.state.riskTradingProfileSliderValue;
    let label = riskTradingProfileLabels[value];
    return (
      <Grid key={this.state.currentSceneNumber} item>
        <Slider
          className={classes.slider}
          value={value}
          min={0}
          max={2}
          step={1}
          onChange={this.handleRiskTradingProfileSliderValue}
        />
        <Typography id="label">{label}</Typography>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          className={classes.button}
          onClick={this.changeToNextScene}>
          {'Submit'}
        </Button>
      </Grid>
    );
  }

  renderScene16(classes) {
    let value = this.state.profitReachedActionSliderValue;
    let label = profitReachedActionLabels[value];
    return (
      <Grid key={this.state.currentSceneNumber} item>
        <Slider
          className={classes.slider}
          value={value}
          min={0}
          max={2}
          step={1}
          onChange={this.handleProfitReachedActionSliderValueValueChange}
        />
        <Typography id="label">{label}</Typography>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          className={classes.button}
          onClick={this.changeToNextScene}>
          {'Submit'}
        </Button>
      </Grid>
    );
  }

  render() {
    const { classes } = this.props;
    const { spacing, currentSceneNumber } = this.state;

    let headline = this.renderHeadline();
    let body = this[actions[this.state.currentSceneNumber]] ?
      this[actions[this.state.currentSceneNumber]](classes) :
      [];

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item md={12}>
          <Grid item className={classes.demo}>
            {headline}
          </Grid>
          <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
            {body}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Walkthrough_Old);
