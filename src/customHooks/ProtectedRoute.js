
import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { useAuth } from '../contexts/useAuth';

// const ProtectedRoute = ({ children, isLoggedIn, ...props  }) => {

  // if(!isLoggedIn) {
  //   return <Navigate to='/log-in' state={{from: location}} />
  // }

  //   return children;
  //   }

  // export default ProtectedRoute;


  const ProtectedRoute = ({ component: Component, isLoggedIn, ...props }) => {

    return (
      <Route>
        {() =>
          props.isLoggedIn ? <Component {...props} /> : <Redirect to="/sign-in" />
        }
      </Route>
    );
  };

  export default ProtectedRoute;
