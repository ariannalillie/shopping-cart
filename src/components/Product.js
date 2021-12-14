const Product = ({ name, price, onClick }) => {
    return (
        <div>
            <h1>{name}</h1>
            <h1>{price}</h1>
            <button onClick={onClick}>Add to Cart</button>
        </div>
    )
};

export default Product;
