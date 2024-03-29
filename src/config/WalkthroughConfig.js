const WalkthroughConfig = {
  exchangesList: {
    0: "Coinbase",
    1: "Binance",
    2: "OKex",
    3: "Kraken",
    4: "Huobi",
    5: "Poloniex"
  },
  scenesConfig: {
    0: {
      headline: "Hi there!",
      subHeadline:
        "We'd like to ask you a few questions so we can generate the perfect alerts for your trading style.",
      stepLevel: 0
    },
    1: {
      arguments: ["name"],
      headline: "What's your first name?",
      method: "renderTextInput",
      stepLevel: 0
    },
    2: {
      headline: "Nice to meet you, ",
      icons: ["wink3"],
      stepLevel: 0
    },
    3: {
      headline: "Nice to meet you, ",
      icons: ["wink2"],
      stepLevel: 0
    },
    4: {
      arguments: ["cryptoCurrentStatus"],
      headline: "When it comes to crypto, are you:",
      method: "renderButtons",
      icons: ["informed", "curious", "skeptical", "rekt"],
      strings: ["Informed", "Curious", "Skeptical", "Rekt"],
      stepLevel: 0
    },
    5: {
      headline: "NEED CUSTOMIZED RESPONSE HERE DEPENDING ON WHAT THEY PICKED",
      customizedResponses: [
        "An expert, huh? We'll see if we can show you something new.",
        "We'll reward that curiosity! But first, let's get to know you.",
        "Excellent, we built our research database with skeptics in mind (and in our office).",
        "Oops, looks like you weren't using an indicator. Let's fix that."
      ],
      stepLevel: 0
    },
    6: {
      headline: "Don't worry, it'll only take a few minutes.",
      stepLevel: 0
    },
    7: {
      stepLevel: 0,
      stepperLabels: ["BASICS", "LIFESTYLE", "VALUES", "STRATEGY"]
    },
    8: {
      arguments: ["handlePastCryptoTrader"],
      headline: "Have you traded crypto in the past?",
      method: "renderYesNo",
      stepLevel: 0
    },
    9: {
      arguments: ["handleUseOfTA"],
      headline: "Do you use TA to trade?",
      method: "renderYesNo",
      stepLevel: 0
    },
    10: {
      arguments: [],
      multipleSelections: true,
      headline: "What exchanges do you use to trade?",
      subHeadline: "Select all that apply!",
      icons: ["coinbase", "binance", "okex", "kraken", "huobi", "poloniex"],
      strings: ["Coinbase", "Binance", "OKex", "Kraken", "Huobi", "Poloniex"],
      method: "renderButtons",
      stepLevel: 0
    },
    11: {
      arguments: ["email"],
      headline: "What's your email?",
      subHeadline: "So we can save your answers.",
      method: "renderTextInput",
      stepLevel: 0
    },
    12: {
      stepLevel: 1,
      stepperLabels: ["BASICS", "LIFESTYLE", "VALUES", "STRATEGY"]
    },
    13: {
      arguments: ["tradingAmount"],
      headline:
        "If you are comfortable sharing, how much are you trading with today?",
      method: "renderButtons",
      strings: [
        "Less than $1000",
        "$1000 - $5,000",
        "$5,001 - $20,000",
        "$20,000+",
        "Prefer not to say"
      ],
      stepLevel: 1
    },
    14: {
      arguments: ["spareTimeAvailability"],
      hasCustomPadding: true,
      customPaddings: [40, 40, 40],
      headline: "Is crypto trading something you do:",
      method: "renderButtons",
      icons: ["completelyBooked", "occasionallyAvailable", "prettyFree"],
      strings: ["Full", "Part", "Once in"],
      subStrings: ["time", "time", "a while"],
      stepLevel: 1
    },
    15: {
      stepLevel: 2,
      stepperLabels: ["BASICS", "LIFESTYLE", "VALUES", "STRATEGY"]
    },
    16: {
      arguments: ["currenciesToExplore"],
      hasCustomPadding: true,
      customPaddings: [60, 40, 10],
      headline: "Which currencies are you interested in trading:",
      method: "renderButtons",
      icons: ["topCurrencies", "wellKnown", "allOfThem"],
      strings: ["Top Coins Only", "Top 100 Coins", "Top 250 Coins"],
      stepLevel: 2
    },
    17: {
      arguments: ["cryptoTradingHabit"],
      headline: "When it comes to trading, do you prefer to:",
      method: "renderButtons",
      icons: ["informed", "curious", "skeptical", "rekt"],
      strings: ["Trade quick", "Hold for a bit", "Sit back and relax"],
      stepLevel: 2
    },
    18: {
      arguments: ["cryptoRiskProfile"],
      hasCustomPadding: true,
      customPaddings: [60, 40, 40],
      headline: "When you trade, are you:",
      method: "renderButtons",
      icons: ["noRisk", "midRisk", "highRisk"],
      strings: ["Risk averse", "The middle", "High risk,"],
      subStrings: [null, null, "high reward"],
      stepLevel: 2
    },
    19: {
      arguments: ["referralSource"],
      headline:
        "Lastly, we're happy to have met you. How did you hear about us?",
      method: "renderButtons",
      icons: [
        "friend",
        "twitter",
        "productHunt",
        "google",
        "facebook",
        "instagram"
      ],
      strings: [
        "Friend",
        "Twitter",
        "Product Hunt",
        "Google",
        "Facebook",
        "Instagram"
      ],
      stepLevel: 2
    },
    20: {
      stepLevel: 3,
      stepperLabels: ["BASICS", "LIFESTYLE", "VALUES", "STRATEGY"]
    },
    21: {
      headline: "STRATEGY",
      method: "",
      stepLevel: 3
    }
  },
  styles: theme => ({
    button: {
      margin: theme.spacing.unit
    },
    nextButton: {
      margin: theme.spacing.unit,
      fontSize: "1.4em",
      fontFamily: "Roboto, sans-serif",
      backgroundColor: "#fff6ed",
      border: "3px solid #000000",
      color: "black",
      "&:hover": {
        margin: theme.spacing.unit,
        fontSize: "1.4em",
        fontFamily: "Roboto, sans-serif",
        backgroundColor: "#fff6ed",
        border: "3px solid #000000",
        color: "black"
      }
    },
    bigButton: {
      margin: theme.spacing.unit,
      minHeight: "260px",
      minWidth: "220px",
      border: "3px solid #000000",
      backgroundColor: "#FFFFFF",
      borderRadius: "4px",
      color: "black",
      "&:hover": {
        margin: theme.spacing.unit,
        minHeight: "260px",
        minWidth: "220px",
        border: "3px solid #000000",
        backgroundColor: "#FFFFFF",
        borderRadius: "4px",
        color: "black"
      }
    },
    group: {
      margin: `${theme.spacing.unit}px 0`
    },
    mediumButtonRound: {
      margin: theme.spacing.unit,
      minHeight: "200px",
      minWidth: "200px",
      borderRadius: "50%",
      backgroundColor: "white",
      border: "3px solid #000000",
      color: "black"
    },
    mediumButton: {
      margin: theme.spacing.unit,
      minHeight: "150px",
      minWidth: "200px",
      borderRadius: "4px",
      backgroundColor: "white",
      border: "2px solid black",
      fontFamily: "Roboto, sans-serif",
      color: "black",
      "&:hover": {
        margin: theme.spacing.unit,
        minHeight: "150px",
        minWidth: "200px",
        borderRadius: "4px",
        backgroundColor: "white",
        border: "2px solid black",
        fontFamily: "Roboto, sans-serif",
        color: "black"
      }
    },
    smallButton: {
      margin: theme.spacing.unit,
      minHeight: "98px",
      minWidth: "210px",
      borderRadius: "4px",
      backgroundColor: "white",
      border: "2px solid #000000",
      fontFamily: "Roboto, sans-serif",
      color: "black",
      "&:hover": {
        margin: theme.spacing.unit,
        minHeight: "98px",
        minWidth: "210px",
        borderRadius: "4px",
        backgroundColor: "white",
        border: "2px solid #000000",
        fontFamily: "Roboto, sans-serif",
        color: "black"
      }
    },
    gridRoot: {
      flexGrow: 1
    },
    paper: {
      height: 340,
      width: 300,
      textAlign: "center"
    },
    control: {
      padding: theme.spacing.unit * 2
    },
    list: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    },
    slider: {
      width: "300px"
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      minWidth: 400,
      height: 54,
      border: "3px solid black",
      borderRadius: "6px",
      padding: "5px",
      backgroundColor: "#FFFFFF",
      "&:focus": {
        outline: "none !important"
      }
    },
    demo2: {
      padding: "30px",
      paddingTop: "0px"
    },
    demo3: {
      // [theme.breakpoints.up("lg")]: {
      //   width: 1170
      // },
    },
    progressLine: {
      maxWidth: "200px"
    },
    stepper: {
      maxWidth: "500px",
      backgroundColor: "#fff6ed",
      margin: "0 auto"
    },
    buttonLabel: {
      fontSize: "25px"
    },
    buttonLabelPadding: {
      fontSize: "30px",
      paddingTop: "40px",
      fontFamily: "Roboto, sans-serif",
      fontStyle: "normal"
    },
    buttonLabelPaddingNoTop: {
      fontSize: "30px",
      fontFamily: "Roboto, sans-serif",
      fontStyle: "normal"
    },
    header: {
      marginBottom: "70px"
    },
    inputFieldFont: {
      fontSize: "26px",
      fontFamily: "proxima-nova, sans-serif",
      fontStyle: "normal",
      textAlign: "center"
    },
    surveyHeadline: {
      fontSize: "2.0em",
      fontWeight: 600
    },
    surveySubHeadline: {
      paddingTop: "10px",
      fontSize: "0.75em",
      fontFamily: "proxima-nova, sans-serif",
      fontWeight: 100
    },
    root: {
      "&:hover": {
        backgroundColor: "#FFFFFF",
        border: "3px solid #000000",
        borderRadius: "4px",
        color: "black"
      }
    },
    back: {
      position: "fixed",
      bottom: 28,
      left: 28,
      fontSize: "1.5em"
    },
    back2: {
      position: "absolute",
      bottom: 0,
      left: 28,
      fontSize: "1.5em"
    },
    backNoFixed: {
      display: "none",
      bottom: 100,
      left: 100,
      fontSize: "1.5em"
    },
    demo: {
      paddingBottom: "25px"
    },
    checkmark: {
      fontSize: "2.0em",
      position: "absolute",
      top: "4px",
      right: "8px",
      padding: "4px",
      border: "1px solid white",
      backgroundColor: "#4f8463",
      color: "white",
      borderRadius: "50%",
      width: "20px",
      lineHeight: "20px",
      textAlign: "center"
    },
    enterButton: {
      top: "-24px",
      left: "178px",
      color: "white",
      width: "1px",
      padding: "4px",
      position: "relative",
      fontSize: "0.83em",
      textAlign: "center",
      lineHeight: "1px",
      borderRadius: "50%",
      backgroundColor: "#4f8463"
    },
    enterButton2: {
      display: "inline-block",
      padding: 0,
      fontSize: "12px",
      fontWeight: "lighter !important",
      lineHeight: "32px",
      color: "#fff !important",
      textAlign: "center",
      whiteSpace: "nowrap",
      verticalAlign: "baseline",
      backgroundColor: "grey",
      borderRadius: "32px",
      position: "relative",
      top: "-32px",
      left: "178px",
      height: "32px",
      width: "32px"
    },
    enterButton3: {
      display: "inline-block",
      padding: 0,
      fontSize: "12px",
      fontWeight: "lighter !important",
      lineHeight: "32px",
      color: "#fff !important",
      textAlign: "center",
      whiteSpace: "nowrap",
      verticalAlign: "baseline",
      backgroundColor: "#4f8463",
      borderRadius: "32px",
      position: "relative",
      top: "-32px",
      left: "178px",
      height: "32px",
      width: "32px"
    },
    enterButton4: {
      display: "inline-block",
      padding: 0,
      fontSize: "12px",
      fontWeight: "lighter !important",
      lineHeight: "32px",
      color: "#fff !important",
      textAlign: "center",
      whiteSpace: "nowrap",
      verticalAlign: "baseline",
      backgroundColor: "#4f8463",
      borderRadius: "32px",
      position: "relative",
      top: "-28px",
      left: "127px",
      height: "32px",
      width: "32px"
    },
    displayNone: {
      display: "none"
    },
    greenOutline: {
      border: "2px solid #4f8463"
    },
    divInput: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      minWidth: 400,
      height: 54,
      border: "3px solid black",
      borderRadius: "6px",
      padding: "5px",
      "&:focus": {
        outline: "none !important"
      },
      paddingTop: "25px",
      fontSize: "26px",
      fontFamily: "proxima-nova, sans-serif",
      fontStyle: "normal",
      mozAppearance: "textfield",
      webkitAppearance: "textfield",
      backgroundColor: "#FFFFFF",
      font: "-webkit-small-control",
      marginTop: "5px"
    },
    divInput1: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      minWidth: 300,
      height: 54,
      border: "3px solid black",
      borderRadius: "6px",
      padding: "5px",
      "&:focus": {
        outline: "none !important"
      },
      paddingTop: "25px",
      fontSize: "22px",
      fontFamily: "proxima-nova, sans-serif",
      fontStyle: "normal",
      mozAppearance: "textfield",
      webkitAppearance: "textfield",
      backgroundColor: "#FFFFFF",
      font: "-webkit-small-control",
      marginTop: "5px"
    },
    divInputBox: {
      "&:focus": {
        outline: "none !important"
      }
    },
    completed: {
      color: "#4f8463 !important"
    },
    purpleFont: {
      color: "#2d59b0",
      fontWeight: 600
    },
    headlineTopPadding: {
      paddingTop: "130px"
    }
  })
};

export default WalkthroughConfig;
