import React from "react";
import {Link} from "react-router-dom";
import img18 from "../assets/image18.png"
import img19 from "../assets/image19.png"
import img20 from "../assets/image20.png"
import img21 from "../assets/image21.png"
import "./combined.css"


const RewardComponent=()=>{
return(
<div>
<div class="rewards-logo">
  <h1 class="rewards-h1">REWARDS</h1>
 <img class="reward-image" src={img18} alt=""/>
</div>
 <div class="services-cards-component-root" id="services-provided">
  <div class="services-cards-box">
   <div class="services-card">
    <div class="services-card-image-box">
     <img class="services-card-image" src={img19} alt="servicePsychiatristPNG" />
    </div>
    <div class="services-card-text-box">
     <h1 class="services-card-heading">Cash</h1>
     <p class="services-card-text">
     Get Instant Cash in Exchange of anykind of Scrap.
     </p>
    </div>
    <div class="services-card-button-box">
     <Link to="/">
     </Link>
    </div>
   </div>
   <div class="services-card">
    <div class="services-card-image-box">
     <img class="services-card-image" src={img20}  alt="servicePsychiatristPNG" />
    </div>
    <div class="services-card-text-box">
     <h1 class="services-card-heading">Amazing Vouchers</h1>
     <p class="services-card-text">
      Superb Vouchers from Amazon, Swiggy, BookMyShow, etc.
     </p>
    </div>
    <div class="services-card-button-box">
     <Link to="/">
     </Link>
    </div>
   </div>
   <div class="services-card">
    <div class="services-card-image-box">
     <img class="services-card-image" src={img21} alt="servicePsychiatristPNG" />
    </div>
    <div class="services-card-text-box">
     <h1 class="services-card-heading">NaturalEnvironment</h1>
     <p class="services-card-text">
     Create Hygenic and Clean Surroundics around you
     </p>
    </div>
    <div class="services-card-button-box">
     <Link to="/">
     </Link>
    </div>
   </div>
  </div>
 </div>
</div>
);
}

export default RewardComponent;