import React from 'react';
import styled from 'styled-components';

const Footer = styled.div`
  background-color: rgb(2, 2, 72);
`;

const Container = styled.div`
  padding: 2rem;
  font-size: 2.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
`;

const Img = styled.img`
  width: 2rem;
  margin-right: 0.5rem;
`;

const PageFooter = () => {
  return (
    <Footer className='text-center text-white'>
      <Container className='p-4'>
        <div className='text-center'>
          &copy; 2023 Made with <Img src={require("../assets/img/heart.svg").default} alt="Heart" /> by Anna, Aleksandra and Adrian
        </div>
      </Container>
    </Footer>
  );
};

export default PageFooter;