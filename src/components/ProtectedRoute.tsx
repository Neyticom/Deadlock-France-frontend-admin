import { Navigate, Outlet } from 'react-router-dom';
import React from 'react';
import useAuth from '../hooks/useAuth';

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/auth/signin" />;
};

export default ProtectedRoute;
