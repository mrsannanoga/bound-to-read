// Importing required libraries and components
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Research from "./Pages/Research";
import List from "./Pages/List";
import Footer from "./Components/Footer";
import GlobalStyle from "./Components/GlobalStyle";
import { BooksProvider } from "./Components/BooksContext";

// styled components
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex-grow: 1;
`;
  
// rendering the app
function App() {
  return (
    <AppContainer>
      <Router>
        <BooksProvider>
          <>
            <GlobalStyle />
            <Nav />
            <Content>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/list" element={<List />} />
                <Route path="/research" element={<Research />} />
              </Routes>
            </Content>
            <Footer />
          </>
        </BooksProvider>
      </Router>
    </AppContainer>
  );
}

export default App;
