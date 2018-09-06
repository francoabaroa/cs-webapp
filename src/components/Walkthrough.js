import React, { Component } from 'react';
import '../App.css';

import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import WalkthroughConfig from '../config/WalkthroughConfig';

class Walkthrough extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedExchanges: [],
      currenciesToExplore: '',
      currentSceneNumber: 2,
      discoveryReason: '',
      email: '',
      isPastCryptoTrader: false,
      moneyWillingToInvest: '',
      name: '',
      phone: '',
      phoneTradeSetup: '',
      spacing: '40',
      spareTimeAvailability: '',
      technicalAnalysisUse: '',
    };
  }

  componentDidMount() {
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

  componentDidUpdate() {
    let twoSeconds = 2000;
    let fiveSeconds = 5000;
    let currentSceneNum = this.state.currentSceneNumber;
    let secondsToWait = currentSceneNum === 1 ? fiveSeconds : twoSeconds;
    if (WalkthroughConfig.scenesConfig[currentSceneNum].method === undefined) {
      setTimeout(() => {
        this.setState({
          currentSceneNumber: currentSceneNum + 1,
        });
      }, secondsToWait)
    }
    currentSceneNum === 13 ? console.log('componentDidUpdate()', this.state) : null;
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
    let text = WalkthroughConfig.scenesConfig[this.state.currentSceneNumber].headline;
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
          id={field[0]}
          className={classes.textField}
          value={this.state[field[0]]}
          onChange={this.handleChange(field[0])}
          onKeyPress={this.handleKeyPress}
          margin="normal"
        />
      </Grid>
    );
  }

  renderButtons(classes) {
    let buttonStrings = WalkthroughConfig.scenesConfig[this.state.currentSceneNumber].strings;
    let argument = WalkthroughConfig.scenesConfig[this.state.currentSceneNumber].arguments[0];
    let buttonSubStrings = [];
    let hasSubStrings = false;

    if (WalkthroughConfig.scenesConfig[this.state.currentSceneNumber].subStrings !== undefined) {
      hasSubStrings = true;
      buttonSubStrings = WalkthroughConfig.scenesConfig[this.state.currentSceneNumber].subStrings;
    }

    return buttonStrings.map((value, index) => (
      <Grid key={index} item>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          className={classes.bigButton}
          onClick={this.handleSelection.bind(this, buttonStrings[index], argument)}>
          <Typography variant="headline" color="primary" >
            {buttonStrings[index]}
          </Typography>
          {hasSubStrings ? this.renderSubStrings(buttonSubStrings[index]) : []}
        </Button>
      </Grid>
    ));
  }

  renderSubStrings(subString) {
    return (
      <div>
      {subString}
      </div>
    );
  }

  renderYesNo(classes) {
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

  renderCheckboxList(classes) {
    return (
      <div className={classes.list}>
        <List>
          {Object.values(WalkthroughConfig.exchangesList).map(value => (
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

  renderRadioButtons(classes) {
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

  render() {
    const { classes } = this.props;
    const { spacing, currentSceneNumber } = this.state;
    let headline = this.renderHeadline();
    let args = [];
    let body = [];

    if (WalkthroughConfig.scenesConfig[currentSceneNumber]) {
      if (WalkthroughConfig.scenesConfig[currentSceneNumber].arguments) {
        args = WalkthroughConfig.scenesConfig[currentSceneNumber].arguments;
      }
    }
    if (
      WalkthroughConfig.scenesConfig[currentSceneNumber].method !== undefined
      && this[WalkthroughConfig.scenesConfig[currentSceneNumber].method] !== undefined
    ) {
      body = this[WalkthroughConfig.scenesConfig[currentSceneNumber].method](classes, args);
    }

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

export default withStyles(WalkthroughConfig.styles)(Walkthrough);
