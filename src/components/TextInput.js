import React, { Component } from "react";
import "../App.css";

import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import WalkthroughConfig from "../config/WalkthroughConfig";

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      classes,
      changeToNextScene,
      currentSceneNumber,
      field,
      handleKeyPress,
      handleChange,
      showNameField,
      showEmailField,
      widthLessThan452PX
    } = this.props;
    let shouldDisplayButton = false;
    if (
      showNameField &&
      WalkthroughConfig.scenesConfig[currentSceneNumber].arguments[0] === "name"
    ) {
      shouldDisplayButton = true;
    } else if (
      showEmailField &&
      WalkthroughConfig.scenesConfig[currentSceneNumber].arguments[0] ===
        "email"
    ) {
      shouldDisplayButton = true;
    }

    return (
      <Grid key={currentSceneNumber} item>
        <div
          className={widthLessThan452PX ? classes.divInput1 : classes.divInput}
        >
          <div
            className={classes.divInputBox}
            id={
              this.props.field[0] === "name"
                ? "nameContent"
                : this.props.field[0] === "email"
                  ? "emailContent"
                  : null
            }
            contentEditable
            onKeyPress={handleKeyPress}
            onChange={handleChange(field[0])}
          />
          <span
            onClick={changeToNextScene}
            className={
              !shouldDisplayButton
                ? classes.displayNone
                : widthLessThan452PX
                  ? classes.enterButton4
                  : classes.enterButton3
            }
          >
            >
          </span>
        </div>
      </Grid>
    );
  }
}

export default withStyles(WalkthroughConfig.styles)(TextInput);
