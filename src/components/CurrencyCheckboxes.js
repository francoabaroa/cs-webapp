import React, { Component } from "react";

import "../App.css";

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";

import SummaryConfig from "../config/SummaryConfig";

class CurrencyCheckboxes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { classes, currencies } = this.props;
    let checkboxes = [];
    let tempCheckboxes = [];
    let numberOfCheckboxesPerRow = this.props.widthLessThan452PX ? 3 : 8;

    for (let i = 0; i < currencies.length; i++) {
      if (this.props.packageSelected === "Coinbase") {
        if (i !== 0) {
          checkboxes.push(
            <td>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.props.checkBoxes[currencies[i]]}
                    onChange={this.props.handleCheckbox.bind(
                      null,
                      currencies[i]
                    )}
                    value={currencies[i]}
                    color="primary"
                  />
                }
                label={currencies[i]}
                className={classes.label}
              />
            </td>
          );
        }
      } else {
        if (i % numberOfCheckboxesPerRow === 0 && i !== 0) {
          tempCheckboxes.push(
            <td>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.props.checkBoxes[currencies[i]]}
                    onChange={this.props.handleCheckbox.bind(
                      null,
                      currencies[i]
                    )}
                    value={currencies[i]}
                    color="primary"
                  />
                }
                label={currencies[i]}
                className={classes.label}
              />
            </td>
          );

          checkboxes.push(
            <tr
              className={
                i > numberOfCheckboxesPerRow * 2 &&
                this.props.showMore === false &&
                i > this.props.showMoreIndex
                  ? classes.hide
                  : null
              }
            >
              {tempCheckboxes}
            </tr>
          );
          tempCheckboxes = [];
        } else if (currencies[i] !== null) {
          tempCheckboxes.push(
            <td>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.props.checkBoxes[currencies[i]]}
                    onChange={this.props.handleCheckbox.bind(
                      null,
                      currencies[i]
                    )}
                    value={currencies[i]}
                    color="primary"
                  />
                }
                label={currencies[i]}
                className={classes.label}
              />
            </td>
          );
          if (currencies[i + 1] === undefined && currencies[i] !== null) {
            checkboxes.push(
              <tr
                className={
                  i > numberOfCheckboxesPerRow * 2 &&
                  this.props.showMore === false &&
                  i > this.props.showMoreIndex
                    ? classes.hide
                    : null
                }
              >
                {tempCheckboxes}
              </tr>
            );
          }
        }
      }
    }
    return (
      <div>
        <table
          className={
            this.props.widthLessThan452PX ? classes.label452PX : classes.label
          }
        >
          <tbody>{checkboxes}</tbody>
          <span
            onClick={this.props.handleShowMore.bind(this, currencies.length)}
            className={
              this.props.showMore || this.props.packageSelected === "Coinbase"
                ? classes.hide
                : null
            }
          >
            Show More
          </span>
        </table>
      </div>
    );
  }
}

export default withStyles(SummaryConfig.styles)(CurrencyCheckboxes);
