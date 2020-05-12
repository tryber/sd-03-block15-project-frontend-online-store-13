import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CartButton from './cartButton';
import Cart from './Cart';
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
