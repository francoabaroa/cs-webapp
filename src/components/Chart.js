import React, { Component } from 'react';
import '../App.css';

// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Doughnut} from 'react-chartjs-2';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  bigButton: {
    margin: theme.spacing.unit,
    height: '340px',
    width: '300px',
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 340,
    width: 300,
    textAlign: 'center',
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  slider: {
    width: '300px',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 480,
  },
});

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spacing: '40',
    };
  }

  componentDidUpdate() {
  }

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;
    const data = {
      labels: [
        'Red',
        'Green',
        'Yellow'
      ],
      datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ],
        hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ]
      }]
    };

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item md={12}>
          <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
          <Doughnut data={data} />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Chart);
