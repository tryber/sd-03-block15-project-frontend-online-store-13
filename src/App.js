import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import './App.css';
import ProductDetails from './pages/ProductDetails';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/cart" component={Cart} />
          <Route path="/:category/:id" component={ProductDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
