import React, { Component } from 'react';
import '../App.css';

// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';


import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  bigButton: {
    margin: theme.spacing.unit,
    height: '300px',
    width: '260px',
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
  mediumButton: {
    margin: theme.spacing.unit,
    height: '200px',
    width: '200px',
    borderRadius: '50%',
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
  demo: {
    marginTop: '15px',
  }
});

const scenes = {
  0: 'Hey there!', // just headline
  1: 'Over the next few minutes, we will build a personalized alerts service for you using your answers to the following questions.', // just headline
  2: 'What\'s your first name?', // text input
  3: 'Nice to meet you, ', // just headline
  4: 'Have you traded crypto before?', // yes - no
  5: 'What exchange accounts do you currently have?', // options select list
  6: 'Are you setup to make trades from your phone?', // 3 papers
  7: 'Roughly how much money do you currently want to trade with in cryptocurrencies?', // 4 papers
  8: 'If you begin to receive frequent alerts, what is the most frequent you would be able to log in to your exchanges to make trades?', // 4 papers
  9: 'When it comes to trading crypto, do you prefer to focus on a specific set of currencies?', // 4 papers
  10: 'How much do you currently use technical analysis in your trading? (ex. RSI, MACD, etc.)', // 3 papers
  11: 'What\'s your phone number?', // text input
  12: 'How did you hear about us?', // options select list
  13: 'Loading your strategy...',
};

const actions = {
  2: 'renderScene2',
  4: 'renderScene4',
  5: 'renderScene5',
  6: 'renderScene6',
  7: 'renderScene7',
  8: 'renderScene8',
  9: 'renderScene9',
  10: 'renderScene10',
  11: 'renderScene11',
  12: 'renderScene12',
};

const scenesWithoutUserAction = {
  0: 0,
  1: 1,
  3: 3,
};

let exchangesList = {
  0: 'Binance',
  1: 'Bitfinex',
  2: 'Bittrex',
  3: 'Coinbase',
  4: 'Cryptopia',
  5: 'HitBTC',
  6: 'Huobi',
  7: 'Kucoin',
  8: 'Okex',
  9: 'Poloniex',
};

