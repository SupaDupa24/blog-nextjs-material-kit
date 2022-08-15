import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page


import styles from "styles/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="NALA BONAE"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "danger",
        }}
        {...rest}
      />
      <Parallax image="/img/nala/quincy2/banner.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.bigTitle}>NALA BONAE</h1>
                <h1 className={classes.title}>Music</h1>
                <h3 className={classes.subtitle}>
                  New Releases....
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <iframe src="https://open.spotify.com/embed/track/14h5ljJ9OqVh4Vpl9kFWTV?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
          <br />
          <iframe src="https://open.spotify.com/embed/track/10pQyQqkMQ1c6Qr4G3ucmR?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
          <br />
          <iframe  src="https://open.spotify.com/embed/track/1teXmB63UM12MHIo7nDyqR?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
          <br />
          {/* <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" width="100%" height="380" frameBorder="0" allowfullscreen="true"  src="https://embed.music.apple.com/us/album/stupid-in-love-single/1635284815"></iframe> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
