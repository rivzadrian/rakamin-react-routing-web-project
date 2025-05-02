import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import api from "../utils/api";
import useAuthStore from "../stores/authStore";

export default function Login() {

  const navigate = useNavigate()
  const {setToken, setUser} = useAuthStore((state) => state)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const user = useAuthStore((state)=>state.user)
  // console.log("ini login",user);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
     const response =  await api.post("/api/auth/login", {
        email: email,
        password: password
      }) 
      // console.log(response);
      const { accessToken, user} = response.data // harus sesuai dengan key pada response
      setToken(accessToken)
      setUser(user)
      navigate("/")
    } catch (error) {
      console.error("Login failed", error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <form onSubmit={handleLogin} className="w-80 space-y-4">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full rounded"
          required
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full rounded"
          required
        />
        <button
          type="submit"
          className="bg-orange-500 text-white p-2 w-full rounded"
        >
          Login
        </button>
        <p className="text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-orange-500">
            Register now
          </Link>
        </p>
      </form>
    </div>
  );
}
