import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";

<<<<<<< HEAD
import Nav from './Components/Nav';
import Home from './Pages/Home';
import Research from './Pages/Research';
import Search from './Pages/Search';
import List from './Pages/List';
import Footer from './Components/Footer';
import GlobalStyle from './Components/GlobalStyle';
=======
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import List from "./Pages/List";
import Footer from "./Components/Footer";
import GlobalStyle from "./Components/GlobalStyle";
>>>>>>> fe33beb61cd9f5bb789a98eff66d73538cc11ec8

// Import the BooksProvider
import { BooksProvider } from "./Components/BooksContext";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex-grow: 1;
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <BooksProvider>
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
        </BooksProvider>
      </Router>
    </AppContainer>
  );
}

export default App;
