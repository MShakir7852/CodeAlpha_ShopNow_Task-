import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


function navbar() {
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("token") ? true : false
  )
const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
    navigate("/auth/login");
  };
  return (
    <nav className="navbar bg-primary navbar-expand-lg text-white" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">ShopNow</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/services">Category </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">About</Link>
            </li>
          </ul>
        </div>
        <Link to="/cart">Cart</Link>
        {isLogin ? <Link className="nav-link active" aria-current="page" to="/auth/login" onClick={handleLogout}>Logout</Link> :
          <div className="gap-2 d-md-flex justify-content-md-end">
            <Link className="nav-link active" aria-current="page" to="/auth/login">Login</Link>
            <Link className="nav-link active" aria-current="page" to="/auth/register">Register</Link>

          </div>}
      </div>
    </nav>
  )
}

export default navbar
