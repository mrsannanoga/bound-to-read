import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import background from "../assets/img/yellow-background.jpg";
import Quote from "../Components/RandomQuote/Quote";

const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

const BackgroundImage = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100%;
`;

const QuoteWrapper = styled(Container)`
  position: relative;
  z-index: 1;
`;

const Home = () => {
  return (
    <>
      <BackgroundWrapper>
        <BackgroundImage />
      </BackgroundWrapper>
      <QuoteWrapper>
        <Quote />
      </QuoteWrapper>
    </>
  );
};

export default Home;
