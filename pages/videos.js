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
                <h1 className={classes.title}>Videos</h1>
                <h3 className={classes.subtitle}>
                  
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <h1>Nala Bonae - No Boys Allowed</h1>
            <iframe className={classes.title} width="100%" height="360" src="https://www.youtube.com/embed/_1izTShmbb4" title="YouTube video player" frameborder="2px" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <br />
          <h1>Nala Bonae on “The Wendy Williams Show: Dawn Richard</h1>
            <iframe className={classes.title} width="100%" height="352" src="https://www.youtube.com/embed/LcGtPmLL76k" title="YouTube video player" frameborder="2px" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <br />
          <h1>BTS Nala Bonae Juneteenth Performance</h1>
            <iframe className={classes.title} width="100%" height="360" src="https://www.youtube.com/embed/PxThlzrS1VI" title="YouTube video player" frameborder="2px" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
     
      
     
      <Footer />
    </div>
  );
}
