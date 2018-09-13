import React, { Component } from 'react';
import logo from '../cs-logo.png';
import '../App.css';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Checkbox from '@material-ui/core/Checkbox';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/lab/Slider';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';

import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

import classNames from 'classnames';

import Image from '../assets/Background-currency.png';
import Image2 from '../assets/bckgrnd-image.png';
import Image3 from '../assets/bckgrnd-image2.png';

const colors = ['#4a90e2', 'rgba(255, 255, 255, 0.80)', '#244770', '#3da937'];

const styles = theme => ({
  card: {
    minWidth: 275,
  },
  cssRoot: {
    color: 'white',
    backgroundColor: colors[0],
    '&:hover': {
      backgroundColor: colors[0],
    },
  },
  card2: {
    // maxWidth: 375,
  },
  hide: {
    display: 'none',
  },
  button: {
    margin: theme.spacing.unit,
  },
  root: {
    flexGrow: 1,
  },
  whiteFont: {
    color: 'white',
  },
  blackFont: {
    color: 'black',
  },
  bold: {
    fontWeight: 'bold',
  },
  buttonBackground: {
    backgroundColor: colors[0],
  },
  activeOverlay: {
    color: 'white',
    backgroundColor: colors[0],
  },
  nonActiveOverlay: {
    border: '4px solid #ECECEC',
    backgroundColor: colors[1],
    padding: '10px',
  },
  test: {
    border: '4px solid #ECECEC',
    backgroundColor: colors[0],
    padding: '10px',
  },
  test2: {
    border: '4px solid #ECECEC',
    backgroundColor: colors[1],
    padding: '10px',
  },
  test3: {
    border: '4px solid #ECECEC',
    backgroundColor: colors[1],
    padding: '10px',
  },
  test4: {
    border: '4px solid #ECECEC',
    backgroundColor: colors[3],
    padding: '10px',
  },
  test5: {
    border: '4px solid #ECECEC',
    padding: '15px',
  },
  demo: {
    marginTop: '15px',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    paddingBottom: 0,
  },
  paper2: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
  root2: {
    width: 300,
  },
  center: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  centerImg: {
    display: 'block',
    margin: 'auto',
    height: '60px',
  },
  textCenter: {
    textAlign: 'center',
  },
  textLeft: {
    textAlign: 'left',
  },
  firstBackgroundImg: {
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    height: '130px',
  },
  secondBackgroundImg: {
    backgroundImage: `url(${Image2})`,
    backgroundRepeat: 'no-repeat',
    height: '130px',
  },
  thirdBackgroundImg: {
    backgroundImage: `url(${Image3})`,
    backgroundRepeat: 'no-repeat',
    height: '130px',
  },
   media: {
    height: 240,
  },
});

