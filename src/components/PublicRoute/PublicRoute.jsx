import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isAuthenticated } from '../../service/auth'

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      !isAuthenticated()
        ? (<Component {...props} />)
        : (<Redirect to={{ pathname: '/app', state: { from: props.location } }} />)
    )}
  />
);

export default PublicRoute
