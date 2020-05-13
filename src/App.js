import React from 'react';
import { BrowserRouter as Router, 
  Route,
  Switch } from 'react-router-dom';
import './App.css';
import FilterCategory from './components/FilterCategory';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={FilterCategory} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
