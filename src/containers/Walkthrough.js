import React, { Component } from "react";
import "../App.css";

import Button from "@material-ui/core/Button";
import Buttons from "../components/Buttons";
import ButtonBase from "@material-ui/core/ButtonBase";
import Grid from "@material-ui/core/Grid";
import Headline from "../components/Headline";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import TextInput from "../components/TextInput";
import { withStyles } from "@material-ui/core/styles";

import WalkthroughConfig from "../config/WalkthroughConfig";

import yes from "../assets/yep.png";
import no from "../assets/nope.png";

import classNames from "classnames";

function getSteps() {
  return ["Basics", "Lifestyle", "Values", "Strategy"];
}

class Walkthrough extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderHeadline() {
    return (
      <Headline
        name={this.props.name}
        cryptoCurrentStatus={this.props.cryptoCurrentStatus}
        currentSceneNumber={this.props.currentSceneNumber}
      />
    );
  }

  renderTextInput(classes, field) {
    return (
      <TextInput
        changeToNextScene={this.props.changeToNextScene}
        currentSceneNumber={this.props.currentSceneNumber}
        field={field}
        handleChange={this.props.handleChange}
        handleKeyPress={this.props.handleKeyPress}
        showEmailField={this.props.showEmailField}
        showNameField={this.props.showNameField}
        widthLessThan452PX={this.props.widthLessThan452PX}
      />
    );
  }

  renderButtons() {
    return (
      <Buttons
        checkedExchanges={this.props.checkedExchanges}
        currentSceneNumber={this.props.currentSceneNumber}
        handleSelection={this.props.handleSelection}
        widthLessThan1222PX={this.props.widthLessThan1222PX}
        widthLessThan452PX={this.props.widthLessThan452PX}
      />
    );
  }

  renderYesNo(classes) {
    let strings = ["Yep!", "Nope"];
    let argument =
      WalkthroughConfig.scenesConfig[this.props.currentSceneNumber]
        .arguments[0];
    return [0, 1].map(value => (
      <Grid key={value} item>
        <ButtonBase
          className={classNames(classes.bigButton, classes.root)}
          disabled={false}
          focusRipple={false}
          onClick={this.props[argument].bind(this, strings[value] === "Yep!")}
        >
          <div style={{ position: "relative" }}>
            {strings[value] === "Yep!" ? <img src={yes} /> : <img src={no} />}
            <div className={classes.buttonLabelPadding}>{strings[value]}</div>
          </div>
        </ButtonBase>
      </Grid>
    ));
  }

  renderWalkthroughStepperTransitionLabels() {
    const { classes, currentSceneNumber, activeStep } = this.props;
    return (
      <Grid
        container
        justify="center"
        spacing={24}
        style={{
          margin: "auto",
          fontSize: "35px",
          fontFamily: "Roboto, sans-serif",
          marginTop: "250px"
        }}
      >
        <Grid
          item
          lg={3}
          className={this.props.activeStep === 0 ? classes.purpleFont : null}
        >
          {WalkthroughConfig.scenesConfig[currentSceneNumber].stepperLabels[0]}
        </Grid>
        <Grid
          item
          lg={3}
          className={this.props.activeStep === 1 ? classes.purpleFont : null}
        >
          {WalkthroughConfig.scenesConfig[currentSceneNumber].stepperLabels[1]}
        </Grid>
        <Grid
          item
          lg={3}
          className={this.props.activeStep === 2 ? classes.purpleFont : null}
        >
          {WalkthroughConfig.scenesConfig[currentSceneNumber].stepperLabels[2]}
        </Grid>
        <Grid
          item
          lg={3}
          className={this.props.activeStep === 3 ? classes.purpleFont : null}
        >
          {WalkthroughConfig.scenesConfig[currentSceneNumber].stepperLabels[3]}
        </Grid>
      </Grid>
    );
  }

  renderNextButton() {
    const { classes } = this.props;
    return (
      <Button
        variant="outlined"
        size="large"
        color="primary"
        className={classes.nextButton}
        onClick={this.props.changeToNextScene}
      >
        {"Next"}
      </Button>
    );
  }

  renderBackButton(backButtonClassName) {
    const { classes } = this.props;
    return (
      <div
        onClick={this.props.goBack}
        className={
          this.props.showBackButton ? backButtonClassName : classes.displayNone
        }
      >
        {"< Back"}
      </div>
    );
  }

  renderStepper(isLastScene) {
    const { classes, currentSceneNumber, activeStep } = this.props;
    return (
      <div className={classes.demo2}>
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          className={
            currentSceneNumber > 6 && !isLastScene
              ? classes.stepper
              : classes.displayNone
          }
        >
          {getSteps().map(label => {
            return (
              <Step key={label} className={classes.completed}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </div>
    );
  }

  renderWalkthroughMainSection(
    body,
    backButtonClassName,
    width,
    isFirstScene,
    isLastScene
  ) {
    const { classes, currentSceneNumber } = this.props;
    return (
      <Grid
        container
        className={classes.gridRoot}
        spacing={16}
        style={{ paddingBottom: "40px" }}
      >
        <Grid item xs={12}>
          {this.renderStepper(isLastScene)}
          <Grid
            container
            className={classes.demo3}
            alignItems="center"
            justify="center"
          >
            <Grid
              className={
                currentSceneNumber < 7 ? classes.headlineTopPadding : null
              }
              item
            >
              {this.renderHeadline(classes)}
            </Grid>
          </Grid>
          <Grid
            container
            className={classes.demo}
            justify="center"
            spacing={Number(0)}
            style={{ width: width, margin: "auto" }}
          >
            {body}
          </Grid>
          {WalkthroughConfig.scenesConfig[currentSceneNumber]
            .multipleSelections && this.props.checkedExchanges.length > 0
            ? this.renderNextButton()
            : null}
          {isFirstScene === false ||
          isLastScene === false ||
          currentSceneNumber !== 1
            ? this.renderBackButton(backButtonClassName)
            : ""}
        </Grid>
      </Grid>
    );
  }

  render() {
    const { classes, currentSceneNumber, activeStep } = this.props;
    let width = "100%";
    let args = [];
    let body = [];
    let isLastScene =
      WalkthroughConfig.scenesConfig[currentSceneNumber + 1] === undefined;
    let isReferralScene = currentSceneNumber === 19;
    let isFirstScene = currentSceneNumber === 0;
    let isTextOnlyScene =
      WalkthroughConfig.scenesConfig[currentSceneNumber].method === undefined;

    if (WalkthroughConfig.scenesConfig[currentSceneNumber]) {
      if (WalkthroughConfig.scenesConfig[currentSceneNumber].arguments) {
        args = WalkthroughConfig.scenesConfig[currentSceneNumber].arguments;
      }
    }
    if (
      WalkthroughConfig.scenesConfig[currentSceneNumber].method !== undefined &&
      this[WalkthroughConfig.scenesConfig[currentSceneNumber].method] !==
        undefined
    ) {
      body = this[WalkthroughConfig.scenesConfig[currentSceneNumber].method](
        classes,
        args
      );
    }

    let backButtonClassName =
      isFirstScene || isLastScene || isTextOnlyScene || currentSceneNumber === 1
        ? classes.backNoFixed
        : classes.back;

    if (
      WalkthroughConfig.scenesConfig[currentSceneNumber].multipleSelections &&
      !this.props.widthLessThan1222PX
    ) {
      width = "50%";
    } else if (isReferralScene && !this.props.widthLessThan452PX) {
      width = "75%";
    }

    return !WalkthroughConfig.scenesConfig[currentSceneNumber].stepperLabels
      ? this.renderWalkthroughMainSection(
          body,
          backButtonClassName,
          width,
          isFirstScene,
          isLastScene
        )
      : this.renderWalkthroughStepperTransitionLabels();
  }
}

export default withStyles(WalkthroughConfig.styles)(Walkthrough);
