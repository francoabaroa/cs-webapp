import Image from '../assets/Background-currency.png';
import Image2 from '../assets/bckgrnd-image.png';
import Image3 from '../assets/bckgrnd-image2.png';

const colors = ['#4a90e2', 'rgba(255, 255, 255, 0.80)', '#244770', '#3da937'];

const SummaryConfig = {
  cryptospotlight: 'CryptoSpotlight',
  coinbaseCurrencies: ['BTC', 'ETH', 'BCH', 'LTC', 'ETC'],
  currencyStrings: ['Top currencies', 'Well known', 'All of them'],
  riskProfiles: ['Risk averse', 'The middle', 'High risk,'],
  topXCoinsApiUrl: 'https://cs-price-alerts.herokuapp.com/top?top=',
  applicationJson: 'application/json',
  coinbasePackageText: '\n With a busy lifestyle, most of your trading needs can be solved for simply by solely tracking the Coinbase coins — that\’s why we keep it simple.',
  traderPackageText: '\n Being a more experienced crypto trader, we give you the full power of our AI — you\’re given the ears and eyes that monitor the market 24/7.',
  saveStrategyUrl: 'https://cs-price-alerts.herokuapp.com/saveteststrategy',
  saveUserUrl: 'https://cs-price-alerts.herokuapp.com/createtestuser',
  POST: 'POST',
  prices: {
    Coinbase: 10,
    Trader: 30,
  },
  styles: theme => ({
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
      paddingLeft: '5px',
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
      backgroundColor: '#3f51b5',
      height: '8px',
      borderRadius: '5px',
      color: '#3f51b5',
    },
    trackAfter: {
      backgroundColor: '#e6e6e6',
      height: '8px',
      borderRadius: '5px',
      color: '#e6e6e6',
    },
  }),
};


export default SummaryConfig;