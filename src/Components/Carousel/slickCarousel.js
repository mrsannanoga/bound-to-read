// slickCarousel.js
import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { CarouselContainer } from "./CarouselStyles";

const Carousel = ({ slides }) => {
    // Carousel settings
    const settings = {
        dots: true,
        infinite: true,
        useCSS: true,
        useTransform: true,
        swipeToSlide: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        fade: true,
        
      };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <div className="carousel-content">
              <p>{slide.text}</p>
              <Link to={slide.link}>
                <button>{slide.buttonText}</button>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default Carousel;
