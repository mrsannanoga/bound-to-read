import data from "./data.json";
import BannerCard from "./Card";
import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { motion } from "framer-motion";
import "./Carousel.css";

import { Container } from "react-bootstrap";

const CarouselBanner = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
   

    <Container className="" id="projects">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 className="sectionHeading">Are you looking for a good book?</h2>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">

                {data.map((info) => (
                  <BannerCard
                    key={info.title}
                    title={info.title}
                    buttonName={info.buttonName}
                  />))}


              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </Container>
  
  )
}

export default CarouselBanner;