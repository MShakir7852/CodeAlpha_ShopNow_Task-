import React from 'react'
import { Link } from 'react-router-dom'

function productDetailPage() {
  return (
    <div className='productdetailpage p-2'>
        <h1>Product Detail Page</h1>
        <div className="product-detail d-flex gap-5 p-5">
            <img src="https://m.media-amazon.com/images/I/71w+qG+9sL._AC_UL320_.jpg" alt="Product Image"  width='70%' height='400px'/>
            <div className="product-info gap-20">
                <h2>Product Name</h2>
                <p>$19.99</p>
                <div className="button p-2">
                    <button className="btn btn-secondary h-auto w-25">-</button>
                    <span className="mx-2">1</span>
                    <button className="btn btn-secondary h-auto w-25">+</button>
                </div>
                <Link to="/cart" className="btn btn-primary" >Add to Cart</Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              
            </div>
        </div>
    </div>
  )
}

export default productDetailPage
