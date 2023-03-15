// Import dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import pages
import Nav from './Components/Nav';
import Home from './Pages/Home';
import Search from './Pages/Search';
import List from './Pages/List';
import Footer from './Components/Footer'


// Import Global styles
import GlobalStyle from './Components/GlobalStyle';

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/list" element={<List />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

