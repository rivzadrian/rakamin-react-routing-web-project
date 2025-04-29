import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Layout from "../components/Layout/Layout"

import Layout from "../components/Layout/Layout";
import Login from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/Home";

export default function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            {/* Public routes */}
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>

            {/* Protected routes */}
            <Route element={<Layout />}>
                <Route path="/" element={<Home />}/>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}