function getModalStyle() {
  return {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };
}

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkBoxes: {},
      currencies: [],
      enableWalkthrough: true,
      open: false,
      phoneNumber: '',
      userId: null,
      value: 0,
    };
  }

  componentDidMount() {
    if (this.props.currenciesToExplore.length > 0) {
      let currencies = this.props.currenciesToExplore.split(' ');
      fetch('http://cs-price-alerts.herokuapp.com/top?top=' + currencies[1])
        .then((response) => {return response.json()})
        .then((data) => {
          let checkboxes = {};
          data.forEach((coin) => {
            checkboxes[coin] = true;
          });
          this.setState({ currencies: data, checkBoxes: checkboxes });
        });
    }
  }

  createUser() {
    let userInfo = {
      active: true,
      cellphone: this.props.phone,
      email: this.props.email,
      firstName: this.props.name,
      lastName: '',
      preferences: [],
      surveyAnswers: this.props.surveyAnswers,
    };

    fetch('http://cs-price-alerts.herokuapp.com/createuser', {method: 'post', body: JSON.stringify(userInfo)})
      .then((response) => {return response.json()})
      .then((data) => {
        // userID is returned, so that a user can save a strategy
        // set userId at state
        // let checkboxes = {};
        // data.forEach((coin) => {
        //   checkboxes[coin] = true;
        // });
        // this.setState({ currencies: data, checkBoxes: checkboxes });
      });
  }

  createStrategy() {
    // only if payment goes through can we save this
    // TODO: once we get success from stripe, we can process this!!
    let strategyInfo = {
      active: true,
      currencies: this.state.currencies,
      exchanges: this.props.checkedExchanges,
      profitTakePercent: this.props.priceIncrease,
      stopLossPercent: this.props.priceDecrease,
      timeOutPeriodInHrs: this.props.timeOut,
      userId: this.state.userId,
    };

    fetch('http://cs-price-alerts.herokuapp.com/savestrategy', {method: 'post', body: JSON.stringify(strategyInfo)})
      .then((response) => {return response.json()})
      .then((data) => {
        // 'Strategy saved'
        // let checkboxes = {};
        // data.forEach((coin) => {
        //   checkboxes[coin] = true;
        // });
        // this.setState({ currencies: data, checkBoxes: checkboxes });
      });

  }

  handleChange = (event, value) => {
    let open = value === 1;
    this.setState({ value, open });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleCheckbox = (coin) => {
    const {checkBoxes} = this.state;
    checkBoxes[coin] = !checkBoxes[coin];
    this.setState({ checkBoxes });
  };

  getStarted = () => {
    this.setState({
      enableWalkthrough: !this.state.enableWalkthrough
    });
  }

  renderCheckboxes() {
    const {currencies} = this.state;
    let checkboxes = [];
    for (let i = 0; i < currencies.length; i++) {
      checkboxes.push(
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkBoxes[currencies[i]]}
              onChange={this.handleCheckbox.bind(null, currencies[i])}
              value={currencies[i]}
              color="primary"
            />
          }
          label={currencies[i]}
        />
      );
    }
    return (
      <FormGroup row>
        {checkboxes}
      </FormGroup>
    );
  }

  renderSummary() {
    const { classes, priceIncrease, priceDecrease, timeOut } = this.props;
    let currencyCheckboxes = this.renderCheckboxes();
    return (
     <Grid container className={classes.root} spacing={24}>
       <Grid item xs={12}>
         <Paper className={classes.paper}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Recommended" />
            <Tab label="Check out" />
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.open}
              onClose={this.handleClose}
            >
          <div style={getModalStyle()} className={classes.paper2}>
            <img src={logo} className={classes.centerImg} />
            <br />
            <Typography variant="title" id="modal-title" className={classes.textCenter}>
              Package Name
            </Typography>
            <br />
            <Typography variant="subheading" id="simple-modal-description" className={classes.textCenter}>
              Package Monthly Price
            </Typography>
            <br />
            <Typography variant="subheading" id="simple-modal-description" className={classes.textCenter}>
              [CREDIT CARD INFO]
            </Typography>
            <br />
            <Button size="large" variant="contained"  className={classNames(classes.cssRoot, classes.center)}>
                Purchase
            </Button>
          </div>
        </Modal>
          </Tabs>
         </Paper>
       </Grid>
        <Grid item xs={4}>
          <Card className={classes.card2}>
            <CardContent>
              <Typography component="p" className={classNames(classes.blackFont)}>
                {'Based on your feedback, we\'ve crafted your tailored game plan.'}
              </Typography>
              <br />
              <div className={classes.nonActiveOverlay}>
              <Typography gutterBottom variant="headline" component="h5" className={classNames(classes.blackFont, classes.textLeft)}>
                Monitor:
              </Typography>
              <Typography component="p" className={classNames(classes.blackFont, classes.textLeft)}>
            {/*  currenciesToExplore needs to call exchanges DB */}
                {this.props.currenciesToExplore + ' by market cap'}
              </Typography>
              </div>
              <div className={this.props.checkedExchanges.length > 0 ? classes.nonActiveOverlay: classes.hide}>
              <Typography gutterBottom variant="headline" component="h5" className={classNames(classes.blackFont, classes.textLeft)}>
                Exchange(s):
              </Typography>
              <Typography component="p" className={classNames(classes.blackFont, classes.textLeft)}>
                {this.props.checkedExchanges.length > 0 ? this.props.checkedExchanges.join(', ') : 'None selected'}
              </Typography>
              </div>
              <div className={classes.nonActiveOverlay}>
              <Typography gutterBottom variant="headline" component="h5" className={classNames(classes.blackFont, classes.textLeft)}>
                Alerts:
              </Typography>
              <Typography component="p" className={classNames(classes.blackFont, classes.textLeft)}>
                {'Price Increase: ' + priceIncrease + '%'}
              </Typography>
              <br />
              <Typography component="p" className={classNames(classes.blackFont, classes.textLeft)}>
              {'Price Decrease: ' + priceDecrease + '%'}
              </Typography>
              <br />
              <Typography component="p" className={classNames(classes.blackFont, classes.textLeft)}>
                {'Timeout: ' + timeOut + ' hours'}
              </Typography>
              </div>
              {/*
              <div className={classes.nonActiveOverlay}>
              <Typography gutterBottom variant="headline" component="h5" className={classNames(classes.blackFont, classes.textLeft)}>
                Monthly Reports:
              </Typography>
              <Typography component="p" className={classNames(classes.blackFont, classes.textLeft)}>
                Once a month
              </Typography>
              </div>
              */}
              <div className={classes.nonActiveOverlay}>
              <Typography gutterBottom variant="headline" component="h5" className={classNames(classes.blackFont, classes.textLeft)}>
                Phone Number
              </Typography>
              <PhoneInput
                placeholder="(111) 222-3333"
                value={ this.state.phoneNumber }
                onChange={phoneNumber => this.setState({ phoneNumber })} />
              </div>
            </CardContent>
            <div className={classes.textCenter}>$49</div>
            <div className={classes.textCenter}>monthly</div>
            <CardActions className={classes.textCenter}>
              <Button size="large" color="primary" variant="contained" className={classNames(classes.margin, classes.cssRoot, classes.center)}>
                Subscribe
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={8}>
        <Card className={classes.card}>
        <CardContent>
          <Card className={classes.card}>
            <CardContent className={classes.firstBackgroundImg}>
            <Typography gutterBottom variant="headline" component="h2" className={classNames(classes.whiteFont, classes.textLeft)}>
                {this.props.currenciesToExplore + ' currencies'}
              </Typography>
              <Typography gutterBottom variant="headline" component="h3" className={classNames(classes.whiteFont, classes.textLeft)}>
                By Market Cap
              </Typography>
            </CardContent>
            <CardContent>
              <Typography component="p" className={classNames(classes.blackFont, classes.bold)}>
                {'Based on your ... we recommend a more focused approach.'}
              </Typography>
              <br />
              <Typography component="p">
                Currencies that will be included in your alerts:
              </Typography>
              {currencyCheckboxes}
            </CardContent>
          </Card>
          <Card className={this.props.checkedExchanges.length > 0 ? classes.card: classes.hide}>
            <CardContent className={classes.secondBackgroundImg}>
              <Typography gutterBottom variant="headline" component="h2" className={classNames(classes.whiteFont, classes.textLeft)}>
                  Your Exchanges
              </Typography>
            </CardContent>
            <CardContent>
              <Typography component="p" className={classNames(classes.blackFont, classes.bold)}>
                {'Based on your risk tolerance, we recommend a more conservative indicator.'}
              </Typography>
              <br />
              <Typography component="p">
                {'We will only be showing you alerts for coins that are listed on the exchanges you selected. This means, among the ' +this.props.currenciesToExplore + ', we will only notify you for the ones listed on one of your exchanges.'}
              </Typography>
              <br />
              <Typography component="p">
                {this.props.checkedExchanges.length > 0 ? this.props.checkedExchanges.join(', ') : 'None selected'}
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardContent className={classes.thirdBackgroundImg}>
              <Typography gutterBottom variant="headline" component="h2" className={classNames(classes.whiteFont, classes.textLeft)}>
                  Price Alerts
              </Typography>
            </CardContent>
            <CardContent>
              <Typography component="p" className={classNames(classes.blackFont, classes.bold)}>
               {'Based on your risk tolerance, we recommend a more conservative indicator.'}
              </Typography>
              <br />
              <Typography component="p">
               {'These alerts will notify you when there has been a ' + priceIncrease + '% increase or a ' + priceDecrease + '% decrease. In order to reduce your exposure to the market, we will also alert you when an alert has reached ' + timeOut + ' hours old.'}
              </Typography>
              <br />
              <div>
              <Typography id="label">Price Increase</Typography>
              <Slider value={priceIncrease} aria-labelledby="label" onChange={this.props.changePriceIncrease} />
              </div>
              <div>
              <Typography id="label2">Price Decrease</Typography>
              <Slider value={priceDecrease} aria-labelledby="label2" onChange={this.props.changePriceDecrease} />
              </div>
              <div>
              <Typography id="label3">Time Out Period</Typography>
              <Slider value={timeOut} min={2} max={168} aria-labelledby="label3" onChange={this.props.changeTimeOut} />
              </div>
            </CardContent>
          </Card>
          {/*
          <Card className={classes.card}>
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                Monthly Recap
              </Typography>
              <Typography component="p">
                Text yada yada yada yada text
              </Typography>
              <Typography component="p">
                Chart here yada yada
              </Typography>
            </CardContent>
          </Card>
           */}
           </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }

  renderWelcome() {
    const {classes} = this.props;
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the CryptoSpotlight Walkthrough</h1>
        </header>
        <br />
        <Button
          variant="outlined"
          size="large"
          color="primary"
          className={classes.button}
          onClick={this.getStarted}>
          {'Summary Page'}
        </Button>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        {!this.state.enableWalkthrough ? this.renderWelcome() : this.renderSummary()}
      </div>
    );
  }
}

export default withStyles(styles)(Summary);
