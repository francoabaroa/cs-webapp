import React, { Component } from 'react';
import '../App.css';

import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
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
import Paper from '@material-ui/core/Paper';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';

import WalkthroughConfig from '../config/WalkthroughConfig';

import informed from '../assets/informed.png';
import curious from '../assets/curious.png';
import skeptical from '../assets/skeptical.png';
import rekt from '../assets/rekt.png';
import coinbase from '../assets/Coinbase.png';
import binance from '../assets/BNB.png';
import okex from '../assets/OKex.png';
import kraken from '../assets/Kraken.png';
import huobi from '../assets/huobi.png';
import poloniex from '../assets/polo.png';
import completelyBooked from '../assets/completely-booked.png';
import occasionallyAvailable from '../assets/Occasionally-available.png';
import prettyFree from '../assets/pretty-free.png';
import topCurrencies from '../assets/topcurrencies.png';
import wellKnown from '../assets/wellknown.png';
import allOfThem from '../assets/allofem.png';
import noRisk from '../assets/norisk.png';
import midRisk from '../assets/midrisk.png';
import highRisk from '../assets/highrisk.png';
import friend from '../assets/friend.png';
import twitter from '../assets/twitter.png';
import productHunt from '../assets/ph.png';
import google from '../assets/google.png';
import facebook from '../assets/fb.png';
import instagram from '../assets/insta.png';
import yes from '../assets/yep.png';
import no from '../assets/nope.png';
import wink2 from '../assets/wink2.png';
import wink3 from '../assets/wink3.png';
import wave from '../assets/Wave.png';
import animation_wave from '../assets/animation_wave.gif';

import classNames from 'classnames';

const cryptoCurrentStatus = {
  informed,
  curious,
  skeptical,
  rekt,
};

const exchangeImages = {
  coinbase,
  binance,
  okex,
  kraken,
  huobi,
  poloniex
};

const spareTimeAvailability = {
  completelyBooked,
  occasionallyAvailable,
  prettyFree
};

const currenciesToExplore = {
  topCurrencies,
  wellKnown,
  allOfThem,
};

const cryptoRiskProfile = {
  noRisk,
  midRisk,
  highRisk
};

const referralSource = {
  friend,
  twitter,
  productHunt,
  google,
  facebook,
  instagram,
};

const images = {
  cryptoCurrentStatus,
  exchangeImages,
  spareTimeAvailability,
  currenciesToExplore,
  cryptoRiskProfile,
  referralSource,
};

