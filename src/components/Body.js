import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";``
import { SWIGGY_API } from "../utils/constants";
import {Shimmer} from "./Shimmer"


const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [searchText, setSearchText] = useState("");


  console.log("Body Rendered")

  let dataStatic;

  async function fetchData(){
    const Data = await fetch (SWIGGY_API);
    const jsonData = await Data.json();
    dataStatic = jsonData;
    console.log(jsonData);
    setRestaurantData(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
    
  }
  
  useEffect(() => {
    fetchData();
    console.log("useEffect Called")
  }, [])

  

    // if(restaurantData.length === 0){
    //   return <Shimmer />
    // }
    return (restaurantData.length === 0)? <Shimmer/> :(
      <div className="body-container">
        <div className="sub-header">
          <div className="search-container">
            <input className="search-input" type="text" value= {searchText} onChange={(e)=>{
              setSearchText(e.target.value)
              console.log(searchText)
            }}></input>
            <button className="search-btn" onClick={()=>{
                const filteredData = restaurantData.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setRestaurantData(filteredData);
            }}>Search</button>
          </div>
          <div className="filter">
            <button className="filter-btn" 
              onClick = {() =>{
                const newData = restaurantData.filter((res) => res.info.avgRating >4.5);
                setRestaurantData(newData);
              }}>
                Top Rated Restaurant
            </button>
            <button className="reset-btn" 
            //onClick={() =>setRestaurantData(dataStatic)}
            >
                Reset Filter
            </button>
          </div>
          </div>

        <div className="res-container">
          {restaurantData.map((restaurant) => (
              <Link to={"/restaurants/"+ restaurant.info.id} key ={restaurant.info.id} ><RestaurantCard  resData = {restaurant} /></Link>
          ) )}
        </div>
      </div>
    );
  };

  export default Body;