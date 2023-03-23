// This is the home page of the app

// Importing required libraries and components
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import { pageAnimations } from "../Animations";
import Quote from "../Components/RandomQuote/Quote";
import Carousel from "../Components/Carousel/slickCarousel"; // Ensure correct import path
// styled components
const Box = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  min-height:75vh;
  
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 2rem;
  max-width: 1400px;
`;

const QuoteWrapper = styled.div`
  max-width: 600px;
  width: 100%;
  
`;

const Home = () => {
  // Carousel slides data
  const slides = [
    {
      text: "Get an exact match and search by title, author or subject",
      buttonText: "Search",
      link: "/Search",
    },
    {
      text: "Search Open Library by subject, to check which books are available to borrow",
      buttonText: "Open Library",
      link: "/Research",
    },
  ];

  return (
    <Box>
      <ContentWrapper>
        <QuoteWrapper>
          <motion.div initial="hidden" animate="show" variants={pageAnimations}>
            <Quote />
          </motion.div>
        </QuoteWrapper>
        {/* Add Carousel component */}
        <motion.div initial="hidden" animate="show" variants={pageAnimations}>
          <Carousel slides={slides} />
        </motion.div>
      </ContentWrapper>
    </Box>
  );
};

export default Home;

