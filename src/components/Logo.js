import React, { Component } from "react";

import "../App.css";
import logoBorder from "../assets/Logo.png";

import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import SummaryConfig from "../config/SummaryConfig";

class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grid
        item
        xs={12}
        style={{ height: "0px", paddingBottom: "0px", paddingTop: "0px" }}
      >
        <img
          src={logoBorder}
          className={"App-logo3"}
          alt="logo"
          style={
            this.props.widthLessThan452PX
              ? {
                  marginTop: "-40px",
                  position: "absolute",
                  marginLeft: "74px",
                  height: "60px",
                  zIndex: "10"
                }
              : { marginTop: "-70px", position: "absolute", marginLeft: "50px" }
          }
        />
      </Grid>
    );
  }
}

export default withStyles(SummaryConfig.styles)(Logo);
