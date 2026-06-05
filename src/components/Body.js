import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import {useState} from "react";


const Body = () => {
    const [filteredRestaurants, setFilteredRestaurants] = useState(resList);
    const flterRestaurants = () => {
        const filtered = resList.filter(
          (res) => res.data.avgRating > 4
        );
        setFilteredRestaurants(filtered);
      }
    return (
        <div className="body">
        <div className="search">Search</div> 
        <div className="filter">
            <button className="filter-btn" onClick={flterRestaurants}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
            {filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
            ))}
        </div>
        </div>
    );
};

export default Body;