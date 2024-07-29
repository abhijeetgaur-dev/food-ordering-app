import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resData from "../utils/resData";

const Body = () => {
  const [filteredData, setFilteredData] = useState(resData);
    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" 
          onClick = {() =>{
            const newData = filteredData.filter((res) => res.info.avgRating >4.5);
            setFilteredData(newData);
          }}>
            Top Rated Restaurant
          </button>
          <button className="reset-btn" onClick={() =>setFilteredData(resData)}>
              Reset Filter
            </button>

        </div>
        <div className="search">Search</div>
        <div className="res-container">
          {filteredData.map((restaurant) => (
              <RestaurantCard key ={restaurant.info.id} resData = {restaurant} />
          ) )}
        </div>
      </div>
    );
  };

  export default Body;