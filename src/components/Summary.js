import React, { Component } from 'react';

import back from '../assets/arrow.png';
import BlueCircle from '../assets/blue-circle.png';
import logo from '../cs-logo.png';
import logoBorder from '../assets/Logo.png';
import currenciesLogo from '../assets/Currencies-logo.png';
import alertsIcon from '../assets/alertsicon.png';

import '../App.css';
import 'react-phone-number-input/style.css';

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
import PhoneInput from 'react-phone-number-input';
import Slider from '@material-ui/lab/Slider';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';

import SummaryConfig from '../config/SummaryConfig';

import classNames from 'classnames';


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
      currentTitleHeader: 'recommended',
      enableWalkthrough: true,
      open: false,
      showMore: false,
      showMoreIndex: 16,
      userId: null,
      value: 0,
    };
  }

  componentDidMount() {
    const self = this;
    const handler = window.StripeCheckout.configure({
      key: 'pk_test_TYooMQauvdEDq54NiTphI7jx',
      image: logo,
      locale: 'auto',
      token: function(token) {
        console.log('Stripe token: ', token);
        // TODO: what if token.email and this.props.email are different?
        self.createStrategy();
      }
    });

    if (this.props.currenciesToExplore.length > 0) {
      let currencyNum = 0;
      // top 5 needs to be coinbase ones
      if (this.props.currenciesToExplore === SummaryConfig.currencyStrings[0]) {
        currencyNum = 5;
      } else if (this.props.currenciesToExplore === SummaryConfig.currencyStrings[1]) {
        currencyNum = 100;
      } else if (this.props.currenciesToExplore === SummaryConfig.currencyStrings[2]) {
        currencyNum = 250;
      }

      if (currencyNum === 5) {
        let currencies = SummaryConfig.coinbaseCurrencies;
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
        fetch(SummaryConfig.topXCoinsApiUrl + currencyNum)
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

    document.getElementById('customButton').addEventListener('click', function(e) {
      let scrubbedPhone = self.props.phone.split('+')[1];
      fetch(SummaryConfig.checkIfValidPhoneApiUrl + scrubbedPhone)
        .then((response) => {return response.json()})
        .then((data) => {
          if (data.valid) {
            if (self.props.phoneNumberError) {
              self.props.removePhoneErrorMessage();
            }
            self.saveUser();
            handler.open({
              name: SummaryConfig.cryptospotlight,
              description: self.props.packageSelected + ' Package',
              zipCode: true,
              amount: SummaryConfig.prices[self.props.packageSelected] + '00',
            });
            e.preventDefault();
          } else if (!data.valid) {
            self.props.triggerPhoneErrorMessage();
            handler.close();
            e.preventDefault();
          }
        });
    });

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
        SummaryConfig.saveUserUrl,
        {
          method: SummaryConfig.POST,
          body: JSON.stringify(userInfo),
          headers: {
            'Accept': SummaryConfig.applicationJson,
            'Content-Type': SummaryConfig.applicationJson
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
        SummaryConfig.saveStrategyUrl,
        {
          method: SummaryConfig.POST,
          body: JSON.stringify(strategyInfo),
          headers: {
            'Accept': SummaryConfig.applicationJson,
            'Content-Type': SummaryConfig.applicationJson
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


  saveUser = () => {
    this.createUser();
  }

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

  renderAppBar() {
    const { classes } = this.props;
    return (
     <Grid item xs={12} className={classes.noPaddingBottom}>
       <Paper className={classNames(classes.paper, classes.negativeRightMargin)}>
       <div className={classes.titleHeaderDiv}>
       <span
         className={classNames(
           classes.titleHeaders,
           classes.titleHeaderFont,
           classes.activeTab
          )}>
           Your Personalized Alerts Plan
       </span>
       <span
         onClick={this.props.goBack}
         className={classNames(
           classes.titleHeaders,
           classes.titleHeaderFont,
           classes.inactiveTab,
           classes.backButton
          )}>
            {'Back'}
       </span>
       </div>
       </Paper>
     </Grid>
    );
  }

  renderLogo() {
    return (
     <Grid
       item
       xs={12}
       style={{height: '0px', paddingBottom: '0px', paddingTop: '0px'}}>
       <img
         src={logoBorder}
         className="App-logo3"
         alt="logo"
         style={{marginTop: '-70px', position: 'absolute', marginLeft: '50px'}}
       />
      </Grid>
    );
  }

  renderLeftCard() {
    const { classes, priceIncrease, priceDecrease, timeOut } = this.props;
    let coinsNumber = this.props.currenciesToExplore === SummaryConfig.currencyStrings[0] ?
      '5' :
      this.props.currenciesToExplore === SummaryConfig.currencyStrings[1] ?
      '100' :
      this.props.currenciesToExplore === SummaryConfig.currencyStrings[2] ?
      '250' :
      '';
    let currencyString = this.props.currenciesToExplore === SummaryConfig.currencyStrings[2] ?
      'All Top ' + coinsNumber + ' Currencies' :
      'Top ' + coinsNumber + ' Currencies';


    return (
      <Grid item xs={4} id="rightdiv" style={{padding: '5px'}}>
        <Card className={classes.card2}>
          <CardContent>
            <div className={classNames(classes.blackFont, classes.textLeft, classes.bold, classes.alertLowerPadding, classes.alertTitleSub)} style={{fontSize: '1.1rem', paddingLeft: '10px'}}>
            {'Thanks for the feedback, ' + this.props.name + '.'}
            </div>
            <div className={classNames(classes.blackFont, classes.textLeft, classes.bold, classes.alertLowerPadding, classes.alertTitleSub)} style={{fontSize: '1.1rem', paddingBottom: '2px', paddingLeft: '10px'}}>
            {'Based on your answers, we\'ve crafted your tailored game plan.'}
            </div>
            <br />
            <div className={classes.nonActiveOverlay}>
            <div className={classNames(classes.blackFont, classes.textLeft, classes.alertLowerPadding, classes.alertTitle)}>
            {'Cryptocurrencies:'}
            </div>
            <div className={classNames(classes.blackFont, classes.textLeft, classes.alertLowerPadding, classes.alertTitleSub)}>
            {currencyString}
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
            <div className={classes.nonActiveOverlay}>
            <div className={classNames(classes.blackFont, classes.textLeft, classes.alertLowerPadding, classes.alertTitle)}>
            {'Phone Number'}
            </div>
              <PhoneInput
                // TODO: make placeholder interactive
                placeholder="Enter phone number"
                value={this.props.phone}
                onChange={this.props.setPhoneNumber} />
              {
                this.props.phoneNumberError ?
                  <div
                    style={{color: 'red', paddingTop: '7px', fontSize: '0.85em'}}>
                    Phone number invalid. Enter a valid number to proceed.
                  </div> :
                  null
              }

            </div>
          </CardContent>
          <div className={classes.thinLines}></div><span className={classes.textCenter} style={{fontSize: '1.55em', color: '#4A90E2'}}>{'$' + SummaryConfig.prices[this.props.packageSelected]}</span><div className={classes.thinLines}></div>
          <div className={classes.textCenter} style={{fontSize: '0.80em', color: '#4A90E2'}}>monthly</div>
          <CardActions className={classes.textCenter}>
            <Button disabled={this.props.phone === ''} id="customButton" size="small" color="primary" variant="contained" className={classNames(classes.margin, classes.cssRoot, classes.center, classes.subscribeButton)}>
              Subscribe
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }

  renderRightCard() {
    const { classes, priceIncrease, priceDecrease, timeOut } = this.props;

    let currencyCheckboxes = this.renderCheckboxes(classes);
    let currencyNum = 0;
    let riskProfileText = '';

    if (this.props.currenciesToExplore === SummaryConfig.currencyStrings[0]) {
      currencyNum = 5;
    } else if (this.props.currenciesToExplore === SummaryConfig.currencyStrings[1]) {
      currencyNum = 100;
    } else if (this.props.currenciesToExplore === SummaryConfig.currencyStrings[2]) {
      currencyNum = 250;
    }

    if (this.props.cryptoRiskProfile === SummaryConfig.riskProfiles[0]) {
      riskProfileText = 'low';
    } else if (this.props.cryptoRiskProfile === SummaryConfig.riskProfiles[1]) {
      riskProfileText = 'medium';
    } else if (this.props.cryptoRiskProfile === SummaryConfig.riskProfiles[2]) {
      riskProfileText = 'higher than most';
    }

    let packageText = this.props.packageSelected === 'Coinbase' ?
      SummaryConfig.coinbasePackageText :
      SummaryConfig.traderPackageText;

    return (
      <Grid item xs={8} id="leftdiv" style={{padding: '5px'}}>
      <Card className={classes.card}>
      <CardContent className={classNames(classes.paddingTopPackageSide, classes.beigeBackground)}>
        <Card className={classNames(classes.card, classes.cardBottomPadding)}>
          <CardContent className={classes.firstBackgroundImg}>
            <div className={classNames(classes.whiteFont, classes.textLeft, classes.cardHeadline)}>
              <img src={currenciesLogo} className={classes.titleIcon} style={{paddingBottom: '20px', paddingTop: '25px'}} />
              {this.props.packageSelected + ' Package'}
            </div>
          </CardContent>
          <CardContent>
            <Typography component="p" className={classNames(classes.blackFont, classes.bold, classes.textLeft)}>
              {'Stay Informed.'}
            </Typography>
            <br />
            <Typography component="p" className={classNames(classes.blackFont, classes.textLeft)}>
              {'\n We\’ll track the top ' + currencyNum + ' currencies and alert you when our AI detects anomalies in these specific currencies.' + packageText}
            </Typography>
            <br />
            <Typography component="p" className={classNames(classes.bold, classes.textLeft, classes.bottomPadding)}>
              {'You\'re set to receive notifications for:'}
            </Typography>
            {currencyCheckboxes}
          </CardContent>
        </Card>
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
            <Slider
              classes={{
                thumb: classes.thumb,
                trackBefore: classes.trackBefore,
                trackAfter: classes.trackAfter,
              }}
              value={parseInt(priceDecrease)}
              aria-labelledby="label2"
              onChange={this.props.changePriceDecreaseSlider} />
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
            <Slider
              classes={{
                thumb: classes.thumb,
                trackBefore: classes.trackBefore,
                trackAfter: classes.trackAfter,
              }}
              value={parseInt(timeOut)}
              min={2}
              max={168}
              aria-labelledby="label3"
              onChange={this.props.changeTimeOutSlider} />
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
         </CardContent>
        </Card>
      </Grid>
    );
  }

  renderSummary() {
    const { classes } = this.props;
    return (
     <Grid
       container
       className={classNames(classes.gridRoot, classes.greyishBackground)}
       spacing={24}>
       {this.renderAppBar()}
       {this.renderLogo()}
       {this.renderLeftCard()}
       {this.renderRightCard()}
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
    console.log('resetting state', this.state, 'this.props', this.props);
    return (
      <div className="App">
        {!this.state.enableWalkthrough ? this.renderWelcome() : this.renderSummary()}
      </div>
    );
  }
}


export default withStyles(SummaryConfig.styles)(Summary);
