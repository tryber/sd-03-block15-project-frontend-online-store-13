import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, 
  Route,
  Switch } from 'react-router-dom';
=======
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
>>>>>>> c37fe95bbff1544937661e1ca4cb23c620146fb8
import './App.css';
import SearchBar from './pages/HomePage';
import FilterCategory from './components/FilterCategory';

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <Router>
        <Switch>
          <Route exact path="/" component={SearchBar} />
          <Route path="/" component={FilterCategory} />;
        </Switch>
      </Router>
    </div>
  );
}

export default App;
