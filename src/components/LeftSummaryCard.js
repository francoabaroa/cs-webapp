import React, { Component } from "react";

import "../App.css";
import "react-phone-number-input/style.css";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import PhoneInput from "react-phone-number-input";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import SummaryConfig from "../config/SummaryConfig";

import classNames from "classnames";

class LeftSummaryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkBoxes: {},
      currencies: [],
      currentTitleHeader: "recommended",
      enableWalkthrough: true,
      open: false,
      showMore: false,
      showMoreIndex: 16,
      userId: null,
      value: 0
    };
  }

  componentDidMount() {}

  render() {
    const { classes, priceIncrease, priceDecrease, timeOut } = this.props;
    let coinsNumber =
      this.props.currenciesToExplore === SummaryConfig.currencyStrings[0]
        ? "5"
        : this.props.currenciesToExplore === SummaryConfig.currencyStrings[1]
          ? "100"
          : this.props.currenciesToExplore === SummaryConfig.currencyStrings[2]
            ? "250"
            : "";
    let currencyString =
      this.props.currenciesToExplore === SummaryConfig.currencyStrings[2]
        ? "All Top " + coinsNumber + " Currencies"
        : "Top " + coinsNumber + " Currencies";

    return (
      <Grid
        item
        xs={
          this.props.widthLessThan1222PX || this.props.widthLessThan452PX
            ? null
            : 4
        }
        id="one"
        style={{ padding: "5px" }}
      >
        <Card className={classes.card2}>
          <CardContent>
            <div
              className={classNames(
                classes.blackFont,
                classes.textLeft,
                classes.alertLowerPadding,
                classes.bold,
                classes.alertTitleSub
              )}
              style={
                this.props.widthLessThan452PX
                  ? { fontSize: "0.96rem", paddingLeft: "10px" }
                  : { fontSize: "1.1rem", paddingLeft: "10px" }
              }
            >
              {"Thanks for the feedback, " + this.props.name + "."}
            </div>
            <div
              className={classNames(
                classes.blackFont,
                classes.textLeft,
                classes.alertLowerPadding,
                classes.alertTitleSub,
                classes.bold
              )}
              style={
                this.props.widthLessThan452PX
                  ? {
                      fontSize: "0.96rem",
                      paddingBottom: "2px",
                      paddingLeft: "10px"
                    }
                  : {
                      fontSize: "1.1rem",
                      paddingBottom: "2px",
                      paddingLeft: "10px"
                    }
              }
            >
              {"Based on your answers, we've crafted your tailored game plan."}
            </div>
            <br />
            <div className={classes.nonActiveOverlay}>
              <div
                className={classNames(
                  classes.blackFont,
                  classes.textLeft,
                  classes.alertLowerPadding,
                  classes.alertTitle
                )}
              >
                {"Cryptocurrencies:"}
              </div>
              <div
                className={classNames(
                  classes.blackFont,
                  classes.textLeft,
                  classes.alertLowerPadding,
                  classes.alertTitleSub
                )}
              >
                {currencyString}
              </div>
            </div>
            <div
              className={
                this.props.checkedExchanges.length > 0
                  ? classes.nonActiveOverlay
                  : classes.hide
              }
              style={{ display: "none" }}
            >
              <Typography
                gutterBottom
                variant="headline"
                component="h5"
                className={classNames(classes.blackFont, classes.textLeft)}
              >
                Exchange(s):
              </Typography>
              <div
                className={classNames(
                  classes.blackFont,
                  classes.textLeft,
                  classes.alertLowerPadding,
                  classes.alertTitleSub
                )}
              >
                {this.props.checkedExchanges.length > 0
                  ? this.props.checkedExchanges.join(", ")
                  : "None selected"}
              </div>
            </div>
            <div className={classes.nonActiveOverlay}>
              <div
                className={classNames(
                  classes.blackFont,
                  classes.textLeft,
                  classes.alertLowerPadding,
                  classes.alertTitle
                )}
              >
                {"Alerts:"}
              </div>
              <div
                className={classNames(
                  classes.blackFont,
                  classes.textLeft,
                  classes.alertLowerPadding,
                  classes.alertTitleSub
                )}
              >
                {"Price Increase: " + priceIncrease + "%"}
              </div>
              <div
                className={classNames(
                  classes.blackFont,
                  classes.textLeft,
                  classes.alertLowerPadding,
                  classes.alertTitleSub
                )}
              >
                {"Price Decrease: " + priceDecrease + "%"}
              </div>
              <div
                className={classNames(
                  classes.blackFont,
                  classes.textLeft,
                  classes.alertLowerPadding,
                  classes.alertTitleSub
                )}
              >
                {"Timeout: " + timeOut + " hours"}
              </div>
            </div>
            <div className={classes.nonActiveOverlay}>
              <div
                className={classNames(
                  classes.blackFont,
                  classes.textLeft,
                  classes.alertLowerPadding,
                  classes.alertTitle
                )}
              >
                {"Phone Number"}
              </div>
              <PhoneInput
                placeholder="Enter phone number"
                value={this.props.phone}
                onChange={this.props.setPhoneNumber}
              />
              {this.props.phoneNumberError ? (
                <div
                  style={{
                    color: "red",
                    paddingTop: "7px",
                    fontSize: "0.85em"
                  }}
                >
                  Phone number invalid. Enter a valid number to proceed.
                </div>
              ) : null}
            </div>
          </CardContent>
          <div className={classes.thinLines} />
          <span
            className={classes.textCenter}
            style={{ fontSize: "1.55em", color: "#4A90E2" }}
          >
            {"$" + SummaryConfig.prices[this.props.packageSelected]}
          </span>
          <div className={classes.thinLines} />
          <div
            className={classes.textCenter}
            style={{ fontSize: "0.80em", color: "#4A90E2" }}
          >
            monthly
          </div>
          <CardActions className={classes.textCenter}>
            <Button
              disabled={this.props.phone === ""}
              id="customButton"
              size="small"
              color="primary"
              variant="contained"
              className={classNames(
                classes.margin,
                classes.cssRoot,
                classes.center,
                classes.subscribeButton
              )}
            >
              Subscribe
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(SummaryConfig.styles)(LeftSummaryCard);
