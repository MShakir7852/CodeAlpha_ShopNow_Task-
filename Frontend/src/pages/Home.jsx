import { useEffect, useState } from "react";
import React from "react";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/getproducts");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container my-5">

      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Welcome to ShopNow</h1>
        <p className="lead">Your one-stop shop for all your needs!</p>
      </div>

      {/* Categories Section */}
      <div className="mb-5">
        <h2 className="mb-4 text-center">Top Categories</h2>

        <div className="row g-3">
          {products.map((product) => (
            <div key={product._id} className="col-6 col-md-4 col-lg-3">
              <div className="card text-center shadow-sm">
                <div className="card-body">
                  <h6 className="card-title">{product.category}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div>
        <h2 className="mb-4 text-center">Featured Products</h2>

        <div className="row g-4">
          {products.map((product) => (
            <div key={product._id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100 shadow-sm">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text fw-bold text-primary">
                    ${product.price}
                  </p>
                  <button className="btn btn-primary mt-auto">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Home;