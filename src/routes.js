import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from './service/auth'
import { Login, Application } from './containers'
import { PublicRoute } from './components'

const Routes = () => (
  <Switch>
    <Route
      path="/"
      exact
      render={() => (
        isAuthenticated()
          ? (<Redirect to={{ pathname: '/app' }} />)
          : (<Redirect to={{ pathname: '/login' }} />)
      )}
    />
    <PublicRoute
      path="/login"
      component={Login}
      exact
    />
    <Route path="/app" component={Application} />
  </Switch>
);

export default Routes;
