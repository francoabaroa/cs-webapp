import React, { Component } from 'react';
import logo from '../cs-logo.png';
import logoBorder from '../assets/Logo.png';
import back from '../assets/arrow.png';
import currenciesLogo from '../assets/Currencies-logo.png';
import alertsIcon from '../assets/alertsicon.png';

import '../App.css';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Checkbox from '@material-ui/core/Checkbox';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/lab/Slider';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';

import SummaryConfig from '../config/SummaryConfig';

import Slider2 from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';

import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

import classNames from 'classnames';

import Image from '../assets/Background-currency.png';
import Image2 from '../assets/bckgrnd-image.png';
import Image3 from '../assets/bckgrnd-image2.png';
import BlueCircle from '../assets/blue-circle.png';

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
      // height: '100%',
      position: 'sticky',
    },
    hide: {
      display: 'none',
    },
    button: {
      margin: theme.spacing.unit,
    },
    gridRoot: {
      flexGrow: 1,
    },
    whiteFont: {
      color: 'white',
    },
    cardHeadline: {
      fontSize: '1.5em',
      fontFamily: 'Roboto !important',
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
      paddingBottom: '40px',
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
      paddingLeft: '10px',
    },
    firstBackgroundImg: {
      backgroundImage: `url(${Image})`,
      backgroundRepeat: 'no-repeat',
      height: '170px',
    },
    secondBackgroundImg: {
      backgroundImage: `url(${Image2})`,
      backgroundRepeat: 'no-repeat',
      height: '170px',
    },
    thirdBackgroundImg: {
      backgroundImage: `url(${Image3})`,
      backgroundRepeat: 'no-repeat',
      height: '170px',
    },
     media: {
      height: 240,
    },
    titleHeaders: {
      paddingRight: '40px',
      paddingLeft: '10px',
    },
    titleHeaderFont: {
      fontSize: '1.45em',
      fontWeight: 700,
    },
    titleHeaderDiv: {
      paddingTop: '10px',
    },
    backButton: {
      float: 'right',
      paddingRight: '30px',
    },
    cardBottomPadding: {
      paddingBottom: '50px',
    },
    bottomPadding: {
      paddingBottom: '30px',
    },
    coinCheckboxes: {
      margin: 'auto',
    },
    label: {
      margin: '0 auto',
    },
    titleIcon: {
      display: 'block',
    },
    negativeRightMargin: {
      marginRight: '-10px',
    },
    slider: {
      maxWidth: '200px',
      paddingRight: '50px',
      '&:focus': {
        outline: 'none !important',
      },
    },
    sliderTest: {
      display: 'inline',
    },
    wrapper: {
      display: 'flex',
      justifyContent: 'center',
    },
    wrapperLeft: {
      flex: '0 0 65%',
      paddingRight: '50px',
    },
    wrapperRight: {
      flex: 1,
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      // width: 480,
      maxWidth: '100px',
      border: '3px solid black',
      borderRadius: '4px',
      padding: '10px',
      marginTop: '15px',
    },
    modalInput: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: '90%',
      border: '1px solid #b4b4b4',
      borderRadius: '4px',
      padding: '10px',
      marginTop: '15px',
    },
    modalShared: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: '80%',
      border: '1px solid #b4b4b4',
      borderRadius: '4px',
      padding: '10px',
      marginTop: '15px',
    },
    inputFieldFont: {
      fontSize: '14px',
      textAlign: 'center',
      fontWeight: 400,
      '&:focus': {
        outline: 'none !important',
      },
    },
    activeTab: {
      color: '#4a90e2',
    },
    inactiveTab: {
      color: '#b4b4b4',
    },
    alertLowerPadding: {
      paddingBottom: '10px',
    },
    alertTitle: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    alertTitleSub: {
      fontSize: '0.85rem',
      fontFamily: 'Roboto !important',
    },
    heavyFontWeight: {
      fontWeight: 900,
    },
    input: {
      textAlign: 'center',
    },
    paddingTopPackageSide: {
      paddingTop: '95px',
    },
    beigeBackground: {
      backgroundColor: '#fff6ed',
    },
    noPaddingBottom: {
      paddingBottom: '0px !important',
    },
    greyishBackground: {
      backgroundColor: '#f5f1ed',
    },
    thinLines: {
      display: 'inline-block',
      minWidth: '90px',
      height: '5px',
      borderBottom: '1px solid #e8e8e8',
      margin: '4px',
      marginRight: '20px',
      marginLeft: '20px',
    },
    subscribeButton: {
      minWidth: '200px',
    },
    sliderLabel: {
      fontFamily: 'Roboto !important',
      fontSize: '1.05rem',
      paddingBottom: '10px',
    },
    thumbIconWrapper: {
    },
    thumb: {
      backgroundColor: 'white',
      border: '1px solid grey',
      color: 'white',
      height: '20px',
      width: '20px',
    },
    track: {
      color: 'red',
    },
    thumbIcon: {
      borderRadius: '50%',
    },
    root: {
      color: 'black',
      backgroundColor: 'black',
    },
    trackBefore: {
      backgroundColor: '#53c4bc',
      height: '8px',
      borderRadius: '5px',
      color: '#53c4bc',
    },
    trackAfter: {
      backgroundColor: '#e6e6e6',
      height: '8px',
      borderRadius: '5px',
      color: '#e6e6e6',
    },
  });

