import React, {Component} from "react";
import "./datetime-form.css"

  export default function DateForm(){
    return(
<div>
 <div class="main-div">
      
   <form action="/" method="post">
      
     <div  class="pickup-date"><p>Select Pickup Date :</p>
</div>
         <span class="day1"><input type="date"/></span>
   

<div class="pickup-time">
<label for="appt">Select Pickup Time:</label>
</div>
<div class="pickup-time-input"><input type="time" id="appt" name="appt" min="09:00" max="20:00" required/></div>


<div class="addr">
   <label for="address">Address</label><br/>
   <textarea type="text" id="textbox1" name="address" cols="40" rows="5"></textarea><br/></div>

<div class="input-info">
<div class="inputbox2"><label for="pincode">Pincode</label><br/>
<input id="textbox2"type="text" name="pincode"/><br/></div>

<div  class="inputbox2"><label for="city">City</label><br/>
<input id="textbox2" type="text"  name="city"/><br/></div>
<div class="inputbox2"><label for="state">State</label><br/>
<input id="textbox2" type="text"  name="state"/></div>
</div>

<div class="btn-form">
<button class="btn-6-form" type="submit">Submit</button></div>
   </form>
   
</div>
</div>
    );
}

