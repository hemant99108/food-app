import { CDN_URL } from "../utils/constant";

const RestaurantCard=(props)=>{
    //destructuring on the fly 
    const{resData}=props;
  
    const{
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,deliveryTime, 
    }=resData?.data;
    return(
      <div className="res-card">
      <img className="res-logo" 
      
      // src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7" 
      src={CDN_URL+cloudinaryImageId}
      
      alt="swigy foto" />
        <h3> {name} </h3>
        <h4>P{cuisines.join(',')} </h4>
        <h4>{costForTwo}  </h4>
        <h4>{avgRating} stars  </h4>
        <h4>{deliveryTime} minutes </h4>
      </div>
    )
  }

  export default RestaurantCard;