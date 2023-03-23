// This is the footer component

// Importing required libraries and components
import React from "react";
import styled from "styled-components";
import heart from "../assets/img/heart.svg";
const Footer = styled.div`
  background-color: #424242;
`;
// styled components
const Container = styled.div`
  padding: 1rem;
  font-size: 2.2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
`;

const Img = styled.img`
  vertical-align: bottom;
  width: 3rem;
  margin-right: 1rem;
`;

const PageFooter = () => {
  return (
    <Footer className="text-center text-white">
      <Container className="p-4">
        <div className="text-center">
          &copy; 2023 Made with <Img src={heart} alt="heart" /> by Anna,
          Aleksandra and Adrian
        </div>
      </Container>
    </Footer>
  );
};

export default PageFooter;
