import React from 'react';
import styled from 'styled-components';



const Footer = styled.div`

background-color: #FE7F2D
`
const Container = styled.div`
padding: 1rem;
font-size: 2rem;
display: flex;
justify-content: space-around;
`


export default function App() {
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