import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component, isLoggedIn, ...props  }) => {
  return isLoggedIn
      ? (<Component {...props} />)
      : (<Navigate to="/sign-up" />)
  }

export default ProtectedRoute;
