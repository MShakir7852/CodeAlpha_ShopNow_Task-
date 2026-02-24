import { useEffect, useState } from "react"
import React from 'react'

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fechproducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/getproducts");
        const data = await response.json();
        console.log(data);
        setProducts(data.products);
      } catch (error) {

      }
    }
    fechproducts();
  }, [])
  return (
    <>
      <div className="Section1">
        <div className="heading">
          <h1>Welcome to ShopNow</h1>
          <p>Your one-stop shop for all your needs!
          </p>
        </div>
      </div>
      <div className="Category">
        <h2>Top Categories</h2>

        <ul >
          {products.map((product) => {
            return(
          <li className="Home-Kitchen" key={product._id}><a href="">{product.category}</a></li>
          )})}
          {/* <li className='Electronic'><a href="">Electronics </a></li>
          <li className='Fashion'><a href="">Fashion </a></li>
          <li className='Home-Kitchen'><a href="">Home & Kitchen </a></li> */}
        </ul>
      </div>
      <div className="product">
        <h2>Featured Products</h2>
       <div className="cardsection">
         {products.map((product) => {

          return(
            <div key={product._id} className="card product-card">
            <img src={product.image} alt={product.name} />
            <h3 className="product-title">{product.name}</h3>
            <p>${product.price}</p>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
          )
        })
        }
       </div>
      </div>
    </>
  )
}

export default Home
