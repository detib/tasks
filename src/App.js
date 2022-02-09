import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

import Home from './pages/Home'
import Task1 from './pages/FirstTask';
import Task2 from './pages/SecondTask';
import Task3 from './pages/ThirdTask';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/first-task' component={Task1} />
        <Route exact path='/second-task' component={Task2} />
        <Route exact path='/third-task' component={Task3} />
      </Switch>
    </Router>
  );
};

export default App;
