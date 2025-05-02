import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Layout from "../components/Layout/Layout"

import Layout from "../components/Layout/Layout";
import Login from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/Home";
import useAuthStore from "../stores/authStore";
import ProtectedRoute from "../components/ProtectedRoute";

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
        <Route element={
            <ProtectedRoute>
            <Layout /> 
            </ProtectedRoute>}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
