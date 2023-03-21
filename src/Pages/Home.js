import React from "react";
import styled from "styled-components";
// import { Container, Row, Col } from "react-bootstrap";
import { scaleUp } from "../Animations";
import { motion } from "framer-motion";

import Quote from "../Components/RandomQuote/Quote";
import { Container } from "react-bootstrap";
import CarouselBanner from "../Components/Carousel/Carousel";




const Box = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Home = () => {
  return (
 <Box>
  
    <div>
   
        <CarouselBanner/>
     
      </div>
      <div>
        <motion.div
          variants={scaleUp}
          initial="hidden"
          animate="show"
        >
          <Quote />
        </motion.div>
     
      </div>
      
</Box>
       



    
  );
};


export default Home;
