import {useState, useEffect} from "react";
import { Link } from "react-router";

const Product = (props) => {
    const { product } = props;
    return (
     <Link to={`/product/${product.id}`} className="product-link">
                <div className="product-card">
                    <img src={product.thumbnail} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p><strong>Price:</strong> ${product.price}</p>
                    <p><strong>Rating:</strong> {product.rating} ⭐</p>
                    <p><strong>Discount:</strong> {product.discountPercentage}%</p>
                    <p><strong>Stock:</strong> {product.stock}</p>
                    <p className="description">{product.description}</p>
                </div>
    </Link>
    );
}

export default Product;