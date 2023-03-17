import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { scaleUp } from "../Animations";
import { motion } from "framer-motion";

import Quote from "../Components/RandomQuote/Quote";





const QuoteWrapper = styled(Container)`
  position: relative;
  z-index: 1;
`;

const Home = () => {
  return (
    <>
      <QuoteWrapper>
        <motion.div
          variants={scaleUp}
          initial="hidden"
          animate="show"
        >
          <Quote />
        </motion.div>
      </QuoteWrapper>
    </>
  );
};


export default Home;


