import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
//import Parallax from "components/Parallax/Parallax.js";
import SectionCarousel from "../pages-sections/Components-Sections/SectionCarousel";

import styles from "styles/jss/nextjs-material-kit/pages/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRounded,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="NALA BONAE"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "danger",
        }}
        {...rest}
      />
     {/* <Parallax small filter image="/img/leafwall2.jpg" /> */}
     <SectionCarousel />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img
                      src="/img/nala/quincy1/red.photo.png"
                      alt="..."
                      className={imageClasses}
                    />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Nala Bonae</h3>
                    <h6>ARTIST</h6>
                    <Button href="https://twitter.com/BonaeNala" justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button href="https://www.instagram.com/nalabonae/" justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button href="https://www.facebook.com/Mutt.Baby" justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
              Nala Bonae is A Singer/Songwriter/Producer/Dancer/<br />
              Choreographer/Actor located in Dallas,Tx with the combination of sounds such as, Rock,Pop,Funk,Soul,Dance .Nala Bonae has Opened up for Multiple Artist/Shows ,just to name a few…Chris Brown,Monica,Bryson Tiller, Wendy Williams Show,Kim Burrell,Dawn Richard,Kizz Daniel,B2K Millennium Tour,American Crime “ABC”,etc. Nala Bonae has been performing all over the world since the age of Four. With her Powerful voice and her Powerhouse Dance moves,her creativity/Fashion/Visuals, she’s definitely the Definition of a Rockstar..{" "}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="danger"
                  tabs={[
                    {
                      tabButton: "Studio",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src="/img/nala/noboys.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="/img/nala/nala1.jpg"
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src="/img/nala/recent1.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="/img/nala/quincy/bonae1.jpg"
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Work",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src="/img/nala/perform.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="/img/nala/nala10.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="/img/nala/stage.jpg"
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src="/img/nala/juneteenthsolo.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="/img/nala/juneteenthgroup.jpg"
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Favorite",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          {/* <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src="/img/nala/recent6.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="/img/nala/recent5.jpg"
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src="/img/nala/recent4.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="/img/nala/recent3.jpg"
                              className={navImageClasses}
                            />
                            
                            
                          </GridItem> */}
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src="/img/nala/quincy2/recent2.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="/img/nala/quincy2/fav1.jpg"
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src="/img/nala/quincy2/fav2.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="/img/nala/quincy2/fav3.jpg"
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
