import { container } from "styles/jss/nextjs-material-kit.js";

const componentsStyle = {
  container,
  brand: {
    color: "#D10000",
    textAlign: "left",
  },

  bigTitle: {
    fontSize: '6rem',
    textShadow: '3px 3px 3px black',
    fontFamily: 'Exocet, exocet-heavy, exocet, Six Caps',
    textAlign: 'center'
  },

  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative",
    color: "whiteSmoke",
    fontFamily: 'Six Caps',
    textShadow: '3px 3px 3px black'
  },

  otherTitle: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative",
    color: " #D10000",
    fontFamily: 'Six Caps',
    textShadow: '3px 3px 3px #CECECE'
  },


  img:{
    padding: "2em"
  },
  navImageClasses:{
    padding: "2em"
  },
  subtitle: {
    fontSize: "3em",
    maxWidth: "510px",
    margin: "10px 0 0",
    color: "whiteSmoke",
    fontFamily: 'Six Caps',
    textShadow: '3px 3px 3px black'
  },
  h1:{
    color: "#D10000",
    fontFamily: 'Six Caps'
  },
  main: {
    background: "#000000",
    position: "relative",
    zIndex: "3",
    color: "#D10000",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    "@media (max-width: 830px)": {
      marginLeft: "10px",
      marginRight: "10px",
    },
  },
  link: {
    textDecoration: "none",
  },
  textCenter: {
    textAlign: "center",
  },
};

export default componentsStyle;
