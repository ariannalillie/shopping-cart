import React, { useState } from "react";
import Product from "./Product";
import products from "../data/products";
import './index.css';

const Main = () => {
    const [cartItems, setCartItems] = useState([])
    const [total, setTotal] = useState(0);

    //Add to cart function
    const addToCart = (product) => {
        setCartItems((prev) => {
            return [...prev, {name: product.name, price: product.price}]
        });
        updateTotal(product);
    };

    //Updte Total
    const updateTotal = (product) => {
        setTotal((prev) => {
            return prev+product.price;
        })
    }

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
                <h2>Cart:</h2>
                {console.log(cartItems)}
                {cartItems.map((cartItem) => {
                    return (
                        <div className="cart_item">
                            <h4>{cartItem.name}</h4>
                            <h4 className="cart_item_price">$ {cartItem.price}</h4>
                        </div>
                    )

                })}
                <div className="total_container">
                    <h2>Total: $</h2>
                    <h2> {total}</h2>
                </div>
            </div>
        </div>
    )
};

export default Main;
