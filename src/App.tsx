import { Route, Routes } from "react-router-dom";
import './App.scss';
import LoginPage from '/home/student/Deadlock-France-frontend-admin/src/views/LoginPage.tsx';
import AdminDashboard from "./views/AdminDashboard";


const App = () => {
  return (
    <div className="admin-app-container">
      <Routes>
        {/* Login Page */}
        <Route path="/admin" element={<LoginPage />} />

        {/* Main Admin Dashboard */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
};

export default App;