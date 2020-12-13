import React from 'react';
import './App.css';

import Nav from './Containers/Nav';
import About from './Components/About';
import Welcome from './Components/Welcome';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={Welcome} />
          <Route path='/about' component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
