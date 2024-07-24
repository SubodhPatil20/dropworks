import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {useSelector} from 'react-redux';

const PrivateRoute = ( props:any) => {
  const isLoggedIn = useSelector((state: any) => state.auth.authentication);
  if (!isLoggedIn.profile?.role || !props.roles.includes(isLoggedIn.profile?.role)) {
    // User doesn't have the required role, redirect to a suitable page
    return <Navigate to="/unauthorized" />;
  } else {
    return <>{props.children}</>;
  }  
};

export default PrivateRoute;
