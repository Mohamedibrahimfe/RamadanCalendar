import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import React from 'react';
export default function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user && !localStorage.getItem('ramadanUser')) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}