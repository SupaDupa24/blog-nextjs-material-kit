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
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
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
                      <h1 className={classes.title}>Gallery</h1>
                      <h3 className={classes.subtitle}>
                        Photos
                      </h3>
                    </div>
                  </GridItem>
                </GridContainer>
        </div>
      </Parallax>  
        
      

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
        {/* <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4} className={classes.navWrapper}> */}
          <div className={classes.img}>
            <img  alt="..."
                  src="/img/nala/recent3.jpg"
                  className={navImageClasses}
                  width="100%" />
                  <br/>
                  <br/>
            <img  alt="..."
                  src="/img/nala/recent4.jpg"
                  className={navImageClasses}
                  width="100%" />
                  <br/>
                  <br/>
          {/* </GridItem>
          <GridItem xs={12} sm={12} md={4} className={classes.navWrapper}> */}
            <img  alt="..."
                  src="/img/nala/recent5.jpg"
                  className={navImageClasses}
                  width="100%" />
                  <br/>
                  <br/>
            <img  alt="..."
                  src="/img/nala/recent6.jpg"
                  className={navImageClasses}
                  width="100%" />
                  <br/>
                  <br/>
            <img  alt="..."
                  src="/img/nala/quincy2/dark1.jpg"
                  className={navImageClasses}
                  width="100%" />
                  <br/>
                  <br/>
            <img  alt="..."
                  src="/img/nala/quincy2/dark2.jpg"
                  className={navImageClasses}
                  width="100%" />
                  <br/>
                  <br/>
            <img  alt="..."
                  src="/img/nala/quincy2/dark3.jpg"
                  className={navImageClasses}
                  width="100%" />
                  <br/>
                  <br/>
            <img  alt="..."
                  src="/img/nala/quincy2/dark4.jpg"
                  className={navImageClasses}
                  width="100%" />
          </div>
          {/* </GridItem>
        </GridContainer> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