const prices = {
  Coinbase: 10,
  Trader: 30,
};

function log(value) {
  console.log(value); //eslint-disable-line
}

function getModalStyle() {
  return {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };
}

class Summary_Old2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkBoxes: {},
      currencies: [],
      currentTitleHeader: 'recommended',
      enableWalkthrough: true,
      open: false,
      phoneNumber: '',
      showMore: false,
      showMoreIndex: 16,
      userId: null,
      value: 0,
    };
  }

  componentDidMount() {
    // let currencies = ['BTC', 'ETH', 'BCH', 'LTC', 'ETC'];
    //     let checkboxes = {
    //       'BTC': true,
    //       'ETH': true,
    //       'BCH': true,
    //       'LTC': true,
    //       'ETC': true,
    //     };
    //     this.setState({ currencies, checkBoxes: checkboxes });

    if (this.props.currenciesToExplore.length > 0) {
      const currencyStrings = ['Top currencies', 'Well known', 'All of them'];
      let currencyNum = 0;
      // top 5 needs to be coinbase ones
      if (this.props.currenciesToExplore === currencyStrings[0]) {
        currencyNum = 5;
      } else if (this.props.currenciesToExplore === currencyStrings[1]) {
        currencyNum = 100;
      } else if (this.props.currenciesToExplore === currencyStrings[2]) {
        currencyNum = 250;
      }

      if (currencyNum === 5) {
        console.log('in currencyNum === 5');
        let currencies = ['BTC', 'ETH', 'BCH', 'LTC', 'ETC'];
        currencies.unshift(null);
        let checkboxes = {
          'BTC': true,
          'ETH': true,
          'BCH': true,
          'LTC': true,
          'ETC': true,
        };
        this.setState({ currencies, checkBoxes: checkboxes });
      } else {
        console.log('in else bre');
        fetch('https://cs-price-alerts.herokuapp.com/top?top=' + currencyNum)
        .then((response) => {return response.json()})
        .then((data) => {
          let checkboxes = {};
          data.forEach((coin) => {
            checkboxes[coin] = true;
          });
          let currencies = data;
          currencies.unshift(null);
          this.setState({ currencies: data, checkBoxes: checkboxes });
        });
      }
    }
    const self = this;

    const handler = window.StripeCheckout.configure({
      key: 'pk_test_TYooMQauvdEDq54NiTphI7jx',
      image: logo,
      locale: 'auto',
      token: function(token) {
        console.log('Stripe token: ', token);
        // TODO: what if token.email and this.props.email are different?

        self.createStrategy();

        // this token.email can be used to query User DB and activate [save] strategy


        // this [token.id] needs to be saved into user DB?
        // TODO: do we need to create customer objects in stripe? how to save reference in our own DB?

        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
      }
    });

    document.getElementById('customButton').addEventListener('click', function(e) {
      // Open Checkout with further options:
      handler.open({
        name: 'CryptoSpotlight',
        description: self.props.packageSelected + ' Package',
        zipCode: true,
        amount: prices[self.props.packageSelected] + '00',
      });
      e.preventDefault();
    });

    // Close Checkout on page navigation:
    window.addEventListener('popstate', function() {
      handler.close();
    });
  }

  createUser() {
    const self = this;
    let userInfo = {
      active: true,
      cellphone: this.props.phone,
      email: this.props.email,
      firstName: this.props.name,
      lastName: '',
      preferences: [],
      surveyAnswers: this.props.surveyAnswers,
    };

    const createNewUser = async () => {
      const response = await fetch(
        'http://localhost:5000/createtestuser',
        {
          method: 'POST',
          body: JSON.stringify(userInfo),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }
      );
        const { userId } = await response.json();
        console.log(userId);
        self.setState({userId});
    }
    createNewUser();
  }

  createStrategy() {
    const { checkBoxes } = this.state;
    let currenciesToSave = [];

    for (let key in checkBoxes) {
      if (checkBoxes[key] === true) {
        currenciesToSave.push(key);
      }
    }

    let strategyInfo = {
      active: true,
      currencies: currenciesToSave,
      exchanges: this.props.checkedExchanges,
      profitTakePercent: this.props.priceIncrease,
      stopLossPercent: this.props.priceDecrease,
      timeOutPeriodInHrs: this.props.timeOut,
      userId: this.state.userId,
    };

    const createNewStrategy = async () => {
      const response = await fetch(
        'http://localhost:5000/saveteststrategy',
        {
          method: 'POST',
          body: JSON.stringify(strategyInfo),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }
      );
        const serverResponse = await response;
        console.log('/saveteststrategy response - ', serverResponse);
    }
    createNewStrategy();

  }


  handleShowMore = (currenciesLength) => {
    let currentShowMoreIndex = this.state.showMoreIndex;
    let updatedShowMoreIndex = currentShowMoreIndex + 8;
    let showMore = false;

    if (updatedShowMoreIndex >= currenciesLength) {
      showMore = true;
    }

    this.setState({
      showMoreIndex: updatedShowMoreIndex,
      showMore,
    })
  };

  handleShowLess = (currenciesLength) => {
    let currentShowMoreIndex = this.state.showMoreIndex;
    let updatedShowMoreIndex = currentShowMoreIndex - 8;
    let showMore = false;

    if (updatedShowMoreIndex >= currenciesLength) {
      showMore = true;
    }

    this.setState({
      showMoreIndex: updatedShowMoreIndex,
      showMore,
    });
    this.setState({
      showMore: false,
    });
  };

  saveUser = () => {
    this.createUser();
  }

  handleChange = (event, value) => {
    // TODO: go back button. Make sure
    let open = false;
    let currentTitleHeader = this.state.currentTitleHeader;
    if (event === 'checkOut') {
      currentTitleHeader = 'checkOut';
      open = true;
    }
    this.setState({ open, currentTitleHeader });
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

  renderCheckboxes(classes) {
    const {currencies} = this.state;
    let checkboxes = [];
    let tempCheckboxes = [];

    for (let i = 0; i < currencies.length; i++) {
      if (this.props.packageSelected === 'Coinbase') {
        if (i !== 0) {
          checkboxes.push(
            <td>
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
              className={classes.label}
            />
            </td>
          );
        }
      } else {
        if (i % 8 === 0 && i !== 0) {
          tempCheckboxes.push(
            <td>
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
              className={classes.label}
            />
            </td>
          );

          checkboxes.push(
            <tr className={i > 16 && this.state.showMore === false && (i > this.state.showMoreIndex) ? classes.hide : null}>
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
                  checked={this.state.checkBoxes[currencies[i]]}
                  onChange={this.handleCheckbox.bind(null, currencies[i])}
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
      }
    }
    return (
      <div>
      <table className={classes.label}>
        <tbody>
        {checkboxes}
        </tbody>
      <span onClick={this.handleShowMore.bind(this, currencies.length)} className={this.state.showMore || this.props.packageSelected === 'Coinbase' ? classes.hide : null}>
      Show More
      </span>
      </table>
      </div>
    );
  }

  renderSummary() {
    const { classes, priceIncrease, priceDecrease, timeOut } = this.props;
    const currencyStrings = ['Top currencies', 'Well known', 'All of them'];
    const riskProfiles = ['Risk averse', 'The middle', 'High risk,'];

    let currencyCheckboxes = this.renderCheckboxes(classes);
    let currencyNum = 0;
    let riskProfileText = '';

    if (this.props.currenciesToExplore === currencyStrings[0]) {
      currencyNum = 5;
    } else if (this.props.currenciesToExplore === currencyStrings[1]) {
      currencyNum = 100;
    } else if (this.props.currenciesToExplore === currencyStrings[2]) {
      currencyNum = 250;
    }

    if (this.props.cryptoRiskProfile === riskProfiles[0]) {
      riskProfileText = 'low';
    } else if (this.props.cryptoRiskProfile === riskProfiles[1]) {
      riskProfileText = 'medium';
    } else if (this.props.cryptoRiskProfile === riskProfiles[2]) {
      riskProfileText = 'higher than most';
    }

    let packageText = this.props.packageSelected === 'Coinbase' ?
      '\n With a busy lifestyle, most of your trading needs can be solved for simply by solely tracking the Coinbase coins — that\’s why we keep it simple.'
      : '\n Being a more experienced crypto trader, we give you the full power of our AI — you\’re given the ears and eyes that monitor the market 24/7.';

    return (
     <Grid container className={classNames(classes.gridRoot, classes.greyishBackground)} spacing={24}>
       <Grid item xs={12} className={classes.noPaddingBottom}>
         <Paper className={classNames(classes.paper, classes.negativeRightMargin)}>
         <div className={classes.titleHeaderDiv}>
         <span
            className={classNames(classes.titleHeaders, classes.titleHeaderFont, classes.activeTab)}
            onClick={this.handleChange.bind(this, 'recommended')}>
             Recommended
         </span>
         <img className={classes.backButton} src={back} onClick={this.props.goBack}/>
         </div>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.open}
              onClose={this.handleClose}
              style={{display:'none'}}
            >
          <div style={getModalStyle()} className={classes.paper2}>
            <img src={logo} className={classes.centerImg} />
            <br />
            <Typography variant="title" id="modal-title" className={classes.textCenter}>
              {this.props.packageSelected + ' Package'}
            </Typography>
            <br />
            <div style={{paddingLeft: '45px'}}>
            <div className={classes.thinLines}></div><span className={classes.textCenter} style={{fontSize: '1.55em', color: '#4A90E2'}}>{'$' + prices[this.props.packageSelected]}</span><div className={classes.thinLines}></div>
            </div>
            <div className={classes.textCenter} style={{fontSize: '0.80em', color: '#4A90E2'}}>monthly</div>
            <br />
            <Grid container spacing={0}>
              <Grid item xs={6}>
              <input
                  className={classNames(classes.input, classes.modalShared, classes.inputFieldFont)}
                  placeholder={'First Name'}
                />
              </Grid>
              <Grid item xs={6}>
                <input
                  className={classNames(classes.input, classes.modalShared, classes.inputFieldFont)}
                  placeholder={'Last Name'}
                />
              </Grid>
              <Grid item xs={12}>
              <input
                  className={classNames(classes.input, classes.modalInput, classes.inputFieldFont)}
                  placeholder={'Card No.'}
                />
              </Grid>
              <Grid item xs={6}>
              <input
                  className={classNames(classes.input, classes.modalShared, classes.inputFieldFont)}
                  placeholder={'Expiry Date'}
                />
              </Grid>
              <Grid item xs={6}>
                <input
                  className={classNames(classes.input, classes.modalShared, classes.inputFieldFont)}
                  placeholder={'CVC'}
                />
              </Grid>
              <Grid item xs={12}>
              <input
                  className={classNames(classes.input, classes.modalInput, classes.inputFieldFont)}
                  placeholder={'Phone'}
                />
              </Grid>
            </Grid>
            <br />
            <Button size="large" variant="contained"  className={classNames(classes.cssRoot, classes.center)} style={{width: '100%'}}>
                Purchase
            </Button>
          </div>
        </Modal>
         </Paper>
       </Grid>
       <Grid item xs={12} style={{height: '0px', paddingBottom: '0px', paddingTop: '0px'}}>
       <img src={logoBorder} className="App-logo3" alt="logo" style={{marginTop: '-70px', position: 'absolute', marginLeft: '50px'}} />
       </Grid>
        <Grid item xs={4} id="rightdiv" style={{padding: '5px'}}>
          <Card className={classes.card2}>
            <CardContent>
              <div className={classNames(classes.blackFont, classes.textLeft, classes.bold, classes.alertLowerPadding, classes.alertTitleSub)}>
              {'Thanks for the feedback, ' + this.props.name + '.'}
              </div>
              <div className={classNames(classes.blackFont, classes.textLeft, classes.bold, classes.alertLowerPadding, classes.alertTitleSub)}>
              {'Based on your answers, we\'ve crafted your tailored game plan.'}
              </div>
              <br />
              <div className={classes.nonActiveOverlay}>
              <div className={classNames(classes.blackFont, classes.textLeft, classes.alertLowerPadding, classes.alertTitle)}>
              {'Monitor:'}
              </div>
              <div className={classNames(classes.blackFont, classes.textLeft, classes.alertLowerPadding, classes.alertTitleSub)}>
              {this.props.currenciesToExplore === currencyStrings[2] ? this.props.currenciesToExplore : this.props.currenciesToExplore + ' by market cap'}
              </div>
              </div>
              <div className={this.props.checkedExchanges.length > 0 ? classes.nonActiveOverlay: classes.hide} style={{display: 'none'}}>
              <Typography gutterBottom variant="headline" component="h5" className={classNames(classes.blackFont, classes.textLeft)}>
                Exchange(s):
              </Typography>
              <div className={classNames(classes.blackFont, classes.textLeft, classes.alertLowerPadding, classes.alertTitleSub)}>
              {this.props.checkedExchanges.length > 0 ? this.props.checkedExchanges.join(', ') : 'None selected'}
              </div>
              </div>
              <div className={classes.nonActiveOverlay}>
              <div className={classNames(classes.blackFont, classes.textLeft, classes.alertLowerPadding, classes.alertTitle)}>
              {'Alerts:'}
              </div>
              <div className={classNames(classes.blackFont, classes.textLeft, classes.alertLowerPadding, classes.alertTitleSub)}>
              {'Price Increase: ' + priceIncrease + '%'}
              </div>
              <div className={classNames(classes.blackFont, classes.textLeft, classes.alertLowerPadding, classes.alertTitleSub)}>
                {'Price Decrease: ' + priceDecrease + '%'}
              </div>
              <div className={classNames(classes.blackFont, classes.textLeft, classes.alertLowerPadding, classes.alertTitleSub)}>
               {'Timeout: ' + timeOut + ' hours'}
              </div>
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
              <div className={classNames(classes.blackFont, classes.textLeft, classes.alertLowerPadding, classes.alertTitle)}>
              {'Phone Number'}
              </div>
              <PhoneInput
                // TODO: make placeholder interactive
                placeholder="(111) 222-3333"
                value={this.props.phone}
                onChange={this.props.setPhoneNumber} />
              </div>
            </CardContent>
            <div className={classes.thinLines}></div><span className={classes.textCenter} style={{fontSize: '1.55em', color: '#4A90E2'}}>{'$' + prices[this.props.packageSelected]}</span><div className={classes.thinLines}></div>
            <div className={classes.textCenter} style={{fontSize: '0.80em', color: '#4A90E2'}}>monthly</div>
            <CardActions className={classes.textCenter}>
              <Button id="customButton" onClick={this.saveUser} size="small" color="primary" variant="contained" className={classNames(classes.margin, classes.cssRoot, classes.center, classes.subscribeButton)}>
                Subscribe
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={8} id="leftdiv" style={{padding: '5px'}}>
        <Card className={classes.card}>
        <CardContent className={classNames(classes.paddingTopPackageSide, classes.beigeBackground)}>
          <Card className={classNames(classes.card, classes.cardBottomPadding)}>
            <CardContent className={classes.firstBackgroundImg}>
              <div className={classNames(classes.whiteFont, classes.textLeft, classes.cardHeadline)}>
                <img src={currenciesLogo} className={classes.titleIcon} style={{paddingBottom: '20px', paddingTop: '25px'}} />
                {this.props.packageSelected + ' Package'}
              </div>
              {/*
              <Typography gutterBottom variant="headline" component="h2" className={classNames(classes.whiteFont, classes.textLeft)}>
                {this.props.currenciesToExplore + ' currencies'}
              </Typography>
              <Typography gutterBottom variant="headline" component="h3" className={classNames(classes.whiteFont, classes.textLeft)}>
                By Market Cap
              </Typography>
            */}
            </CardContent>
            <CardContent>
              <Typography component="p" className={classNames(classes.blackFont, classes.bold, classes.textLeft)}>
                {'Stay Informed.'}
              </Typography>
              <br />
              <Typography component="p" className={classNames(classes.blackFont, classes.textLeft)}>
                {'\n We\’ll track the currencies in the top ' + currencyNum + ' - ranked by market cap - and alert you when our AI detects anomalies in these specific currencies.' + packageText}
              </Typography>
              <br />
              <Typography component="p" className={classNames(classes.bold, classes.textLeft, classes.bottomPadding)}>
                {'You\'re set to receive notifications for:'}
              </Typography>
              {currencyCheckboxes}
            </CardContent>
          </Card>
          {/*
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
        */}
          <Card className={classNames(classes.card, classes.cardBottomPadding)}>
            <CardContent className={classes.thirdBackgroundImg}>
            <div className={classNames(classes.whiteFont, classes.textLeft, classes.cardHeadline)} style={{border:'none'}}>
                <img src={alertsIcon} className={classes.titleIcon} style={{paddingBottom: '20px', paddingTop: '38px'}}/>
                {'Price Alerts'}
              </div>
            </CardContent>
            <CardContent>
              <Typography component="p" className={classNames(classes.blackFont, classes.bold, classes.textLeft)}>
               {'A seamless strategy.'}
              </Typography>
              <br />
              <Typography component="p" className={classNames(classes.blackFont, classes.textLeft)}>
               {'Text messages will be sent directly to your phone as soon as anomalies are detected and we believe positive price action is possible. How you interpret the alert is up to you. Simplicity is the ultimate sophistication.'}
              </Typography>
              <br />
              <Typography component="p" className={classNames(classes.blackFont, classes.bold, classes.textLeft)}>
               {'Based on your answers, your risk tolerance seems ' + riskProfileText + ', so we have set your strategy notifications accordingly.'}
              </Typography>
              <br />
              <Typography component="p" className={classNames(classes.blackFont, classes.textLeft)}>
               {'You\’ll receive a follow up text after your alert is triggered to notify you of a price increase or decrease. If the time of the alert reaches your timeout threshold, we\’ll be sure to notify you of the timeout.'}
              </Typography>
              <br />
              <Typography component="p" className={classNames(classes.blackFont, classes.textLeft)}>
               {'These can be fully customized below:'}
              </Typography>
              <br />
              <br />
              <br />
              <div className={classes.wrapper}>
              <div className={classNames(classes.wrapperRight, classes.slider)}>
              <div id="label" className={classes.sliderLabel}>Price Increase</div>
              <Slider classes={{
            thumb: classes.thumb,
            trackBefore: classes.trackBefore,
            trackAfter: classes.trackAfter,
          }} value={parseInt(priceIncrease)} aria-labelledby="label" onChange={this.props.changePriceIncreaseSlider} />
              <FormControl>
              <input
                onChange={this.props.changePriceIncrease}
                className={classNames(classes.textField, classes.inputFieldFont)}
                value={priceIncrease.toString().indexOf('%') === -1 ? priceIncrease  + '%' : priceIncrease}
              />
              </FormControl>
              </div>
              <div className={classNames(classes.wrapperRight, classes.slider)}>
              <div id="label2" className={classes.sliderLabel}>Price Decrease</div>
              <Slider classes={{
            thumb: classes.thumb,
            trackBefore: classes.trackBefore,
            trackAfter: classes.trackAfter,
          }} value={parseInt(priceDecrease)} aria-labelledby="label2" onChange={this.props.changePriceDecreaseSlider} />
              <FormControl>
              <input
                onChange={this.props.changePriceDecrease}
                className={classNames(classes.input, classes.textField, classes.inputFieldFont)}
                value={priceDecrease.toString().indexOf('%') === -1 ? priceDecrease  + '%' : priceDecrease}
              >
              </input>
              </FormControl>
              </div>
              <div className={classNames(classes.wrapperRight, classes.slider)}>
              <div id="label3" className={classes.sliderLabel}>Timeout</div>
              <Slider classes={{
            thumb: classes.thumb,
            trackBefore: classes.trackBefore,
            trackAfter: classes.trackAfter,
          }} value={parseInt(timeOut)} min={2} max={168} aria-labelledby="label3" onChange={this.props.changeTimeOutSlider} />
              <FormControl>
              <input
                onChange={this.props.changeTimeOut}
                className={classNames(classes.textField, classes.inputFieldFont)}
                value={timeOut.toString().indexOf(' hours') === -1 ? timeOut  + ' hours' : timeOut}
              />
              </FormControl>
              </div>
            </div>

            </CardContent>
          </Card>
          {/*
          <Card className={classNames(classes.card, classes.cardBottomPadding)}>
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
          {'Summary_Old2 Page'}
        </Button>
      </div>
    );
  }

  render() {
    console.log('resetting state', this.state);
    return (
      <div className="App">
        {!this.state.enableWalkthrough ? this.renderWelcome() : this.renderSummary()}
      </div>
    );
  }
}

export default withStyles(styles)(Summary_Old2);
