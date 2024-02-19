import React from "react";
import { Route } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = /* Check if the user is authenticated */ true;
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Route to="/login" />
      }
    />
  );
}
export default PrivateRoute;
