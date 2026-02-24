import React from "react";

function Cartpage() {
  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">Cart Items</h1>
      <hr />

      {/* Cart Item */}
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <div className="row align-items-center">

            {/* Product Image */}
            <div className="col-12 col-md-3 text-center mb-3 mb-md-0">
              <img
                src="https://m.media-amazon.com/images/I/71w+qG+9sL._AC_UL320_.jpg"
                alt="Product"
                className="img-fluid rounded"
                style={{ maxHeight: "150px", objectFit: "contain" }}
              />
            </div>

            {/* Product Details */}
            <div className="col-12 col-md-6">
              <h5 className="fw-bold">Product Name</h5>
              <p className="text-primary fw-semibold">$19.99</p>

              {/* Quantity Buttons */}
              <div className="d-flex align-items-center gap-2">
                <button className="btn btn-outline-secondary btn-sm">-</button>
                <span>1</span>
                <button className="btn btn-outline-secondary btn-sm">+</button>
              </div>
            </div>

            {/* Delete Button */}
            <div className="col-12 col-md-3 text-md-end mt-3 mt-md-0">
              <button className="btn btn-danger btn-sm">
                Delete
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Total Section */}
      <div className="card shadow-sm">
        <div className="card-body d-flex flex-column flex-md-row justify-content-between align-items-center">
          <h4 className="mb-3 mb-md-0">Total: $19.99</h4>
          <button className="btn btn-success px-4">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cartpage;