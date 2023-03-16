import React from 'react';
import styled from 'styled-components';



const Footer = styled.div`

background-color: rgb(2, 2, 72)
`
const Container = styled.div`
padding: 2rem;
font-size: 2rem;
display: flex;
justify-content: space-around;
`


const PageFooter = () => {
  return (
    <Footer className='text-center text-white'>
      <Container className='p-4'>
        <div className='text-center'>
        © 2023 Copyright: All rights reserved.
        </div>
        </Container>
    </Footer>
  );
}

export default PageFooter;