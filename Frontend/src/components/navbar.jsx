import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function navbar() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("token") ? true : false
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
    navigate("/auth/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand fw-bold" to="/">
          ShopNow
        </Link>

        {/* Toggle Button (Mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Category</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>

          {/* Right Side */}
          <div className="d-flex align-items-center gap-3">

            {/* Cart Icon */}
            <Link to="/cart" className="text-white fs-5">
              <i className="fa-solid fa-cart-arrow-down"></i>
            </Link>

            {/* Auth Buttons */}
            {isLogin ? (
              <button onClick={handleLogout} className="btn btn-light btn-sm">
                Logout
              </button>
            ) : (
              <>
                <Link to="/auth/login" className="btn btn-light btn-sm">
                  Login
                </Link>
                <Link to="/auth/register" className="btn btn-outline-light btn-sm">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default navbar;