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
      'strings': ['Informed', 'Curious', 'Skeptical', 'Rekt'],
      'stepLevel': 0,
    },
    4: {
      'headline': 'NEED CUSTOMIZED RESPONSE HERE DEPENDING ON WHAT THEY PICKED',
      'stepLevel': 0,
    },
    5: {
      'arguments': [],
      'headline': 'What exchanges do you use to trade?',
      'method': 'renderCheckboxList',
      'stepLevel': 0,
    },
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
      'strings': ['Dedicated', 'On a kick', 'Ready to learn'],
      'stepLevel': 1,
    },
    10: {
      'arguments': ['spareTimeAvailability'],
      'headline': 'When it comes to spare time for crypto, are you:',
      'method': 'renderButtons',
      'strings': ['Completely booked', 'Occasionally available', 'Pretty free'],
      'stepLevel': 1,
    },
    11: {
      'arguments': ['currenciesToExplore'],
      'headline': 'What currencies should we explore?',
      'method': 'renderButtons',
      'strings': ['Top currencies', 'Well known', 'All of them'],
      'stepLevel': 2,
    },
    12: {
      'arguments': ['cryptoTradingHabit'],
      'headline': 'When it comes to trading, do you prefer to:',
      'method': 'renderButtons',
      'strings': ['Trade quick', 'Hold for a bit', 'Sit back and relax'],
      'stepLevel': 2,
    },
    13: {
      'arguments': ['cryptoRiskProfile'],
      'headline': 'When you trade, are you:',
      'method': 'renderButtons',
      'strings': ['Risk averse', 'The middle', 'High risk, high reward'],
      'stepLevel': 2,
    },
    14: {
      'arguments': ['referralSource'],
      'headline': 'Lastly, we\'re happy to have met you. How did you hear about us?',
      'method': 'renderButtons',
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
    bigButton: {
      margin: theme.spacing.unit,
      height: '300px',
      width: '260px',
      backgroundColor: 'white',
      border: '2px solid black',
      color: 'black',
    },
    group: {
      margin: `${theme.spacing.unit}px 0`,
    },
    mediumButton: {
      margin: theme.spacing.unit,
      height: '200px',
      width: '200px',
      borderRadius: '50%',
      backgroundColor: 'white',
      border: '2px solid black',
      color: 'black',
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
      border: '1px solid black',
      borderRadius: '10px',
      padding: '40px',
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
    header: {
      marginBottom: '70px',
    },
    inputFieldFont: {
      fontSize: '30px',
      textAlign: 'center',
    },
  }),
};


export default WalkthroughConfig;