import {useState,useEffect, useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import Product from "./Product";
import FeatureProduct from "./FeatureProduct";
import userContext from '../utils/userContext'

const Body = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchText, setSearchText] = useState("");
    const FeaturedCategoryCmp = FeatureProduct(Product);
    const {loggedInUser,setLoggedUser} = useContext(userContext)

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

             <input type="text" className="search-box" placeholder="Type user Name" 
            value={loggedInUser} 
            onChange={(e) => setLoggedUser(e.target.value)} />

             <div className="filter">
            <button className="filter-btn" onClick={filterHighRatedProducts}>High Rated Products (4+)</button>
        </div>
        </div> 
       
        <div className="res-container">
            {filteredProducts.map((product) => (
                product.category === "beauty" ? (<FeaturedCategoryCmp key={product.id} product={product}/>) : (<Product key={product.id} product={product} />)
            ))} 
        </div>
        </div>
    );
};

export default Body;