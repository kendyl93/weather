import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Forecast from '../views/Forecast';
import App from '../App';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <App />
    </Route>
    <Route exact path="/forecast/:cityId">
      <Forecast />
    </Route>
  </Switch>
);

export default Routes;
