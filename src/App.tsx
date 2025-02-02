import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
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
    <DefaultLayout>
      <Routes>

      <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | Deadlock France Admin Dashboard" />
              <LoginPage />
            </>
          }/>
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | Deadlock France Admin Dashboard" />
              <SignUp />
            </>
          }/>

        <Route
          path='/admin'
          element={
            <>
              <PageTitle title="Dashboard | Deadlock France Admin Dashboard" />
              <AdminDashboard />
            </>
          }/>
        <Route
          path="/admin/userManagement"
          element={
            <>
              <PageTitle title="Gestion des utilisateurs | Deadlock France User Management" />
              <UserManagement />
            </>
          }/>
        <Route
          path="/admin/patchnotesManager"
          element={
            <>
              <PageTitle title="Gestion des Patchnotes | Deadlock France Patchnote Management" />
              <PatchnotesManagement />
            </>
          }/>
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | Deadlock France Admin Settings" />
              <Settings />
            </>
          }/>
        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="Basic Chart | Deadlock France Admin Dashboard" />
              <Chart />
            </>
          }/>
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts | Deadlock France Admin Dashboard" />
              <Alerts />
            </>
          }/>
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons | Deadlock France Admin Dashboard" />
              <Buttons />
            </>
          }/>
      </Routes>
    </DefaultLayout>
  );
}

export default App;
