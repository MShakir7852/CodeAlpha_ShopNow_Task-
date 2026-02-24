import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-4">
        <div className="row">
          <div className="col-12 col-md-4 mb-3">
            <h5 className="fw-bold">ShopNow</h5>
            <p className="small">
              Your one-stop shop for electronics, fashion,
              home & kitchen and more. Quality products at
              the best prices.
            </p>
          </div>
          <div className="col-6 col-md-4 mb-3">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-white text-decoration-none">About</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
              <li><a href="/cart" className="text-white text-decoration-none">Cart</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-4 mb-3">
            <h6 className="fw-bold">Contact</h6>
            <p className="small mb-1">Email: support@shopnow.com</p>
            <p className="small mb-1">Phone: +92 3267852678</p>
            <p className="small">Karachi, Pakistan</p>
          </div>
        </div>
      </div>
      <div
        className="text-center py-3"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      >
        © {new Date().getFullYear()} ShopNow. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;