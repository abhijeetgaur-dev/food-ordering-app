import { Shimmer } from "./Shimmer";
import { CDN_LOGO_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () =>{

    const {resId} =useParams();

    const resMenu = useRestaurantMenu(resId);


    if (resMenu === null)  return <Shimmer />

    const { name, cuisines, cloudinaryImageId, costForTwoMessage, avgRating ,sla} = resMenu?.cards?.[2]?.card?.card?.info || {};
    
    // const  {menuArray}  = resMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || {};
       const  menuArray  = resMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || resMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.carousel|| {};

    
    console.log(menuArray)

    return(
        <div className="menu-card">
            <h1>{name}</h1>
            <img src={CDN_LOGO_URL+cloudinaryImageId} className="menu-logo" />
            <h3>{cuisines.join()}</h3>
            <h3>{costForTwoMessage}</h3>
            <h3>{avgRating}</h3>
            <h3>{sla.deliveryTime}  Minutes</h3>
            <h3>{menuArray.map((e)=>{
                return <li key = {e.card.info.id||e.dish.info.id}>
                    {e.card.info.name} - {e.card.info.price /100 }</li>
            })}</h3>

        </div>
    )
}

export default RestaurantMenu