const winks = {
  wink3,
  wink2,
};

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

  renderHeadline(classes) {
    let isLastScene = WalkthroughConfig.scenesConfig[this.props.currentSceneNumber + 1] === undefined;
    let showName =
      this.props.currentSceneNumber === 2 ||
      this.props.currentSceneNumber === 3;
    let isFirstSlide = this.props.currentSceneNumber === 0;
    let currentStatus = ['Informed', 'Curious', 'Skeptical', 'Rekt'];
    let showCustomizedResponse = this.props.currentSceneNumber === 5;
    let hasSubHeadline =
      WalkthroughConfig.scenesConfig[this.props.currentSceneNumber].subHeadline ?
        true :
        false;
    let text =
      WalkthroughConfig.scenesConfig[this.props.currentSceneNumber].headline;
    let multipleSelections =
      WalkthroughConfig.scenesConfig[this.props.currentSceneNumber].multipleSelections;
    let winkImageToUse =
      WalkthroughConfig.scenesConfig[this.props.currentSceneNumber].icons ?
        winks[WalkthroughConfig.scenesConfig[this.props.currentSceneNumber].icons[0]] :
        null;

    if (showName) {
      text = text + this.props.name;
    }
    if (showCustomizedResponse && WalkthroughConfig.scenesConfig[this.props.currentSceneNumber].customizedResponses) {
      let index = currentStatus.indexOf(this.props.cryptoCurrentStatus);
      text = WalkthroughConfig.scenesConfig[this.props.currentSceneNumber].customizedResponses[index];
    }

    let stepperLabels = WalkthroughConfig.scenesConfig[this.props.currentSceneNumber].stepperLabels;

    console.log('isLastScene', isLastScene);

    if (stepperLabels && stepperLabels.length > 0) {
      return (
        <Grid container className={classes.demo} justify="center" spacing={Number(0)}>
          <Grid item lg={3}>
            <header className="App-header2" className={classes.header}>
              <div className={classes.surveyHeadline}>
                {stepperLabels[0]}
              </div>
            </header>
          </Grid>
          <Grid item lg={3}>
            <header className="App-header2" className={classes.header}>
              <div className={classes.surveyHeadline}>
              {stepperLabels[1]}
              </div>
            </header>
          </Grid>
          <Grid item lg={3}>
            <header className="App-header2" className={classes.header}>
              <div className={classes.surveyHeadline}>
              {stepperLabels[2]}
              </div>
            </header>
          </Grid>
          <Grid item lg={3}>
            <header className="App-header2" className={classes.header}>
              <div className={classes.surveyHeadline}>
              {stepperLabels[3]}
              </div>
            </header>
          </Grid>
        </Grid>
      );
    } else if (isLastScene) {
      return (
        <Grid container className={classes.demo} justify="center" spacing={Number(0)}>
          <Grid item lg={12}>
            <header className="App-header2" className={classes.header}>
              <div id="pulsating-circle">
              </div>
            </header>
          </Grid>
        </Grid>
      );
    } else {
      return (
        <Grid key={this.props.currentSceneNumber} item>
          <header className="App-header2" className={classes.header}>
            <div className={classes.surveyHeadline}>
            <div style={showName ? {paddingBottom: '50px'} : null}> {text} </div>
            {
              hasSubHeadline ?
                <div className={classes.surveySubHeadline}>
                  { WalkthroughConfig.scenesConfig[this.props.currentSceneNumber].subHeadline }
                </div>
                : null
            }
            {showName ? <img src={winkImageToUse} /> : null}
            {isFirstSlide ? <img src={wave} style={{paddingTop: '45px'}} />: null}
            </div>
          </header>
        </Grid>
      );
    }
  }

  renderTextInput(classes, field) {
    let shouldDisplayButton = false;
    if (this.props.showNameField && WalkthroughConfig.scenesConfig[this.props.currentSceneNumber].arguments[0] === 'name') {
      shouldDisplayButton = true;
    } else if (this.props.showEmailField && WalkthroughConfig.scenesConfig[this.props.currentSceneNumber].arguments[0] === 'email') {
      shouldDisplayButton = true;
    }

    return (
      <Grid key={this.props.currentSceneNumber} item>
        <div className={classes.divInput}>
          <div className={classes.divInputBox} id={field[0] === 'name' ?  'nameContent' : field[0] === 'email' ? 'emailContent' : null} contentEditable onKeyPress={this.props.handleKeyPress}
          onChange={this.props.handleChange(field[0])}></div>
          <span onClick={this.props.changeToNextScene} className={shouldDisplayButton ? classes.enterButton3 : classes.displayNone}>></span>
        </div>
        <input
          onKeyPress={this.props.handleKeyPress}
          onChange={this.props.handleChange(field[0])}
          className={classNames(classes.textField, classes.inputFieldFont)}
          value={this.props[field[0]]}
          style={{display: 'none'}}
        />
      </Grid>
    );
  }

  renderButtons(classes) {
    let buttonStrings = WalkthroughConfig.scenesConfig[this.props.currentSceneNumber].strings;
    let argument = WalkthroughConfig.scenesConfig[this.props.currentSceneNumber].arguments[0];
    let buttonSubStrings = [];
    let hasSubStrings = false;
    let className = null;
    let smallButton = WalkthroughConfig.scenesConfig[this.props.currentSceneNumber].smallButton;
    let isReferralQuestion = WalkthroughConfig.scenesConfig[this.props.currentSceneNumber].arguments[0] === 'referralSource';
    let icons = WalkthroughConfig.scenesConfig[this.props.currentSceneNumber].icons;
    let imagesToUse = images[argument];
    let multipleSelections = WalkthroughConfig.scenesConfig[this.props.currentSceneNumber].multipleSelections;

    if (WalkthroughConfig.scenesConfig[this.props.currentSceneNumber].subStrings !== undefined) {
      hasSubStrings = true;
      buttonSubStrings = WalkthroughConfig.scenesConfig[this.props.currentSceneNumber].subStrings;
    }

    if (smallButton) {
      className = classes.smallButton;
    } else if (multipleSelections || isReferralQuestion) {
      className = classes.mediumButton;
    } else {
      className = classes.bigButton;
    }

    let topPadding = 40;
    let hasCustomPadding = WalkthroughConfig.scenesConfig[this.props.currentSceneNumber].hasCustomPadding;
    let customPadding = [40, 40, 40];
    if (hasCustomPadding) {
      customPadding = WalkthroughConfig.scenesConfig[this.props.currentSceneNumber].customPaddings;
    }

    return buttonStrings.map((value, index) => {
      let selectionHandlerArgument = buttonStrings[index];
      return (
        <Grid
          key={index}
          item
          xs={smallButton ? 12 : isReferralQuestion || multipleSelections ? 4 : null}>
           <ButtonBase
             className={
               multipleSelections && this.props.checkedExchanges.indexOf(buttonStrings[index]) !== -1 ?
                 classNames(className, classes.root, classes.greenOutline) :
                 classNames(className, classes.root)
              }
             disabled={false}
             focusRipple={false}
             onClick={this.props.handleSelection.bind(
               this,
               selectionHandlerArgument,
               argument
             )}>
              <div
                className={
                  multipleSelections && this.props.checkedExchanges.indexOf(buttonStrings[index]) !== -1 ?
                    classes.checkmark :
                    classes.displayNone
                }>&#10003;</div>
              <div
                style={
                  hasSubStrings && buttonSubStrings[index] === null && this.props.currentSceneNumber !== 15 ?
                    {position:'relative', paddingTop: '90px'} :
                    {position:'relative'}
                }>
                {
                  imagesToUse !== undefined || multipleSelections ?
                    <img src={multipleSelections ?
                    exchangeImages[icons[index]] :
                    imagesToUse[icons[index]]} /> :
                    null
                }
                <div
                  className={
                    imagesToUse !== undefined ?
                      classes.buttonLabelPadding :
                      classes.buttonLabel
                  }
                  style={hasCustomPadding ? {paddingTop: customPadding[index] + 'px'} : {paddingTop: '0px'} }>
                  {buttonStrings[index]}
                </div>
                {
                  hasSubStrings && buttonSubStrings[index] !== null ?
                    this.renderSubStrings(buttonSubStrings[index], imagesToUse, classes) :
                    []
                }
              </div>
          </ButtonBase>
        </Grid>
    )});
  }

  renderSubStrings(subString, imagesToUse, classes) {
    return (
      <div className={classes.buttonLabelPaddingNoTop}>
      {subString}
      </div>
    );
  }

  renderYesNo(classes) {
    let strings = ['Yep!', 'Nope'];
    let argument = WalkthroughConfig.scenesConfig[this.props.currentSceneNumber].arguments[0];

    return [0, 1].map(value => (
      <Grid key={value} item>
        <ButtonBase
           className={classNames(classes.bigButton, classes.root)}
           disabled={false}
           focusRipple={false}
           onClick={this.props[argument].bind(this, strings[value] === 'Yep!')}>
            <div style={{position:'relative'}}>
              {strings[value] === 'Yep!' ? <img src={yes} /> : <img src={no} />}
              <div className={classes.buttonLabelPadding}>{strings[value]}</div>
            </div>
        </ButtonBase>
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

  render() {
    const { classes, currentSceneNumber, activeStep } = this.props;
    const { spacing } = this.state;
    let isLastScene = WalkthroughConfig.scenesConfig[currentSceneNumber + 1] === undefined;
    let isReferralScene = currentSceneNumber === 19;
    let isFirstScene = currentSceneNumber === 0;
    let isTextOnlyScene = WalkthroughConfig.scenesConfig[currentSceneNumber].method === undefined;
    let headline = this.renderHeadline(classes);
    const steps = getSteps();
    let args = [];
    let body = [];
    let button = [];
    let submitButton = (
      <Button
        variant="outlined"
        size="large"
        color="primary"
        className={classes.nextButton}
        onClick={this.props.changeToNextScene}>
        {'Next'}
      </Button>
    );

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

    let backClassName = isFirstScene || isLastScene || isTextOnlyScene || currentSceneNumber === 1 ? classes.backNoFixed : classes.back;
    console.log('this.props.activeStep', this.props.activeStep);

    /*

    {isFirstScene === false || isLastScene === false || currentSceneNumber !== 1 ?
            <div onClick={this.props.goBack} className={backClassName}>{'< Back'}</div> :
            ''
          }

    */

    let width = '100%';
    if (WalkthroughConfig.scenesConfig[currentSceneNumber].multipleSelections) {
      width = '50%';
    } else if (isReferralScene) {
      width = '75%';
    }

    return !WalkthroughConfig.scenesConfig[currentSceneNumber].stepperLabels ? (
      <Grid container className={classes.gridRoot} spacing={16} style={{paddingBottom: '40px'}}>
        <Grid item xs={12}>
          {button}
          <div className={classes.demo2}>
           <Stepper activeStep={activeStep} alternativeLabel className={currentSceneNumber > 6 && !isLastScene ? classes.stepper : classes.displayNone}>
              {steps.map(label => {
                return (
                  <Step key={label} className={classes.completed}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </div>

          <Grid
          container
          className={classes.demo3}
          alignItems="center"
          justify="center"
        >
           <Grid className={currentSceneNumber < 7 ? classes.headlineTopPadding : null} item>
            {headline}
          </Grid>
        </Grid>
          <Grid container className={classes.demo} justify="center" spacing={Number(0)} style={{width: width, margin: 'auto'}}>
            {body}
          </Grid>
          {WalkthroughConfig.scenesConfig[currentSceneNumber].multipleSelections && this.props.checkedExchanges.length > 0 ? submitButton : null }
          {isFirstScene === false || isLastScene === false || currentSceneNumber !== 1 ?
            <div onClick={this.props.goBack} className={backClassName}>{'< Back'}</div> :
            ''
          }
        </Grid>
      </Grid>
    ) : (<Grid container justify="center" spacing={24} style={{margin: 'auto', fontSize: '35px', fontFamily: 'Roboto, sans-serif', marginTop: '250px'}}>
        <Grid item lg={3} className={this.props.activeStep === 0 ? classes.purpleFont : null}>
          {WalkthroughConfig.scenesConfig[currentSceneNumber].stepperLabels[0]}
        </Grid>
        <Grid item lg={3} className={this.props.activeStep === 1 ? classes.purpleFont : null}>
          {WalkthroughConfig.scenesConfig[currentSceneNumber].stepperLabels[1]}
        </Grid>
        <Grid item lg={3} className={this.props.activeStep === 2 ? classes.purpleFont : null}>
          {WalkthroughConfig.scenesConfig[currentSceneNumber].stepperLabels[2]}
        </Grid>
        <Grid item lg={3} className={this.props.activeStep === 3 ? classes.purpleFont : null}>
          {WalkthroughConfig.scenesConfig[currentSceneNumber].stepperLabels[3]}
        </Grid>
      </Grid>);
  }
}

export default withStyles(WalkthroughConfig.styles)(Walkthrough);
