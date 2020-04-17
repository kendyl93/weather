import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Forecast from '../views/Forecast';
import Dashboard from '../views/Dashboard';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Dashboard />
    </Route>
    <Route exact path="/forecast/:cityId">
      <Forecast />
    </Route>
  </Switch>
);

export default Routes;
