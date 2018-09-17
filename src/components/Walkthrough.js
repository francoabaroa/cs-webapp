import React, { Component } from 'react';
import '../App.css';

import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LinearProgress from '@material-ui/core/LinearProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import WalkthroughConfig from '../config/WalkthroughConfig';

import classNames from 'classnames';

function getSteps() {
  return ['Basics', 'Lifestyle', 'Values', 'Strategy'];
}

class Walkthrough extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: 25,
      spacing: '40',
    };
  }

  componentDidUpdate(prevProps) {
    // if (this.props.currentSceneNumber !== prevProps.currentSceneNumber) {
    //   console.log('in here!!');
    //   let step = this.state.activeStep;
    //   this.setState({
    //     activeStep: step++,
    //   });
    // }
  }


  renderHeadline(classes) {
    let showName = this.props.currentSceneNumber === 2;
    let text = WalkthroughConfig.scenesConfig[this.props.currentSceneNumber].headline;
    if (showName) {
      text = text + this.props.name;
    }
    return (
      <Grid key={this.props.currentSceneNumber} item>
        <header className="App-header2" className={classes.header}>
          <h1>
          {text}
          </h1>
        </header>
      </Grid>
    );
  }

  renderTextInput(classes, field) {
    return (
      <Grid key={this.props.currentSceneNumber} item>
        <FormControl className={classes.margin}>
        <Input
          onKeyPress={this.props.handleKeyPress}
          onChange={this.props.handleChange(field[0])}
          className={classNames(classes.textField, classes.inputFieldFont)}
          disableUnderline={true}
          value={this.props[field[0]]}
        />
        </FormControl>
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
            <div className={classes.buttonLabel}>{buttonStrings[index]}</div>
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
    let argument = WalkthroughConfig.scenesConfig[this.props.currentSceneNumber].arguments[0];
    return [0, 1].map(value => (
      <Grid key={value} item>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          className={classes.mediumButton}
          onClick={this.props[argument].bind(this, strings[value] === 'Yes')}>
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

  // renderRadioButtons(classes) {
  //   return (
  //     <Grid key={this.props.currentSceneNumber} item>
  //       <RadioGroup
  //         aria-label="Gender"
  //         name="gender1"
  //         className={classes.group}
  //         value={this.props.discoveryReason}
  //         onChange={this.props.handleDiscoveryReasonSelection}>
  //         <FormControlLabel value="searchEngine" control={<Radio />} label="Search Engine" />
  //         <FormControlLabel value="socialMedia" control={<Radio />} label="Social Media" />
  //         <FormControlLabel value="sweatcoin" control={<Radio />} label="Sweatcoin" />
  //         <FormControlLabel value="productHunt" control={<Radio />} label="Product Hunt" />
  //         <FormControlLabel value="wordOfMouth" control={<Radio />} label="Word of Mouth" />
  //       </RadioGroup>
  //       <Button
  //         variant="outlined"
  //         size="large"
  //         color="primary"
  //         className={classes.button}
  //         onClick={this.props.changeToNextScene}>
  //         {'Submit'}
  //       </Button>
  //       <Button
  //         variant="outlined"
  //         size="large"
  //         color="primary"
  //         className={classes.button}
  //         onClick={this.props.goBack}>
  //         {'Back'}
  //       </Button>
  //     </Grid>
  //   );
  // }

  render() {
    const { classes, currentSceneNumber, activeStep } = this.props;
    const { spacing } = this.state;
    let headline = this.renderHeadline(classes);
    const steps = getSteps();
    let args = [];
    let body = [];
    let button = [];

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
      // button = (
      //   <Button
      //       variant="outlined"
      //       size="small"
      //       color="primary"
      //       className={classes.button}
      //       onClick={this.props.goBack}>
      //       {'Go back'}
      //     </Button>
      // );
    }

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item md={12}>
          {button}
          <div className={classes.demo2}>
           <Stepper activeStep={activeStep} alternativeLabel className={classes.stepper}>
              {steps.map(label => {
                return (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </div>
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
