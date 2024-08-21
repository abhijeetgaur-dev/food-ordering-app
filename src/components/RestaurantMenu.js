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

    console.log("menuArray")
    console.log(menuArray)

    return(
        <div className="w-1/2 p-4 mx-auto text-center border rounded-md bg-neutral-800  min-h-screen mb-32">
            <h1 className="text-center text-4xl  m-auto font-extrabold pb-11">{name}</h1>
            <img src={CDN_LOGO_URL+cloudinaryImageId} className=" inset-0 w-100 h-100 mx-auto my-auto rounded-xl drop-shadow-2xl " />
            <h3 className="text-xl font-semibold py-3">{cuisines.join(", ")}</h3>
            <h3 className="font-medium">{costForTwoMessage}</h3>
            <h3 className="font-medium">{avgRating} Stars</h3>
            <h3>{sla.deliveryTime}  Minutes</h3>
            <ul className="py-7">{menuArray.map((e)=>{
                return <li className="py-1 font-thin" key = {e.card.info.id||e.dish.info.id}>
                    {e.card.info.name} - {e.card.info.price /100 }</li>
            })}</ul>

        </div>
    )
}

export default RestaurantMenu