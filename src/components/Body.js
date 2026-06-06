import RestaurantCard from "./RestaurantCard";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";


const Body = () => {
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [filtersearchText, setFilterSearchText] = useState([]);
    const [searchText, setSearchText] = useState("");

    /**whenever the state variable is updated, 
    * - react will re-render the component and reflect the changes in the UI -
    * -  react reconciliation algorithm 
    * - diffing algorithm 
    * - virtual DOM 
    * - real DOM react first creates a virtual DOM and then compares it with the real DOM and updates only the changed parts in the real DOM 
    * - this is called reconciliation 
    * - this is done to improve performance 
    * - this is done to avoid unnecessary re-renders 
    * - this is done to avoid unnecessary updates to the real DOM 
    * - this is done to improve performance 
    * - this is done to make the UI more responsive 
    * - this is done to make the UI more interactive 
    * - this is done to make the UI more dynamic 
    * - this is done to make the UI more user-friendly 
    * - this is done to make the UI more engaging 
    * - this is done to make the UI more appealing 
    * - this is done to make the UI more attractive 
    * - this is done to make the UI more beautiful 
    * - this is done to make the UI more elegant -
    * - this is done to make the UI more modern -
    * - this is done to make the UI more stylish 
    * - this is done to make the UI more trendy 
    * - this is done to make the UI more fashionable 
    * - this is done to make the UI more chic 
    * - this is done to make the UI more classy 
    * - this is done to make the UI more sophisticated 
    * - this is done to make the UI more refined 
    * - this is done to make the UI more polished 
    * - this is done to make the UI more sleek 
    * - this is done to make the UI more smooth 
    * - this is done to make the UI more seamless 
    * - this is done to make the UI more fluid 
    * - this is done to make the UI more natural 
    * - this is done to make the UI more intuitive 
    * - this is done to make the UI more user-friendly
    **/
    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://corsproxy.io/?url=https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.08950&lng=80.27390&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setFilterSearchText(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const flterRestaurants = () => {
        const filtered = filteredRestaurants.filter(
          (res) => res.info.avgRating > 4
        );
        setFilterSearchText(filtered);
      }
    const searchRestraunt = (query) => {
        if (!query) {
            setFilterSearchText(filteredRestaurants); // reset
        } else {
         const filtered = filteredRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
         setFilterSearchText(filtered);
  }
    }
    
    return filteredRestaurants.length === 0 ? (<Shimmer />) : (
        <div className="body">
        <div className="search">
            <input type="text" className="search-box" placeholder="Search for restaurants..." 
            value={searchText} 
            onChange={(e) => setSearchText(e.target.value)} />
            <button className="search-btn" onClick={searchRestraunt}>Search</button>
             <div className="filter">
            <button className="filter-btn" onClick={flterRestaurants}>Top Rated Restaurants</button>
        </div>
        </div> 
       
        <div className="res-container">
            {filtersearchText.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            ))}
        </div>
        </div>
    );
};

export default Body;