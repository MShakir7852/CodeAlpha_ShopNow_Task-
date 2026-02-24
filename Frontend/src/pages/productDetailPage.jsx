import React from "react";
import { Link } from "react-router-dom";

function ProductDetailPage() {
  return (
    <div className="container my-5">

      <h1 className="mb-4 text-center">Product Detail</h1>

      <div className="card shadow-sm p-4">
        <div className="row align-items-center">

          {/* Product Image */}
          <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
            <img
              src="https://m.media-amazon.com/images/I/71w+qG+9sL._AC_UL320_.jpg"
              alt="Product"
              className="img-fluid rounded"
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
          </div>

          {/* Product Info */}
          <div className="col-12 col-md-6">

            <h2 className="fw-bold">Product Name</h2>
            <h4 className="text-primary mb-3">$19.99</h4>

            {/* Quantity Buttons */}
            <div className="d-flex align-items-center gap-3 mb-3">
              <button className="btn btn-outline-secondary btn-sm">-</button>
              <span>1</span>
              <button className="btn btn-outline-secondary btn-sm">+</button>
            </div>

            {/* Add to Cart Button */}
            <Link to="/cart" className="btn btn-primary mb-3">
              Add to Cart
            </Link>

            {/* Description */}
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

          </div>

        </div>
      </div>

    </div>
  );
}

export default ProductDetailPage;