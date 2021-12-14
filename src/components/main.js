import React, { useState } from "react";
import Product from "./Product";
import products from "../data/products";
import './index.css';

const Main = () => {
    const [cartItems, setCartItems] = useState([])

    //Add to cart function
    const addToCart = (product) => {
        setCartItems((prev) => {
            return [...prev, {name: product.name, price: product.price}]
        });
    };

    return (
        <div className="main_container">
            <div className="main_container_left">
                <h2>Products</h2>
                <div className="p_list">
                    {products.map((product) => {
                        return <Product key={product.id} name={product.name} price={product.price} onClick={() => addToCart(product)}/>
                    })}
                </div>
            </div>
            <div className="main_container_right">
                <h1>Cart:</h1>
                {console.log(cartItems)}
                {cartItems.map((cartItem) => {
                    return (
                        <div className="cart_item">
                            <h3>{cartItem.name}</h3>
                            <h3 className="cart_item_price">$ {cartItem.price}</h3>
                        </div>
                    )

                })}
            </div>
        </div>
    )
};

export default Main;
