import React from "react";
import { Container } from "react-bootstrap";
import background from "../assets/img/yellow-background.jpg";

const Home = () => {
  return (
    <Container style={{ 
        backgroundImage: `url(${background})`, 
        backgroundSize: "cover", 
        backgroundPosition: "top center",
        
    }}>
      <h1>Home</h1>
      <Spinner />
    </Container>
  );
};

export default Home;

