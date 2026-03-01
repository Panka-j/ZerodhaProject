import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://zerodha-backend-ry24.onrender.com/login", form);

      localStorage.setItem("token", res.data.token);

      navigate("/dashboard");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="auth-container">
    <div className="auth-card">
      <h2>Welcome Back 👋</h2>
      <p className="subtitle">Login to your account</p>

      <form onSubmit={handleLogin}>
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          onChange={handleChange}
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  </div>
  );
};

export default Login;