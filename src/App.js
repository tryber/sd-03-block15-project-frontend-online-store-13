import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import './App.css';
import SearchBar from './pages/HomePage';
// import FilterCategory from './components/FilterCategory';

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <Router>
        <Switch>
          <Route exact path="/" component={SearchBar} />
          <Route path="/cart" component={Cart} />
          {/* <Route path="/products/:id" component={ProductDetails} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
