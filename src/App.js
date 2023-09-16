import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/:id" Component={MovieDetail} />
      </Routes>
    </Router>
  );
}

export default App;
