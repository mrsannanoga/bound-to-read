// CarouselStyles.js
import styled from "styled-components";

export const CarouselContainer = styled.div`

  width: 100%;
  max-width: 800px;

  .slick-list {
    overflow: hidden;
  }
  

  

  .carousel-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.3);
    height: 300px;
    
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.3); // Add a slight border
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // Add a subtle box shadow
    backdrop-filter: blur(3px); // Apply a blur effect to the background
  }

  .carousel-content {
    
    text-align: center;
    p {
        color: #d8d6d6;
        text-shadow: 0 0 3px #000;
        margin-top: 10px;
        padding: 20px 20px;
        font-size: 30px;
    }
    button {
    background: #8E5C4C;
    color: #fff;
    border: none;
    border-radius: 10px;
    font-size: 20px;
    padding: 10px 20px;
    margin-top: 60px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background: #693E2F;
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
