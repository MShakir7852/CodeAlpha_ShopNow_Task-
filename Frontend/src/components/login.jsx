import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });


      const data = await response.json();
      console.log("Login response:", data);
      if (response.ok) {
        // Save token
        localStorage.setItem("token", data.token);

        alert("Login Successful ✅");


        // Redirect
        navigate("/");
      } else {
        alert(data.message || "Login Failed ❌");
      }

    } catch (error) {
      console.error("Login error:", error);
      alert("Server error");
    }
  };

  return (
    <div>
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} value={password} />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
          <span>
            Don't have an account? <Link to="/auth/register">Register here</Link>
          </span>
        </form>
      </div>
    </div>
  )
}

export default login
