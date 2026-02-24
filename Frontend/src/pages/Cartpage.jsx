import React from 'react'

function Cartpage() {
    return (
        <div>
            <h1>Cart Item</h1>
            <hr />
            <div className="cardlist">
                <ul>
                    <li className='d-flex justify-content-between align-items-center'>

                        <img src="https://m.media-amazon.com/images/I/71w+qG+9sL._AC_UL320_.jpg" alt="Product Image" />
                        <div className="mainbody d-flex justify-content-between gap-5">
                            <div className="body d-flex flex-column">
                                <h3 className="product-title">Product Name</h3>
                                <p>$19.99</p>
                                <div className="button">
                                    <button className="btn btn-secondary h-auto w-25">-</button>
                                    <span className="mx-2">1</span>
                                    <button className="btn btn-secondary h-auto w-25">+</button>
                                </div>
                            </div>
                            <button className="btn btn-primary h-auto w-25">Delete</button>
                        </div>
                       
                    </li>
                     <hr />
                </ul>
            </div>
                <div className="total d-flex flex-column justify-content-end gap-5">
                    <h3>Total: $19.99</h3>
                    <button className="btn btn-success h-auto w-25">Checkout</button>
                </div>
        </div>
    )
}

export default Cartpage
