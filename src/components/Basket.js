import React from "react";

const BasketItem = ({ name, price, quantity }) => {
    return (
        <div>
            <h3>{name}</h3>
            <h3>{price}</h3>
            <div className="quantity">
                <button>-</button>
                <h3>{quantity}</h3>
                <button>+</button>
            </div>
        </div>
    )
};

export default BasketItem;
