import { container, title } from "styles/jss/nextjs-material-kit.js";

const landingPageStyle = {
  container: {
    zIndex: "12",
    color: "#D10000",
    ...container,
  },

  bigTainer: {
    display: "flex",
    justifyContent: "center"
  },

  bigTitle: {
    fontSize: '7rem',
    textShadow: '3px 3px 3px #CECECE',
    fontFamily: 'Exocet, exocet, sans-serif',
    textAlign: 'center',
    
  },


  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "whiteSmoke",
    textDecoration: "none",
    fontFamily: "Six Caps",
    animation: "glow 1s ease-in-out infinite alternate"
  },
  button: {
    display: "flex",
    justifyContent: "center",
    textDecoration: "none",
    color:"white",
    
  },

  // @keyframes title {
  //   from {
  //     text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
  //   }
  //   to {
  //     text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
  //   }
  // }

  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    color: "whiteSmoke",
    margin: "10px auto 0",
  },
  main: {
    background: "black",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
};

export default landingPageStyle;
