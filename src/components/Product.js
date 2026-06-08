import {useState, useEffect,useContext} from "react";
import { Link } from "react-router";
import userContext from '../utils/userContext'

const Product = (props) => {
    const { product } = props;
    const {loggedInUser} = useContext(userContext)
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
                    <h2><p>Name : {loggedInUser}</p></h2>
                </div>
    </Link>
    );
}

export default Product;