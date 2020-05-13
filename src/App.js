import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import SearchBar from './pages/HomePage';
import FilterCategory from './components/FilterCategory';

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <Router>
        <Switch>
          <Route path="/" component={FilterCategory} />
          <Route exact path="/" component={SearchBar} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
