import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Layout from "../components/Layout/Layout"

import Login from "../pages/login";
import Register from "../pages/register";

export default function AppRoutes() {
    return (
        <BrowserRouter>
        <Route>
            {/* Public routes */}
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
        </Route>
        </BrowserRouter>
    )
}