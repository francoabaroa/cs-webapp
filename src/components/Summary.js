import React, { Component } from 'react';
import logo from '../cs-logo.png';
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

import Slider2 from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';

import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

import classNames from 'classnames';

import Image from '../assets/Background-currency.png';
import Image2 from '../assets/bckgrnd-image.png';
import Image3 from '../assets/bckgrnd-image2.png';

const colors = ['#4a90e2', 'rgba(255, 255, 255, 0.80)', '#244770', '#3da937'];

function log(value) {
  console.log(value); //eslint-disable-line
}

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
  titleHeaders: {
    paddingRight: '40px',
    paddingLeft: '40px',
  },
  titleHeaderDiv: {
    paddingTop: '10px',
  },
  backButtton: {
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
    border: '1px solid black',
    borderRadius: '10px',
    padding: '4px',
  },
  inputFieldFont: {
    fontSize: '14px',
    textAlign: 'center',
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
      currentTitleHeader: 'recommended',
      enableWalkthrough: true,
      open: false,
      phoneNumber: '',
      showMore: false,
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
      let currencyStrings = ['Top currencies', 'Well known', 'All of them'];
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

    fetch('https://cs-price-alerts.herokuapp.com/createuser', {method: 'post', body: JSON.stringify(userInfo)})
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

    fetch('https://cs-price-alerts.herokuapp.com/savestrategy', {method: 'post', body: JSON.stringify(strategyInfo)})
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


  handleShowMore = () => {
    this.setState({
      showMore: true,
    })
  };

  handleShowLess = () => {
    this.setState({
      showMore: false,
    })
  };

  handleChange = (event, value) => {
    // TODO: go back button. Make sure
    let open = false;
    let currentTitleHeader = this.state.currentTitleHeader;
    if (event === 'checkOut') {
      currentTitleHeader = 'checkOut';
      open = true;
    }
    this.setState({ open, currentTitleHeader });

    console.log('EVENT', event, 'value', value);
    // if (value === 2) {
    //   this.props.goBack();
    // } else {
    //   let open = value === 1;
    //   this.setState({ value, open });
    // }
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
      if (i % 5 === 0 && i !== 0) {
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
          <tr className={i > 15 && this.state.showMore === false ? classes.hide : null}>
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
    return (
      <div>
      <table className={classes.label}>
        <tbody>
        {checkboxes}
        </tbody>
      <span onClick={this.handleShowMore} className={this.state.showMore || this.props.packageSelected === 'Coinbase' ? classes.hide : null}>
      Show More
      </span>
      <span onClick={this.handleShowLess} className={!this.state.showMore || this.props.packageSelected === 'Coinbase' ? classes.hide : null}>
      Show Less
      </span>
      </table>
      </div>
    );
  }



  renderCheckboxes1(classes) {
    const {currencies} = this.state;
    let checkboxes = [];
    let tempCheckboxes = [];
    for (let i = 0; i < currencies.length; i++) {
      if (i % 5 === 0 && i !== 0) {
        tempCheckboxes.push(
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
        );

        checkboxes.push(
          <FormGroup row>
            {tempCheckboxes}
          </FormGroup>
        );
        tempCheckboxes = [];
      } else if (currencies[i] !== null) {
        tempCheckboxes.push(
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
        );
      }
    }
    return (
      <div>
        {checkboxes}
      </div>
    );
  }

  renderSummary() {
    const { classes, priceIncrease, priceDecrease, timeOut } = this.props;
    let currencyCheckboxes = this.renderCheckboxes(classes);
    let packageText = this.props.packageSelected === 'Coinbase' ?
      '\n With a busy lifestyle, most of your trading needs can be solved for simply by solely tracking the Coinbase coins — that\’s why we keep it simple.'
      : '\n Being a more experienced crypto trader, we give you the full power of our AI — you\’re given the ears and eyes that monitor the market 24/7.';

    return (
     <Grid container className={classes.root} spacing={24}>
       <Grid item xs={12}>
         <Paper className={classNames(classes.paper, classes.negativeRightMargin)}>
         <div className={classes.titleHeaderDiv}>
         <span className={classes.titleHeaders} onClick={this.handleChange.bind(this, 'recommended')}>
         Recommended
         </span>
         <span onClick={this.handleChange.bind(this, 'checkOut')}>
         Check out
         </span>
         <img className={classes.backButtton} src={back} />
         </div>
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
         </Paper>
       </Grid>
        <Grid item xs={3}>
          <Card className={classes.card2}>
            <CardContent>
              <Typography component="p" className={classNames(classes.blackFont, classes.bold, classes.textLeft)}>
                {'Thanks for the feedback, ' + this.props.name + '.'}
              </Typography>
              <br />
              <Typography component="p" className={classNames(classes.blackFont, classes.bold, classes.textLeft)}>
                {'Based on your answers, we\'ve crafted your tailored game plan.'}
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
              <Button size="small" color="primary" variant="contained" className={classNames(classes.margin, classes.cssRoot, classes.center)}>
                Subscribe
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={8}>
        <Card className={classes.card}>
        <CardContent>
          <Card className={classNames(classes.card, classes.cardBottomPadding)}>
            <CardContent className={classes.firstBackgroundImg}>
              <Typography gutterBottom variant="headline" component="h2" className={classNames(classes.whiteFont, classes.textLeft)}>
                <img src={currenciesLogo} className={classes.titleIcon} />
                {this.props.packageSelected + ' Package'}
              </Typography>
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
                {'\n We\’ll track the currencies in the [top X] and alert you when our AI detects anomalies in these specific currencies.' + packageText}
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
            <Typography gutterBottom variant="headline" component="h2" className={classNames(classes.whiteFont, classes.textLeft)}>
                <img src={alertsIcon} className={classes.titleIcon}/>
                Price Alerts
              </Typography>
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
               {'Based on your answers, your risk tolerance seems [INSERT], so we have set your strategy notifications accordingly.'}
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
              <Typography id="label">Price Increase</Typography>
              <Slider value={parseInt(priceIncrease)} aria-labelledby="label" onChange={this.props.changePriceIncreaseSlider} />
              <FormControl>
              <Input
                onChange={this.props.changePriceIncrease}
                className={classNames(classes.textField, classes.inputFieldFont)}
                disableUnderline={true}
                value={priceIncrease}
              />
              </FormControl>
              </div>
              <div className={classNames(classes.wrapperRight, classes.slider)}>
              <Typography id="label2">Price Decrease</Typography>
              <Slider value={parseInt(priceDecrease)} aria-labelledby="label2" onChange={this.props.changePriceDecreaseSlider} />
              <FormControl>
              <Input
                onChange={this.props.changePriceDecrease}
                className={classNames(classes.textField, classes.inputFieldFont)}
                disableUnderline={true}
                value={priceDecrease}
              />
              </FormControl>
              </div>
              <div className={classNames(classes.wrapperRight, classes.slider)}>
              <Typography id="label3">Timeout</Typography>
              <Slider value={parseInt(timeOut)} min={2} max={168} aria-labelledby="label3" onChange={this.props.changeTimeOutSlider} />
              <FormControl>
              <Input
                onChange={this.props.changeTimeOut}
                className={classNames(classes.textField, classes.inputFieldFont)}
                disableUnderline={true}
                value={timeOut}
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
