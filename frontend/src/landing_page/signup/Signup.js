import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://zerodha-backend-ry24.onrender.com/signup", form);
      alert("Signup successful!");
      navigate("/login");
    } catch (error) {
      alert("Signup failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Account 🚀</h2>
        <p className="subtitle">Signup to get started</p>

        <form onSubmit={handleSignup}>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            onChange={handleChange}
            required
          />

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
            placeholder="Create password"
            onChange={handleChange}
            required
          />

          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;