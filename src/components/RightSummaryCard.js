import React, { Component } from "react";

import currenciesLogo from "../assets/Currencies-logo.png";
import alertsIcon from "../assets/alertsicon.png";

import "../App.css";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CurrencyCheckboxes from "./CurrencyCheckboxes";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/lab/Slider";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import SummaryConfig from "../config/SummaryConfig";

import classNames from "classnames";

class RightSummaryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  renderCheckboxes(classes) {
    return (
      <CurrencyCheckboxes
        handleCheckbox={this.props.handleCheckbox}
        checkBoxes={this.props.checkBoxes}
        currencies={this.props.currencies}
        packageSelected={this.props.packageSelected}
        showMoreIndex={this.props.showMoreIndex}
        showMore={this.props.showMore}
        handleShowMore={this.props.handleShowMore}
        widthLessThan452PX={this.props.widthLessThan452PX}
      />
    );
  }

  render() {
    const { classes, priceIncrease, priceDecrease, timeOut } = this.props;

    let currencyCheckboxes = this.renderCheckboxes(classes);
    let currencyNum = 0;
    let riskProfileText = "";

    if (this.props.currenciesToExplore === SummaryConfig.currencyStrings[0]) {
      currencyNum = 5;
    } else if (
      this.props.currenciesToExplore === SummaryConfig.currencyStrings[1]
    ) {
      currencyNum = 100;
    } else if (
      this.props.currenciesToExplore === SummaryConfig.currencyStrings[2]
    ) {
      currencyNum = 250;
    }

    if (this.props.cryptoRiskProfile === SummaryConfig.riskProfiles[0]) {
      riskProfileText = "low";
    } else if (this.props.cryptoRiskProfile === SummaryConfig.riskProfiles[1]) {
      riskProfileText = "medium";
    } else if (this.props.cryptoRiskProfile === SummaryConfig.riskProfiles[2]) {
      riskProfileText = "higher than most";
    }

    let packageText =
      this.props.packageSelected === "Coinbase"
        ? SummaryConfig.coinbasePackageText
        : SummaryConfig.traderPackageText;

    let rightCardClassNames = this.props.widthLessThan452PX
      ? classNames(classes.paddingTopPackageSide452PX, classes.beigeBackground)
      : classNames(classes.paddingTopPackageSide, classes.beigeBackground);

    return (
      <Grid
        item
        xs={
          this.props.widthLessThan1222PX || this.props.widthLessThan452PX
            ? null
            : 8
        }
        id="two"
        style={{ padding: "5px" }}
      >
        <Card className={classes.card}>
          <CardContent className={rightCardClassNames}>
            <Card
              className={classNames(classes.card, classes.cardBottomPadding)}
            >
              <CardContent className={classes.firstBackgroundImg}>
                <div
                  className={classNames(
                    classes.whiteFont,
                    classes.textLeft,
                    classes.cardHeadline
                  )}
                >
                  <img
                    src={currenciesLogo}
                    className={classes.titleIcon}
                    style={{ paddingBottom: "20px", paddingTop: "25px" }}
                  />
                  {this.props.packageSelected + " Package"}
                </div>
              </CardContent>
              <CardContent
                className={
                  this.props.widthLessThan452PX ? classes.card452PX : null
                }
              >
                <Typography
                  component="p"
                  className={classNames(
                    classes.blackFont,
                    classes.bold,
                    classes.textLeft
                  )}
                >
                  {"Stay Informed."}
                </Typography>
                <br />
                <Typography
                  component="p"
                  className={classNames(classes.blackFont, classes.textLeft)}
                >
                  {"\n We’ll track the top " +
                    currencyNum +
                    " currencies and alert you when our AI detects anomalies in these specific currencies." +
                    packageText}
                </Typography>
                <br />
                <Typography
                  component="p"
                  className={classNames(
                    classes.bold,
                    classes.textLeft,
                    classes.bottomPadding
                  )}
                >
                  {"You're set to receive notifications for:"}
                </Typography>
                {currencyCheckboxes}
              </CardContent>
            </Card>
            <Card
              className={classNames(classes.card, classes.cardBottomPadding)}
            >
              <CardContent className={classes.thirdBackgroundImg}>
                <div
                  className={classNames(
                    classes.whiteFont,
                    classes.textLeft,
                    classes.cardHeadline
                  )}
                  style={{ border: "none" }}
                >
                  <img
                    src={alertsIcon}
                    className={classes.titleIcon}
                    style={{ paddingBottom: "20px", paddingTop: "38px" }}
                  />
                  {"Price Alerts"}
                </div>
              </CardContent>
              <CardContent
                className={
                  this.props.widthLessThan452PX ? classes.card452PX : null
                }
              >
                <Typography
                  component="p"
                  className={classNames(
                    classes.blackFont,
                    classes.bold,
                    classes.textLeft
                  )}
                >
                  {"A seamless strategy."}
                </Typography>
                <br />
                <Typography
                  component="p"
                  className={classNames(classes.blackFont, classes.textLeft)}
                >
                  {
                    "Text messages will be sent directly to your phone as soon as anomalies are detected and we believe positive price action is possible. How you interpret the alert is up to you. Simplicity is the ultimate sophistication."
                  }
                </Typography>
                <br />
                <Typography
                  component="p"
                  className={classNames(
                    classes.blackFont,
                    classes.bold,
                    classes.textLeft
                  )}
                >
                  {"Based on your answers, your risk tolerance seems " +
                    riskProfileText +
                    ", so we have set your strategy notifications accordingly."}
                </Typography>
                <br />
                <Typography
                  component="p"
                  className={classNames(classes.blackFont, classes.textLeft)}
                >
                  {
                    "You’ll receive a follow up text after your alert is triggered to notify you of a price increase or decrease. If the time of the alert reaches your timeout threshold, we’ll be sure to notify you of the timeout."
                  }
                </Typography>
                <br />
                <Typography
                  component="p"
                  className={classNames(classes.blackFont, classes.textLeft)}
                >
                  {"These can be fully customized below:"}
                </Typography>
                <br />
                <br />
                <br />

                <Grid
                  container
                  alignItems="center"
                  justify="center"
                  className={classes.gridRoot}
                  spacing={16}
                  style={{ paddingBottom: "40px" }}
                >
                  <Grid
                    item
                    xs={this.props.widthLessThan452PX ? null : 3}
                    className={
                      this.props.widthLessThan452PX
                        ? classes.bottomPadding452PX
                        : classes.noPaddingBottom
                    }
                  >
                    <div
                      className={classNames(
                        classes.wrapperRight,
                        classes.slider
                      )}
                    >
                      <div id="label" className={classes.sliderLabel}>
                        Price Increase
                      </div>
                      <Slider
                        classes={{
                          thumb: classes.thumb,
                          trackBefore: classes.trackBefore,
                          trackAfter: classes.trackAfter
                        }}
                        value={parseInt(priceIncrease, 10)}
                        aria-labelledby="label"
                        onChange={this.props.changePriceIncreaseSlider}
                      />
                      <FormControl>
                        <input
                          onChange={this.props.changePriceIncrease}
                          className={classNames(
                            classes.textField,
                            classes.inputFieldFont
                          )}
                          value={
                            priceIncrease.toString().indexOf("%") === -1
                              ? priceIncrease + "%"
                              : priceIncrease
                          }
                        />
                      </FormControl>
                    </div>
                  </Grid>

                  <Grid
                    item
                    xs={this.props.widthLessThan452PX ? null : 3}
                    className={
                      this.props.widthLessThan452PX
                        ? classes.bottomPadding452PX
                        : classes.noPaddingBottom
                    }
                  >
                    <div
                      className={classNames(
                        classes.wrapperRight,
                        classes.slider
                      )}
                    >
                      <div id="label2" className={classes.sliderLabel}>
                        Price Decrease
                      </div>
                      <Slider
                        classes={{
                          thumb: classes.thumb,
                          trackBefore: classes.trackBefore,
                          trackAfter: classes.trackAfter
                        }}
                        value={parseInt(priceDecrease, 10)}
                        aria-labelledby="label2"
                        onChange={this.props.changePriceDecreaseSlider}
                      />
                      <FormControl>
                        <input
                          onChange={this.props.changePriceDecrease}
                          className={classNames(
                            classes.input,
                            classes.textField,
                            classes.inputFieldFont
                          )}
                          value={
                            priceDecrease.toString().indexOf("%") === -1
                              ? priceDecrease + "%"
                              : priceDecrease
                          }
                        />
                      </FormControl>
                    </div>
                  </Grid>

                  <Grid
                    item
                    xs={this.props.widthLessThan452PX ? null : 3}
                    className={
                      this.props.widthLessThan452PX
                        ? classes.bottomPadding452PX
                        : classes.noPaddingBottom
                    }
                  >
                    <div
                      className={classNames(
                        classes.wrapperRight,
                        classes.slider
                      )}
                    >
                      <div id="label3" className={classes.sliderLabel}>
                        Timeout
                      </div>
                      <Slider
                        classes={{
                          thumb: classes.thumb,
                          trackBefore: classes.trackBefore,
                          trackAfter: classes.trackAfter
                        }}
                        value={parseInt(timeOut, 10)}
                        min={2}
                        max={168}
                        aria-labelledby="label3"
                        onChange={this.props.changeTimeOutSlider}
                      />
                      <FormControl>
                        <input
                          onChange={this.props.changeTimeOut}
                          className={classNames(
                            classes.textField,
                            classes.inputFieldFont
                          )}
                          value={
                            timeOut.toString().indexOf(" hours") === -1
                              ? timeOut + " hours"
                              : timeOut
                          }
                        />
                      </FormControl>
                    </div>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(SummaryConfig.styles)(RightSummaryCard);
