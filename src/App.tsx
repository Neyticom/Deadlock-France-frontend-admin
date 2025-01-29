import { useEffect, useState } from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Chart from './pages/Chart';
import Settings from './pages/Settings';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import UserManagement from './pages/UserManagement';
import PatchnotesManagement from './pages/PatchnotesManagement';
import AdminDashboard from './pages/Dashboard/AdminDashboard';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  console.log('loading state',loading);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Dashboard | Deadlock France Admin Dashboard" />
              <AdminDashboard />
            </>
          }
        />
        <Route
          path="/admin/userManagement"
          element={
            <>
              <PageTitle title="Gestion des utilisateurs | Deadlock France User Management" />
              <UserManagement />
            </>
          }
        />
        <Route
          path="/admin/patchnotesManager"
          element={
            <>
              <PageTitle title="Gestion des Patchnotes | Deadlock France Patchnotes Manager" />
              <PatchnotesManagement />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | Deadlock France Admin Dashboard" />
              <Settings />
            </>
          }
        />
        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="Basic Chart | Deadlock France Admin Dashboard" />
              <Chart />
            </>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts | Deadlock France Admin Dashboard" />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons | Deadlock France Admin Dashboard" />
              <Buttons />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | Deadlock France Admin Dashboard" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | Deadlock France Admin Dashboard" />
              <SignUp />
            </>
          }
        />
      </Routes>
      <Route path="*" element={<div>Page not found</div>} />
    </DefaultLayout>
  );
}

export default App;
