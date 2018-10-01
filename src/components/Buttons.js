import React, { Component } from "react";
import "../App.css";

import ButtonBase from "@material-ui/core/ButtonBase";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import WalkthroughConfig from "../config/WalkthroughConfig";

import informed from "../assets/informed.png";
import curious from "../assets/curious.png";
import skeptical from "../assets/skeptical.png";
import rekt from "../assets/rekt.png";
import coinbase from "../assets/Coinbase.png";
import binance from "../assets/BNB.png";
import okex from "../assets/OKex.png";
import kraken from "../assets/Kraken.png";
import huobi from "../assets/huobi.png";
import poloniex from "../assets/polo.png";
import completelyBooked from "../assets/completely-booked.png";
import occasionallyAvailable from "../assets/Occasionally-available.png";
import prettyFree from "../assets/pretty-free.png";
import topCurrencies from "../assets/topcurrencies.png";
import wellKnown from "../assets/wellknown.png";
import allOfThem from "../assets/allofem.png";
import noRisk from "../assets/norisk.png";
import midRisk from "../assets/midrisk.png";
import highRisk from "../assets/highrisk.png";
import friend from "../assets/friend.png";
import twitter from "../assets/twitter.png";
import productHunt from "../assets/ph.png";
import google from "../assets/google.png";
import facebook from "../assets/fb.png";
import instagram from "../assets/insta.png";

import classNames from "classnames";

const cryptoCurrentStatus = {
  informed,
  curious,
  skeptical,
  rekt
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
  allOfThem
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
  instagram
};

const images = {
  cryptoCurrentStatus,
  exchangeImages,
  spareTimeAvailability,
  currenciesToExplore,
  cryptoRiskProfile,
  referralSource
};

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderSubStrings(subString, imagesToUse, classes) {
    return <div className={classes.buttonLabelPaddingNoTop}>{subString}</div>;
  }

  render() {
    const { classes, currentSceneNumber } = this.props;
    let buttonStrings =
      WalkthroughConfig.scenesConfig[currentSceneNumber].strings;
    let argument =
      WalkthroughConfig.scenesConfig[currentSceneNumber].arguments[0];
    let buttonSubStrings = [];
    let hasSubStrings = false;
    let className = null;
    let smallButton =
      WalkthroughConfig.scenesConfig[currentSceneNumber].smallButton;
    let isReferralQuestion =
      WalkthroughConfig.scenesConfig[currentSceneNumber].arguments[0] ===
      "referralSource";
    let icons = WalkthroughConfig.scenesConfig[currentSceneNumber].icons;
    let imagesToUse = images[argument];
    let multipleSelections =
      WalkthroughConfig.scenesConfig[currentSceneNumber].multipleSelections;

    if (
      WalkthroughConfig.scenesConfig[currentSceneNumber].subStrings !==
      undefined
    ) {
      hasSubStrings = true;
      buttonSubStrings =
        WalkthroughConfig.scenesConfig[currentSceneNumber].subStrings;
    }

    if (smallButton) {
      className = classes.smallButton;
    } else if (multipleSelections || isReferralQuestion) {
      className = classes.mediumButton;
    } else {
      className = classes.bigButton;
    }

    let hasCustomPadding =
      WalkthroughConfig.scenesConfig[currentSceneNumber].hasCustomPadding;
    let customPadding = [40, 40, 40];
    if (hasCustomPadding) {
      customPadding =
        WalkthroughConfig.scenesConfig[currentSceneNumber].customPaddings;
    }

    let xsVal = null;
    if (smallButton) {
      xsVal = 12;
    } else if (isReferralQuestion && !this.props.widthLessThan1222PX) {
      if (!this.props.widthLessThan452PX) {
        xsVal = 4;
      } else {
        xsVal = null;
      }
    } else if (multipleSelections && !this.props.widthLessThan1222PX) {
      if (!this.props.widthLessThan452PX) {
        xsVal = 4;
      } else {
        xsVal = null;
      }
    }

    return buttonStrings.map((value, index) => {
      let selectionHandlerArgument = buttonStrings[index];
      return (
        <Grid key={index} item xs={xsVal}>
          <ButtonBase
            className={
              multipleSelections &&
              this.props.checkedExchanges.indexOf(buttonStrings[index]) !== -1
                ? classNames(className, classes.root, classes.greenOutline)
                : classNames(className, classes.root)
            }
            disabled={false}
            focusRipple={false}
            onClick={this.props.handleSelection.bind(
              this,
              selectionHandlerArgument,
              argument
            )}
          >
            <div
              className={
                multipleSelections &&
                this.props.checkedExchanges.indexOf(buttonStrings[index]) !== -1
                  ? classes.checkmark
                  : classes.displayNone
              }
            >
              &#10003;
            </div>
            <div
              style={
                hasSubStrings &&
                buttonSubStrings[index] === null &&
                currentSceneNumber !== 15
                  ? { position: "relative", paddingTop: "90px" }
                  : { position: "relative" }
              }
            >
              {imagesToUse !== undefined || multipleSelections ? (
                <img
                  src={
                    multipleSelections
                      ? exchangeImages[icons[index]]
                      : imagesToUse[icons[index]]
                  }
                />
              ) : null}
              <div
                className={
                  imagesToUse !== undefined
                    ? classes.buttonLabelPadding
                    : classes.buttonLabel
                }
                style={
                  hasCustomPadding
                    ? { paddingTop: customPadding[index] + "px" }
                    : { paddingTop: "0px" }
                }
              >
                {buttonStrings[index]}
              </div>
              {hasSubStrings && buttonSubStrings[index] !== null
                ? this.renderSubStrings(
                    buttonSubStrings[index],
                    imagesToUse,
                    classes
                  )
                : []}
            </div>
          </ButtonBase>
        </Grid>
      );
    });
  }
}

export default withStyles(WalkthroughConfig.styles)(Buttons);
