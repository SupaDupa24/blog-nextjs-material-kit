import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import styles from "styles/jss/nextjs-material-kit/pages/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img
                    src="/img/nala/quincy1/nba.silver.4.jpg"
                    alt="First slide"
                    className="slick-image"
                  />
                  {/* <div className="slick-caption">
                    <h4>
                      Dallas Magazine
                    </h4>
                  </div> */}
                </div>
                <div>
                  <img
                    src="/img/nala/quincy1/quincy1.JPG"
                    alt="Second slide"
                    className="slick-image"
                  />
                 
                </div>
                <div>
                  <img
                    src="/img/nala/quincy1/quincy2.JPG"
                    alt="Third slide"
                    className="slick-image"
                  />
                  </div>
                  <div>
                    <img
                      src="/img/nala/quincy1/quincy3.JPG"
                      alt="Fourth slide"
                      className="slick-image"
                    />
                 
                  </div>
                <div>
                  <img
                    src="/img/nala/quincy1/quincy4.jpg"
                    alt="Fifth slide"
                    className="slick-image"
                  />
                 
                </div>
                  {/* <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Yellowstone National Park, United States
                    </h4>
                  </div> */}
                
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
