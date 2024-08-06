import { CDN_LOGO_URL } from "../utils/constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


const RestaurantCard = ({ resData }) => {

  useGSAP(()=>{
    gsap.to('#res-card', {
      opacity: 1,
      delay: 1.5,
      stagger: 0.2
      })
  },[])


    return (
      <div className="m-4 w-[200px] bg-[rgb(87,84,84)] h-[450px] rounded-md shadow-gray-950 shadow-sm opacity-0" id="res-card">
        <img
          className="h-52 w-52 mb-4 shadow-xl" src={CDN_LOGO_URL + resData.info.cloudinaryImageId}
        ></img>
        <div className="text-center pb-4 ">
        <h3 className=" pb-1 font-extrabold shadow-sm">{resData.info.name}</h3>
        <div className="pt-2">
        <h5>{resData.info.cuisines.join(", ")}</h5>
        <h5>{resData.info.avgRating}</h5>
        <h5>{resData.info.sla.slaString}</h5>
        </div>
        </div>
      </div>
    );
  };

  export default RestaurantCard;