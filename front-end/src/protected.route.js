import React from 'react'
import { Outlet } from 'react-router-dom';
import Auth from "./auth";

const ProtectedRoute = () => {
  return Auth.isAuthenticated() === true ? (
    <Outlet />
  ) : (
    (window.location.href = process.env.REACT_APP_API_URL + "/login")
  );
  
}

export default ProtectedRoute;