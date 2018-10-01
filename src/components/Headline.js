import React, { Component } from "react";
import "../App.css";

import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import WalkthroughConfig from "../config/WalkthroughConfig";

import wink2 from "../assets/wink2.png";
import wink3 from "../assets/wink3.png";
import wave from "../assets/Wave.png";

const winks = {
  wink3,
  wink2
};

class Headline extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes, currentSceneNumber } = this.props;
    let isLastScene =
      WalkthroughConfig.scenesConfig[currentSceneNumber + 1] === undefined;
    let showName = currentSceneNumber === 2 || currentSceneNumber === 3;
    let isFirstSlide = currentSceneNumber === 0;
    let currentStatus = ["Informed", "Curious", "Skeptical", "Rekt"];
    let showCustomizedResponse = currentSceneNumber === 5;
    let hasSubHeadline = WalkthroughConfig.scenesConfig[currentSceneNumber]
      .subHeadline
      ? true
      : false;
    let text = WalkthroughConfig.scenesConfig[currentSceneNumber].headline;
    let winkImageToUse = WalkthroughConfig.scenesConfig[currentSceneNumber]
      .icons
      ? winks[WalkthroughConfig.scenesConfig[currentSceneNumber].icons[0]]
      : null;

    if (showName) {
      text = text + this.props.name;
    }
    if (
      showCustomizedResponse &&
      WalkthroughConfig.scenesConfig[currentSceneNumber].customizedResponses
    ) {
      let index = currentStatus.indexOf(this.props.cryptoCurrentStatus);
      text =
        WalkthroughConfig.scenesConfig[currentSceneNumber].customizedResponses[
          index
        ];
    }

    if (isLastScene) {
      return (
        <Grid
          container
          className={classes.demo}
          justify="center"
          spacing={Number(0)}
        >
          <Grid item lg={12}>
            <header className="App-header2" className={classes.header}>
              <div id="pulsating-circle" />
            </header>
          </Grid>
        </Grid>
      );
    } else {
      return (
        <Grid key={currentSceneNumber} item>
          <header className="App-header2" className={classes.header}>
            <div className={classes.surveyHeadline}>
              <div style={showName ? { paddingBottom: "50px" } : null}>
                {text}
              </div>
              {hasSubHeadline ? (
                <div className={classes.surveySubHeadline}>
                  {
                    WalkthroughConfig.scenesConfig[currentSceneNumber]
                      .subHeadline
                  }
                </div>
              ) : null}
              {showName ? <img src={winkImageToUse} /> : null}
              {isFirstSlide ? (
                <img src={wave} style={{ paddingTop: "45px" }} />
              ) : null}
            </div>
          </header>
        </Grid>
      );
    }
  }
}

export default withStyles(WalkthroughConfig.styles)(Headline);
