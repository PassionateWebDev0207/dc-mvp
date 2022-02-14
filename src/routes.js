import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Application } from './containers'

const Routes = () => (
  <Switch>
    <Route
      path="/"
      exact
      component={Application}
    />
  </Switch>
);

export default Routes;
