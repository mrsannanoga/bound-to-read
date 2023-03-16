import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Nav from './Components/Nav';
import Home from './Pages/Home';
import Search from './Pages/Search';
import List from './Pages/List';
import Footer from './Components/Footer';
import GlobalStyle from './Components/GlobalStyle';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <GlobalStyle />
        <Nav />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/list" element={<List />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </AppContainer>
  );
}

export default App;


