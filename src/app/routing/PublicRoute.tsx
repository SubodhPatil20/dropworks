import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {useSelector} from 'react-redux';

const PublicRoute = (props:any) => {
  const isLoggedIn = useSelector((state: any) => state.auth.authentication);
  return isLoggedIn ? <Navigate to="/" /> : <>{props.children}</>;
};

export default PublicRoute;
