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
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

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
    let currentStatus = ['Informed', 'Curious', 'Skeptical', 'Rekt'];
    let showCustomizedResponse = this.props.currentSceneNumber === 4;

    console.log('this.props.currentSceneNumber', this.props.currentSceneNumber);

    let text = WalkthroughConfig.scenesConfig[this.props.currentSceneNumber].headline;
    if (showName) {
      text = text + this.props.name;
    }
    if (showCustomizedResponse && WalkthroughConfig.scenesConfig[this.props.currentSceneNumber].customizedResponses) {
      let index = currentStatus.indexOf(this.props.cryptoCurrentStatus);
      text = WalkthroughConfig.scenesConfig[this.props.currentSceneNumber].customizedResponses[index];
    }

    return (
      <Grid key={this.props.currentSceneNumber} item>
        <header className="App-header2" className={classes.header}>
          <div className={classes.surveyHeadline}>
          <div style={showName ? {paddingBottom: '50px'} : null}> {text} </div>
          {showName ? <img src={wink2} />: null}
          </div>
        </header>
      </Grid>
    );
  }

  renderTextInput(classes, field) {
    return (
      <Grid key={this.props.currentSceneNumber} item>
        <Input
          onKeyPress={this.props.handleKeyPress}
          onChange={this.props.handleChange(field[0])}
          className={classNames(classes.textField, classes.inputFieldFont)}
          disableUnderline={true}
          value={this.props[field[0]]}
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

    console.log(imagesToUse !== undefined, imagesToUse, argument);

    return buttonStrings.map((value, index) => {
    let selectionHandlerArgument = hasSubStrings ? buttonSubStrings[index] : buttonStrings[index];
      return (
        <Grid key={index} item md={smallButton ? 12 : isReferralQuestion || multipleSelections ? 2 : null}>
           <ButtonBase
             className={multipleSelections && this.props.checkedExchanges.indexOf(buttonStrings[index]) !== -1 ? classNames(className, classes.root, classes.greenOutline) : classNames(className, classes.root)}
             disabled={false}
             focusRipple={false}
             onClick={this.props.handleSelection.bind(this, selectionHandlerArgument, argument)}>
              <div className={multipleSelections && this.props.checkedExchanges.indexOf(buttonStrings[index]) !== -1 ? classes.checkmark : classes.displayNone}>&#10003;</div>
              <div style={{position:'relative'}}>
                {imagesToUse !== undefined || multipleSelections ?
                  <img src={multipleSelections ? exchangeImages[icons[index]] :
                  imagesToUse[icons[index]]} /> : null}
                <div className={imagesToUse !== undefined ? classes.buttonLabelPadding : classes.buttonLabel}>{buttonStrings[index]}</div>
                {hasSubStrings ? this.renderSubStrings(buttonSubStrings[index]) : []}
              </div>
          </ButtonBase>
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
    let isLastScene = WalkthroughConfig.scenesConfig[currentSceneNumber + 1] === undefined;
    let isReferralScene = currentSceneNumber === 14;
    let isFirstScene = currentSceneNumber === 0;
    let isTextOnlyScene = WalkthroughConfig.scenesConfig[currentSceneNumber].method === undefined;
    console.log('isFirstScene', isFirstScene);
    const { spacing } = this.state;
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

    let backClassName = isFirstScene || isLastScene || isTextOnlyScene || currentSceneNumber === 1 ? classes.backNoFixed : classes.back;

    console.log('backClassName', backClassName);

    return (
      <Grid container className={classes.gridRoot} spacing={16}>
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
          <Grid item>
            {headline}
          </Grid>
          <Grid container className={classes.demo} justify="center" spacing={Number(16)}>
            {body}
          </Grid>
          {WalkthroughConfig.scenesConfig[currentSceneNumber].multipleSelections ? submitButton : null }
          <br />
          {isFirstScene === false || isLastScene === false || currentSceneNumber !== 1 ?
            <div onClick={this.props.goBack} className={backClassName}>{'< Back'}</div> :
            ''
          }
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(WalkthroughConfig.styles)(Walkthrough);
