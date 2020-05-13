import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={ProductDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
