import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CartButton from './cartButton';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <CartButton />
      </div>
    </Router>

  );
}

export default App;
