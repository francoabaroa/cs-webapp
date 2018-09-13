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
      spacing: '40',
    };
  }

  renderHeadline() {
    let showName = this.props.currentSceneNumber === 3;
    let text = WalkthroughConfig.scenesConfig[this.props.currentSceneNumber].headline;
    if (showName) {
      text = text + this.props.name + '!';
    }
    return (
      <Grid key={this.props.currentSceneNumber} item>
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
      <Grid key={this.props.currentSceneNumber} item>
        <TextField
          fullWidth
          id={field[0]}
          className={classes.textField}
          value={this.props[field[0]]}
          onChange={this.props.handleChange(field[0])}
          onKeyPress={this.props.handleKeyPress}
          margin="normal"
        />
      </Grid>
    );
  }

  renderButtons(classes) {
    let buttonStrings = WalkthroughConfig.scenesConfig[this.props.currentSceneNumber].strings;
    let argument = WalkthroughConfig.scenesConfig[this.props.currentSceneNumber].arguments[0];
    let buttonSubStrings = [];
    let hasSubStrings = false;

    if (WalkthroughConfig.scenesConfig[this.props.currentSceneNumber].subStrings !== undefined) {
      hasSubStrings = true;
      buttonSubStrings = WalkthroughConfig.scenesConfig[this.props.currentSceneNumber].subStrings;
    }

    return buttonStrings.map((value, index) => {
    let selectionHandlerArgument = hasSubStrings ? buttonSubStrings[index] : buttonStrings[index];
      return (
        <Grid key={index} item>
          <Button
            variant="outlined"
            size="large"
            color="primary"
            className={classes.bigButton}
            onClick={this.props.handleSelection.bind(this, selectionHandlerArgument, argument)}>
            <Typography variant="headline" color="primary" >
              {buttonStrings[index]}
            </Typography>
            {hasSubStrings ? this.renderSubStrings(buttonSubStrings[index]) : []}
          </Button>
        </Grid>
    )});
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
          onClick={this.props.handlePastCryptoTrader.bind(this, strings[value] === 'Yes')}>
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
              onClick={this.props.handleExchangeListToggle(value)}
              className={classes.listItem}
            >
              <Checkbox
                checked={this.props.checkedExchanges.indexOf(value) !== -1}
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
          onClick={this.props.changeToNextScene}>
          {'Submit'}
        </Button>
      </div>
    );
  }

  renderRadioButtons(classes) {
    return (
      <Grid key={this.props.currentSceneNumber} item>
        <RadioGroup
          aria-label="Gender"
          name="gender1"
          className={classes.group}
          value={this.props.discoveryReason}
          onChange={this.props.handleDiscoveryReasonSelection}>
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
          onClick={this.props.changeToNextScene}>
          {'Submit'}
        </Button>
      </Grid>
    );
  }

  render() {
    const { classes, currentSceneNumber } = this.props;
    const { spacing } = this.state;
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
