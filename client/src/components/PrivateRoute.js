import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const isAuthenticated = () => {
  return localStorage.getItem('user') !== null;
};

const PrivateRoute = ({ element, ...rest }) => (
  <Route
    {...rest}
    element={isAuthenticated() ? element : <Navigate to="/login" />}
  />
);

export default PrivateRoute;