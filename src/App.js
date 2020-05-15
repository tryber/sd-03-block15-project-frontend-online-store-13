import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import './App.css';
import ProductDetails from './pages/ProductDetails';
import HomePage from './pages/HomePage';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/cart" component={Cart} />
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/checkout" component={CheckoutPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
