import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? childeren : <Navigate to="/login" />;
};

export default PrivateRoute;
