const Product = ({ name, price }) => {
    return (
        <div>
            <h1>{name}</h1>
            <h1>{price}</h1>
            <button>Add to Cart</button>
        </div>
    )
};

export default Product;
