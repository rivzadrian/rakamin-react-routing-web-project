import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Layout from "../components/Layout/Layout"

import Layout from "../components/Layout/Layout";
import Login from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/Home";
import useAuthStore from "../stores/authStore";
import ProtectedRoute from "../components/ProtectedRoute";
import Profile from "../pages/Profile";
import ProjectDetail from "../pages/ProjectDetail";

export default function AppRoutes() {
  const user = useAuthStore((state) => state.user);
  console.log("ini approute", user);
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

        {/* Protected routes */}
        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
