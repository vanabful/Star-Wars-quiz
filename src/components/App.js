import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import Quiz from '../containers/Quiz';

const App = () => {

  return(
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/quiz' component={Quiz} /> 
    </Switch>
  );
}

export default App;
