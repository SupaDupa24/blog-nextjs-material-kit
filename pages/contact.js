import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "styles/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
// import ProductSection from "pages-sections/LandingPage-Sections/ProductSection.js";
// import TeamSection from "pages-sections/LandingPage-Sections/TeamSection.js";
import WorkSection from "pages-sections/LandingPage-Sections/WorkSection.js";
import SectionCarousel from "pages-sections/Components-Sections/SectionCarousel.js";



const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="NALA BONAE"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "danger",
        }}
        {...rest}
      />
      <Parallax filter responsive image="/img/nala/quincy2/banner.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              {/* <div className={classes.bigTainer}>
                <h1 className={classes.bigTitle}>NALA BONAE</h1>
              </div> */}
                <h1 className={classes.title}>Contact</h1>
              <h4 className={classes.subtitle}>
                This is my page where I do, show or talk about what I want to talk about. Stay tuned for updates weekly!
              </h4>
              <br />
              <Button
                color="charcoalgrey"
                size="lg"
                href="/videos"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch videos
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
        <br />
        <br />
        <br />
          {/* <ProductSection />
          <TeamSection /> 
          <WorkSection /> */}
          {/* <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}> */}
            <div className={classes.button}>
              <Button href="https://us8.list-manage.com/contact-form?u=4eaa505092469f1d67a0b3846&form_id=59f4601bdf90e1232237b5ebba89125f" className="contact-button" color="danger" size="lg">
                 Click Here To Contact
              </Button>
            </div>
            {/* </GridItem>

          </GridContainer> */}
          <SectionCarousel />
        </div>
      </div>
      <Footer />
    </div>
  );
}
