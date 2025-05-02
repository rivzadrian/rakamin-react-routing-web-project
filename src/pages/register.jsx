import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../utils/api";

export default function Register() {
  const navigate = useNavigate()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await api.post("/api/auth/register",{
        name: name,
        email: email,
        password: password
      })
      navigate('/login')
    } catch (error) {
      console.error("Register failed",
        error.response?.data?.message || error.message
      );
    }

    console.log({name, email, password});
    
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <form onSubmit={handleRegister} className="w-80 space-y-4">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full rounded"
          required
        />

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
          Register
        </button>

        <p className="text-center">
          Already have an account?  
          <Link to="/login" className="text-orange-500">
             Login
          </Link>
        </p>
      </form>
    </div>
  );
}
