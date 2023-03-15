// This is the main component of the app

// Import pages
import Nav from './Components/Nav';
// Import Global styles
import GlobalStyle from './Components/GlobalStyle';

// Router
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
    </div>
  );
}

export default App;
