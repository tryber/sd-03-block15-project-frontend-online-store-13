import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import './App.css';
import SearchBar from './pages/HomePage';
import ProductDetails from './pages/DetailPage';
import Quantity from './components/Quantity';
import AddToCart from './components/AddToCart';

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <Router>
        <Switch>
          <Route exact path="/" component={SearchBar} />
          <Route path="/cart" component={Cart} />
          <Route path="/qtd" component={Quantity} />
          <Route path="/detail" component={ProductDetails} />
          <Route path="/add" component={AddToCart} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
