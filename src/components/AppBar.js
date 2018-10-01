import React, { Component } from "react";

import "../App.css";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import SummaryConfig from "../config/SummaryConfig";

import classNames from "classnames";

class AppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes, goBack, widthLessThan452PX } = this.props;
    let classnames = widthLessThan452PX
      ? classNames(
          classes.titleHeaders,
          classes.titleHeaderFont,
          classes.activeTab,
          classes.appBar452PX
        )
      : classNames(
          classes.titleHeaders,
          classes.titleHeaderFont,
          classes.activeTab
        );

    let backButtonClassnames = widthLessThan452PX
      ? classNames(
          classes.titleHeaders,
          classes.titleHeaderFont,
          classes.inactiveTab,
          classes.backButton452PX
        )
      : classNames(
          classes.titleHeaders,
          classes.titleHeaderFont,
          classes.inactiveTab
        );

    return (
      <Grid item xs={12} className={classes.noPaddingBottom}>
        <Paper
          className={classNames(classes.paper, classes.negativeRightMargin)}
        >
          <div className={classes.titleHeaderDiv}>
            <span className={classnames}>Your Personalized Alerts Plan</span>
            <span
              onClick={goBack}
              className={backButtonClassnames}
              style={{ float: "right" }}
            >
              {"Back"}
            </span>
          </div>
        </Paper>
      </Grid>
    );
  }
}

export default withStyles(SummaryConfig.styles)(AppBar);
