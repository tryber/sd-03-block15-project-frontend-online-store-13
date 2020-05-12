import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Cart from './Cart';
import CartButton from './cartButton';
import './App.css';

function App() {
  return (
    <Router>
      <CartButton />
      <Cart />
    </Router>
  );
}

export default App;
