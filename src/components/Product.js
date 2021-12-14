const Product = ({ name, price, onClick }) => {
    return (
        <div className="product">
            <h4>{name}</h4>
            <h4>$ {price}</h4>
            <button onClick={onClick}>Add to Cart</button>
        </div>
    )
};

export default Product;
