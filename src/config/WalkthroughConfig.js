const WalkthroughConfig = {
  exchangesList: {
    0: 'Coinbase',
    1: 'Binance',
    2: 'OKex',
    3: 'Kraken',
    4: 'Huobi',
    5: 'Poloniex',
    // 5: 'Cryptopia',
    // 5: 'HitBTC',
    // 7: 'Kucoin',
    // 9: 'Okex',
  },
  scenesConfig: {
    0: {
      'headline': 'Hi there!',
      'stepLevel': 0,
    },
    1: {
      'arguments': ['name'],
      'headline': 'What\'s your first name?',
      'method': 'renderTextInput',
      'stepLevel': 0,
    },
    2: {
      'headline': 'Nice to meet you, ',
      'stepLevel': 0,
    },
    3: {
      'arguments': ['cryptoCurrentStatus'],
      'headline': 'When it comes to crypto, are you:',
      'method': 'renderButtons',
      'icons': ['informed', 'curious', 'skeptical', 'rekt'],
      'strings': ['Informed', 'Curious', 'Skeptical', 'Rekt'],
      'stepLevel': 0,
    },
    4: {
      'headline': 'NEED CUSTOMIZED RESPONSE HERE DEPENDING ON WHAT THEY PICKED',
      'customizedResponses': ['An expert, huh? We\'ll see if we can show you something new.', 'We\'ll reward that curiosity, Goob. But first, let\'s get to know you!', 'Excellent, we built our research database with skeptics in mind (and in our office).', 'Oops, looks like you weren\'t using an indicator. Let\'s fix that.'],
      'stepLevel': 0,
    },
        5: {
      'arguments': [],
      'multipleSelections': true,
      'headline': 'What exchanges do you use to trade?',
      'icons': ['coinbase', 'binance', 'okex', 'kraken', 'huobi', 'poloniex'],
      'strings': ['Coinbase', 'Binance', 'OKex', 'Kraken', 'Huobi', 'Poloniex'],
      'method': 'renderButtons',
      'stepLevel': 0,
    },
    // 5: {
    //   'arguments': [],
    //   'headline': 'What exchanges do you use to trade?',
    //   'method': 'renderCheckboxList',
    //   'stepLevel': 0,
    // },
    6: {
      'arguments': ['handlePastCryptoTrader'],
      'headline': 'Have you traded crypto in the past?',
      'method': 'renderYesNo',
      'stepLevel': 0,
    },
    7: {
      'arguments': ['handleUseOfTA'],
      'headline': 'Do you use TA to trade?',
      'method': 'renderYesNo',
      'stepLevel': 0,
    },
    8: {
      'arguments': ['email'],
      'headline': 'What\'s your email?',
      'method': 'renderTextInput',
      'stepLevel': 0,
    },
    9: {
      'arguments': ['incorporatingCryptoLifeAnswer'],
      'headline': 'When it comes to incorporating crypto in your life, are you:',
      'method': 'renderButtons',
      'icons': ['informed', 'curious', 'skeptical', 'rekt'],
      'strings': ['Dedicated', 'On a kick', 'Ready to learn'],
      'stepLevel': 1,
      'smallButton': true,
    },
    10: {
      'arguments': ['spareTimeAvailability'],
      'headline': 'When it comes to spare time for crypto, are you:',
      'method': 'renderButtons',
      'icons': ['completelyBooked', 'occasionallyAvailable', 'prettyFree'],
      'strings': ['Completely booked', 'Occasionally available', 'Pretty free'],
      'stepLevel': 1,
    },
    11: {
      'arguments': ['currenciesToExplore'],
      'headline': 'What currencies should we explore?',
      'method': 'renderButtons',
      'icons': ['topCurrencies', 'wellKnown', 'allOfThem',],
      'strings': ['Top currencies', 'Well known', 'All of them'],
      'stepLevel': 2,
    },
    12: {
      'arguments': ['cryptoTradingHabit'],
      'headline': 'When it comes to trading, do you prefer to:',
      'method': 'renderButtons',
      'icons': ['informed', 'curious', 'skeptical', 'rekt'],
      'strings': ['Trade quick', 'Hold for a bit', 'Sit back and relax'],
      'stepLevel': 2,
      'smallButton': true,
    },
    13: {
      'arguments': ['cryptoRiskProfile'],
      'headline': 'When you trade, are you:',
      'method': 'renderButtons',
      'icons': ['noRisk', 'midRisk', 'highRisk'],
      'strings': ['Risk averse', 'The middle', 'High risk, high reward'],
      'stepLevel': 2,
    },
    14: {
      'arguments': ['referralSource'],
      'headline': 'Lastly, we\'re happy to have met you. How did you hear about us?',
      'method': 'renderButtons',
      'icons': ['friend', 'twitter', 'productHunt', 'google', 'facebook', 'instagram'],
      'strings': ['Friend', 'Twitter', 'Product Hunt', 'Google', 'Facebook', 'Instagram'],
      'stepLevel': 3,
    },
    15: {
      'headline': 'Strategy',
      'method': '',
      'stepLevel': 3,
    },
  },
  styles: theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    nextButton: {
      margin: theme.spacing.unit,
      fontSize: '1.4em',
      backgroundColor: '#FFFFFF',
      border: '3px solid #000000',
      color: 'black',
    },
    bigButton: {
      margin: theme.spacing.unit,
      minHeight: '300px',
      minWidth: '260px',
      border: '2px solid #000000',
      borderRadius: '4px',
      color: 'black',
    },
    group: {
      margin: `${theme.spacing.unit}px 0`,
    },
    mediumButtonRound: {
      margin: theme.spacing.unit,
      minHeight: '200px',
      minWidth: '200px',
      borderRadius: '50%',
      backgroundColor: 'white',
      border: '2px solid black',
      color: 'black',
    },
    mediumButton: {
      margin: theme.spacing.unit,
      minHeight: '150px',
      minWidth: '200px',
      borderRadius: '4px',
      backgroundColor: 'white',
      border: '2px solid black',
      color: 'black',
    },
    smallButton: {
      margin: theme.spacing.unit,
      minHeight: '98px',
      minWidth: '210px',
      borderRadius: '4px',
      backgroundColor: 'white',
      border: '2px solid #000000',
      color: 'black',
    },
    gridRoot: {
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
      border: '4px solid black',
      borderRadius: '6px',
      padding: '40px',
      backgroundColor: '#FFFFFF',
    },
    demo2: {
      padding: '30px',
      paddingTop: '0px',
    },
    progressLine: {
      maxWidth: '200px',
    },
    stepper: {
      maxWidth: '500px',
      backgroundColor: '#fff6ed',
      margin: '0 auto',
    },
    buttonLabel: {
      fontSize: '25px',
    },
    buttonLabelPadding: {
      fontSize: '25px',
      paddingTop: '40px',
    },
    header: {
      marginBottom: '70px',
    },
    inputFieldFont: {
      fontSize: '30px',
      textAlign: 'center',
    },
    surveyHeadline: {
      fontSize: '2.0em',
      fontWeight: 900,
    },
    root: {
      '&:hover': {
        backgroundColor: '#FFFFFF',
        border: '2px solid #000000',
        borderRadius: '4px',
        color: 'black',
      },
    },
    back: {
      position: 'fixed',
      bottom: 100,
      left: 100,
      fontSize: '1.5em',
    },
    backNoFixed: {
      display: 'none',
      bottom: 100,
      left: 100,
      fontSize: '1.5em',
    },
    demo: {
      paddingBottom: '35px',
    },
    checkmark: {
      fontSize: '2.0em',
      position: 'absolute',
      top: '4px',
      right: '8px',
      padding: '4px',
      border: '1px solid black',
      backgroundColor: '#4f8463',
      color: 'white',
      borderRadius: '50%',
      width: '20px',
      lineHeight: '20px',
      textAlign: 'center',
    },
    displayNone: {
      display: 'none',
    },
    greenOutline: {
      border: '2px solid #4f8463',
    },
  }),
};


export default WalkthroughConfig;