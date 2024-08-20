import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_API } from "../utils/constants";
import {Shimmer} from "./Shimmer"



const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [searchText, setSearchText] = useState("");

  // const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
 
 

  let dataStatic;

  async function fetchData(){
    const Data = await fetch (SWIGGY_API);
    const jsonData = await Data.json();
    dataStatic = jsonData;
    console.log(jsonData)
    setRestaurantData(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
    console.log(restaurantData)
    
    
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
        <div className="flex justify-between mb-20">
          <div>
            <input className="bg-white shadow-md border border-black border-solid py-1 ml-10" type="text" value= {searchText} onChange={(e)=>{
              setSearchText(e.target.value)
              console.log(searchText)
            }}></input>
            <button className="bg-[#4A5D5E] px-3 py-1 border border-[#4A5D5E] border-solid mx-3" onClick={()=>{
                const filteredData = restaurantData.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setRestaurantData(filteredData);
            }}>Search</button>
          </div>
          <div className="mr-10">
            <button className="bg-[#4A5D5E] px-3 py-1 border border-[#4A5D5E] border-solid mx-3" 
              onClick = {() =>{
                const newData = restaurantData.filter((res) => res.info.avgRating >4.5);
                setRestaurantData(newData);
              }}>
                Top Rated Restaurant
            </button>
            <button className="bg-[#4A5D5E] px-3 py-1 border border-[#4A5D5E] border-solid mx-3" 
            //onClick={() =>setRestaurantData(dataStatic)}
            >
                Reset Filter
            </button>
          </div>
          </div>

        <div className="flex flex-wrap justify-start gap-3">
          {restaurantData.map((restaurant) => (
            
              <Link to={"/restaurants/"+ restaurant.info.id} key ={restaurant.info.id} >
                    <RestaurantCard  resData = {restaurant} />
                </Link>
          ) )}
        </div>
      </div>
    );
  };

  export default Body;