class Walkthrough extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedExchanges: [], // 5
      currenciesToExplore: '', // 9
      currentSceneNumber: 2,
      discoveryReason: '', // 12
      email: '',
      isPastCryptoTrader: false, // 4
      moneyWillingToInvest: '', // 7
      name: '', // 2
      phone: '', // 11
      phoneTradeSetup: '', // 6
      spacing: '40',
      spareTimeAvailability: '', // 8
      technicalAnalysisUse: '', // 10
    };
  }

  componentDidMount() {
    let twoSeconds = 2000;
    let currentSceneNum = this.state.currentSceneNumber;
    if (scenesWithoutUserAction[currentSceneNum] !== undefined) {
      setTimeout(() => {
        this.setState({
          currentSceneNumber: currentSceneNum + 1,
        });
      }, twoSeconds)
    }
  }

  componentDidUpdate() {
    let twoSeconds = 2000;
    let fiveSeconds = 5000;
    let currentSceneNum = this.state.currentSceneNumber;
    let secondsToWait = currentSceneNum === 1 ? fiveSeconds : twoSeconds;
    if (scenesWithoutUserAction[currentSceneNum]) {
      setTimeout(() => {
        this.setState({
          currentSceneNumber: currentSceneNum + 1,
        });
      }, secondsToWait)
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

  renderHeadline() {
    let showName = this.state.currentSceneNumber === 3;
    let text = scenes[this.state.currentSceneNumber];

    if (showName) {
      text = text + this.state.name + '!';
    }

    return (
      <Grid key={this.state.currentSceneNumber} item>
        <header className="App-header2">
          <Typography variant="display1" color="primary">
            {text}
          </Typography>
        </header>
      </Grid>
    );
  }

  renderTextInput(classes, field) {
    return (
      <Grid key={this.state.currentSceneNumber} item>
        <TextField
          fullWidth
          id={field}
          className={classes.textField}
          value={this.state[field]}
          onChange={this.handleChange(field)}
          onKeyPress={this.handleKeyPress}
          margin="normal"
        />
      </Grid>
    );
  }

   renderScene2(classes) {
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

  renderScene4(classes) {
    let strings = ['Yes', 'No'];
    return [0, 1].map(value => (
      <Grid key={value} item>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          className={classes.mediumButton}
          onClick={this.handlePastCryptoTrader.bind(this, strings[value] === 'Yes')}>
          {strings[value]}
        </Button>
      </Grid>
    ));
  }

  renderScene5(classes) {
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

  renderScene6(classes) {
    let strings = ['Yes', 'Partially', 'Not Yet'];
    return [0, 1, 2].map(value => (
      <Grid key={value} item>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          className={classes.bigButton}
          onClick={this.handleSelection.bind(this, strings[value], 'phoneTradeSetup')}>
          <Typography variant="headline" color="primary" >
            {strings[value]}
          </Typography>
        </Button>
      </Grid>
    ));
  }

  renderScene7(classes) {
    let strings = ['Less than $500', '$501 - $5,000', '$5,001 - $25,000', '$25,000+'];
    return [0, 1, 2, 3].map(value => (
      <Grid key={value} item>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          className={classes.bigButton}
          onClick={this.handleSelection.bind(this, strings[value], 'moneyWillingToInvest')}>
          <Typography variant="headline" color="primary" >
            {strings[value]}
          </Typography>
        </Button>
      </Grid>
    ));
  }

  renderScene8(classes) {
    let strings = ['Multiple times a day', 'Once a day', 'Few times a week', 'Few times a month'];
    return [0, 1, 2, 3].map(value => (
      <Grid key={value} item>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          className={classes.bigButton}
          onClick={this.handleSelection.bind(this, strings[value], 'spareTimeAvailability')}>
          <Typography variant="headline" color="primary" >
            {strings[value]}
          </Typography>
        </Button>
      </Grid>
    ));
  }

  renderScene9(classes) {
    let strings = ['Safest', 'Moderate', 'High-risk, high-reward', 'Any and all'];
    let subStrings = ['Top 5 by trading volume', 'Top 25 by trading volume', 'Top 100 by trading volume', 'Top 250 by market cap'];
    return [0, 1, 2, 3].map(value => (
      <Grid key={value} item>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          className={classes.bigButton}
          onClick={this.handleSelection.bind(this, strings[value], 'currenciesToExplore')}>
          <Typography variant="headline" color="primary" >
            {strings[value]}
          </Typography>
          {/* TODO: fix display block element*/}
          <div>
          {subStrings[value]}
          </div>
        </Button>
      </Grid>
    ));
  }

  renderScene10(classes) {
    let strings = ['None', 'Some', 'Heavily'];
    return [0, 1, 2].map(value => (
      <Grid key={value} item>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          className={classes.bigButton}
          onClick={this.handleSelection.bind(this, strings[value], 'technicalAnalysisUse')}>
          <Typography variant="headline" color="primary" >
            {strings[value]}
          </Typography>
        </Button>
      </Grid>
    ));
  }

  renderScene11(classes) {
    return (
      <Grid key={this.state.currentSceneNumber} item>
        <TextField
          fullWidth
          id="phone"
          className={classes.textField}
          value={this.state.phone}
          onChange={this.handleChange('phone')}
          onKeyPress={this.handleKeyPress}
          margin="normal"
        />
      </Grid>
    );
  }

  renderScene12(classes) {
    return (
      <Grid key={this.state.currentSceneNumber} item>
        <RadioGroup
          aria-label="Gender"
          name="gender1"
          className={classes.group}
          value={this.state.discoveryReason}
          onChange={this.handleDiscoveryReasonSelection}>
          <FormControlLabel value="searchEngine" control={<Radio />} label="Search Engine" />
          <FormControlLabel value="socialMedia" control={<Radio />} label="Social Media" />
          <FormControlLabel value="sweatcoin" control={<Radio />} label="Sweatcoin" />
          <FormControlLabel value="productHunt" control={<Radio />} label="Product Hunt" />
          <FormControlLabel value="wordOfMouth" control={<Radio />} label="Word of Mouth" />
        </RadioGroup>
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

  /*
  renderScene17(props) {
    const { classes } = props;
    return (
      <div>
        <Paper className={classes.paper} elevation={1}>
          <Typography variant="headline" component="h3">
            This is a sheet of paper.
          </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your application.
          </Typography>
        </Paper>
      </div>
    );
  }
  */

  render() {
    const { classes } = this.props;
    const { spacing, currentSceneNumber } = this.state;

    let headline = this.renderHeadline();
    let body = this[actions[currentSceneNumber]] ?
      this[actions[currentSceneNumber]](classes) :
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

export default withStyles(styles)(Walkthrough);
