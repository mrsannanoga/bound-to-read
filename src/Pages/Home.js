import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

import Quote from "../Components/RandomQuote/Quote";





const QuoteWrapper = styled(Container)`
  position: relative;
  z-index: 1;
`;

const Home = () => {
  return (
    <>
      
      <QuoteWrapper>
        
        <Quote />
      </QuoteWrapper>
    </>
  );
};

export default Home;


