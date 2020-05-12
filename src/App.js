import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import SearchBar from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Router>
        <Switch>
          <Route exact path="/" component={SearchBar} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
