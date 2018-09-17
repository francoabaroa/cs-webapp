const Old_WalkthroughConfig = {
  exchangesList: {
    0: 'Binance',
    1: 'Bitfinex',
    2: 'Bittrex',
    3: 'Coinbase',
    4: 'Cryptopia',
    5: 'HitBTC',
    6: 'Huobi',
    7: 'Kucoin',
    8: 'Poloniex',
    // 9: 'Okex',
  },
  scenesConfig: {
    0: {
      'headline': 'Hi there!',
    },
    2: {
      'arguments': ['name'],
      'headline': 'What\'s your first name?',
      'method': 'renderTextInput',
    },
    3: {
      'headline': 'Nice to meet you, ',
    },
    6: {
      'arguments': ['phoneTradeSetup'],
      'headline': 'When it comes to crypto, are you:',
      'method': 'renderButtons',
      'strings': ['Informed', 'Curious', 'Skeptical', 'Rekt'],
    },
    3: {
      'headline': 'NEED CUSTOMIZED RESPONSE HERE DEPENDING ON WHAT THEY PICKED',
    },
    5: {
      'arguments': [],
      'headline': 'What exchanges do you use to trade?',
      'method': 'renderCheckboxList',
    },
    4: {
      'arguments': [],
      'headline': 'Have you traded crypto in the past?',
      'method': 'renderYesNo',
    },
    4: {
      'arguments': [],
      'headline': 'Do you use TA to trade?',
      'method': 'renderYesNo',
    },
    11: {
      'arguments': ['email'],
      'headline': 'What\'s your email?',
      'method': 'renderTextInput',
    },
    6: {
      'arguments': ['phoneTradeSetup'],
      'headline': 'When it comes to incorporating crypto in your life, are you:',
      'method': 'renderButtons',
      'strings': ['Dedicated', 'On a kick', 'Ready to learn'],
    },
    6: {
      'arguments': ['phoneTradeSetup'],
      'headline': 'When it comes to spare time for crypto, are you:',
      'method': 'renderButtons',
      'strings': ['Completely booked', 'Occasionally available', 'Pretty free'],
    },
    6: {
      'arguments': ['currenciesToExplore'],
      'headline': 'What currencies should we explore?',
      'method': 'renderButtons',
      'strings': ['Top currencies', 'Well known', 'All of them'],
    },
    6: {
      'arguments': ['phoneTradeSetup'],
      'headline': 'When it comes to trading, do you prefer to:',
      'method': 'renderButtons',
      'strings': ['Trade quick', 'Hold for a bit', 'Sit back and relax'],
    },
    6: {
      'arguments': ['phoneTradeSetup'],
      'headline': 'Are you setup to make trades from your phone?',
      'method': 'renderButtons',
      'strings': ['Yes', 'Partially', 'Not Yet'],
    },
    5: {
      'arguments': [],
      'headline': 'What exchange accounts do you currently have?',
      'method': 'renderCheckboxList',
    },
    6: {
      'arguments': ['phoneTradeSetup'],
      'headline': 'Are you setup to make trades from your phone?',
      'method': 'renderButtons',
      'strings': ['Yes', 'Partially', 'Not Yet'],
    },
    7: {
      'arguments': ['moneyWillingToInvest'],
      'headline': 'Roughly how much money do you currently want to trade with in cryptocurrencies?',
      'method': 'renderButtons',
      'strings': ['Less than $500', '$501 - $5,000', '$5,001 - $25,000', '$25,000+'],
    },
    8: {
      'arguments': ['spareTimeAvailability'],
      'headline': 'If you begin to receive frequent alerts, what is the most frequent you would be able to log in to your exchanges to make trades?',
      'method': 'renderButtons',
      'strings': ['Multiple times a day', 'Once a day', 'Few times a week', 'Few times a month'],
    },
    9: {
      'arguments': ['currenciesToExplore'],
      'headline': 'When it comes to trading crypto, do you prefer to focus on a specific set of currencies?',
      'method': 'renderButtons',
      'strings': ['Safest', 'Moderate', 'High-risk, high-reward', 'Any and all'],
      'subStrings': ['Top 5', 'Top 25', 'Top 100', 'Top 250'],
    },
    10: {
      'arguments': ['technicalAnalysisUse'],
      'headline': 'How much do you currently use technical analysis in your trading? (ex. RSI, MACD, etc.)',
      'method': 'renderButtons',
      'strings': ['None', 'Some', 'Heavily'],

    },
    11: {
      'arguments': ['phone'],
      'headline': 'What\'s your phone number?',
      'method': 'renderTextInput',
    },
    12: {
      'arguments': [],
      'headline': 'How did you hear about us?',
      'method': 'renderRadioButtons',
    },
    13: {
      'headline': 'Loading your strategy...',
      'method': '',
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
    },
    group: {
      margin: `${theme.spacing.unit}px 0`,
    },
    mediumButton: {
      margin: theme.spacing.unit,
      height: '200px',
      width: '200px',
      borderRadius: '50%',
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
    demo: {
      marginTop: '15px',
    }
  }),
};


export default Old_WalkthroughConfig;