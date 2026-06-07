import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
        return () => {
            // we can cleanup any side effects here like clearing timers, cancelling API calls, removing event listeners etc
            console.log("Body component unmounted cleanup function called once component is unmounted");
        };
    },[]);

    const fetchData = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            console.log("Products:", data);
            setProducts(data.products);
            setFilteredProducts(data.products);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    const filterHighRatedProducts = () => {
        const filtered = products.filter(
          (product) => product.rating > 4
        );
        setFilteredProducts(filtered);
    }
    
    const searchProducts = () => {
        if (!searchText) {
            setFilteredProducts(products); // reset
        } else {
         const filtered = products.filter((product)=>product.title.toLowerCase().includes(searchText.toLowerCase()));
         setFilteredProducts(filtered);
        }
    }
    
    return products.length === 0 ? (<Shimmer />) : (
        <div className="body">
        <div className="search">
            <input type="text" className="search-box" placeholder="Search for products..." 
            value={searchText} 
            onChange={(e) => setSearchText(e.target.value)} />
            <button className="search-btn" onClick={searchProducts}>Search</button>
             <div className="filter">
            <button className="filter-btn" onClick={filterHighRatedProducts}>High Rated Products (4+)</button>
        </div>
        </div> 
       
        <div className="res-container">
            {filteredProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="product-link">
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
            ))}
        </div>
        </div>
    );
};

export default Body;