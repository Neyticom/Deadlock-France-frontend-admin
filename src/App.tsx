import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import React from 'react';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import LoginPage from './pages/Authentication/LoginPage';
import SignUp from './pages/Authentication/SignUp';
import Chart from './pages/Chart';
import AdminDashboard from './pages/Dashboard/AdminDashboard';
import Settings from './pages/Settings';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import UserManagement from './pages/UserManagement';
import PatchnotesManagement from './pages/PatchnotesManagement';
import AuthRedirect from './components/Auth/AuthRedirect';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import { AuthProvider } from './context/authContext';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <AuthProvider>
      <Routes>
        {/* Login route - User is redirected to dashboard if already logged in */}
        <Route element={<AuthRedirect />}>
            <Route path="/login" element={<LoginPage />} />
        </Route>

        {/* Protected routes - User has to be logged in*/}
        <Route element={<ProtectedRoute />}>
          <Route element={<DefaultLayout />}>
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/dashboard/users" element={<UserManagement />} />
          </Route>
        </Route>

        {/* Prevent wrong url usage */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
