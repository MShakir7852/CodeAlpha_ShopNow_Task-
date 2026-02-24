
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Cartpage from './pages/Cartpage'
import ProductDetailPage from './pages/productDetailPage'
import Register from './components/register'
import Login from './components/login'
import "@fortawesome/fontawesome-free/css/all.min.css";
function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cartpage/>} />
          <Route path="/product" element={<ProductDetailPage/>} />
          <Route path="/auth/register" element={<Register/>} />
          <Route path="/auth/login" element={<Login/>} />
          {/* <Route path="/about" element={<About/>} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
