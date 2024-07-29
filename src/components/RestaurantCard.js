import { CDN_LOGO_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
    return (
      <div className="res-card">
        <img
          className="card-logo" src={CDN_LOGO_URL + resData.info.cloudinaryImageId}
        ></img>
        <h3>{resData.info.name}</h3>
        <h5>{resData.info.cuisines.join(", ")}</h5>
        <h5>{resData.info.avgRating}</h5>
        <h5>{resData.info.sla.slaString}</h5>
      </div>
    );
  };

  export default RestaurantCard;