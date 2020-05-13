import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import FilterCategory from './components/FilterCategory';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/product-details" component={ProductDetails} />
          <Route exact path="/" component={FilterCategory} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
