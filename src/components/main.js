import React from "react";
import Product from "./Product";
import products from "../data/products";

const Main = () => {
    return (
        <div>
            <h2>Products</h2>
            <div className="p_list">
                {products.map((product) => {
                    return <Product key={product.id} name={product.name} price={product.price} />
                })}
            </div>
        </div>
    )
};

export default Main;
