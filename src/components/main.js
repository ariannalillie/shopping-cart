import React, { useState, useEffect } from "react";
import Product from "./Product";
import products from "../data/products";
import BasketItem from "./Basket";
import './index.css';

const Main = () => {
    const [cart, setCart] = useState([])
    const [productsDisplayed, setProductsDisplayed] = useState(products.map(el => {
        return { ...el, quantity: 1 }
    }));
    const [total, setTotal] = useState(0)

    const handleClick = (product) => {
        setCart((prev) => {
            return [...prev, product];
        })
        updateTotal(product.price)
    }

    // Display products
    const displayProducts = productsDisplayed.map(product => {
        return <Product key={product.id} name={product.name} price={product.price} onClick={() => handleClick(product)} />
    })

    //Add to total
    const updateTotal = (price) => {
        setTotal((prev) => {
            return prev+price
        })
    }


    return (
        <div className="main_container">
            <div className="main_container_left">
                {displayProducts}
            </div>
            <div className="main_container_center">
                {cart.map(cartItem => {
                    return <BasketItem name={cartItem.name} price={cartItem.price} quantity={cartItem.quantity} />
                })}
            </div>
            <div className="main_container_right">
                <h3>total:</h3>
                <h3>$ {total}</h3>
            </div>
        </div>
    )
};

export default Main;
