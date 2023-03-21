// CarouselStyles.js
import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%;
  max-width: 800px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-right: 1px solid rgba(255, 255, 255, 0.2); // Add a slight border
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // Add a subtle box shadow
  backdrop-filter: blur(3px); // Apply a blur effect to the background

  .slick-list {
    overflow: hidden;
  }

  .carousel-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    
    
    height: 300px;

    color: #fff;
  }

  .carousel-content {
    text-align: center;
    p {
      color: #e8e3e3;
      text-shadow: 0px 1px 5px #000000;
      margin-top: 10px;
      padding: 20px 20px;
      font-size: 30px;
    }
    button {
      background: #8e5c4c;
      color: #fff;
      border: none;
      border-radius: 10px;
      font-size: 20px;
      padding: 10px 20px;
      margin-top: 60px;
      cursor: pointer;
      transition: background 0.3s;

      &:hover {
        background: #693e2f;
      }
    }
  }
  .slick-arrow {
    width: 80px; // Adjust the width of the arrow buttons
    height: 80px; // Adjust the height of the arrow buttons
    z-index: 1; // Ensure the arrows are on top of the slides
    color: #424242; // Set the color of the arrow icons

    &:before {
      font-size: 60px; // Adjust the font-size of the arrow icons
      color: #424242; // Set the color of the arrow icons
    }
  }

  .slick-prev {
    left: -80px; // Adjust the left arrow position
  }

  .slick-next {
    right: -80px; // Adjust the right arrow position
  }
`;
