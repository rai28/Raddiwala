import React, {Component} from "react";
import "./datetime-form.css"

class DateForm extends Component{
   constructor(){
        super();
   }
    render() {
    return(
<div>
 <div class="main-div">
    <form action="/" method="post">
    <div class="pickup-date">
    <p class="select-para">Select Pickup Date :</p>
    <div class="day1"><span>
         <label class = "label-class" for="day">Day:</label>
         <select name="day" id="day" onChange={(e) =>this.dayOnChange}></select>
      </span></div>
      <div class="month1"> <span>
         <label class = "label-class" for="month">Month:</label>
         <select name="month" id="month" onChange={(e) =>this.monthOnChange}></select>
      </span></div>

      <div class="year1"><span>
         <label class = "label-class" for="year">Year:</label>
         <select name="year" id="year" onChange={(e) =>this.yearOnChange}>Year:</select>
      </span></div>
     </div>
      
<div class="pickup-time">
<label class = "label-class" for="appt">Select Pickup Time:</label>
</div>
<div class="pickup-time-input"><input type="time" id="appt" name="appt" min="09:00" max="20:00" required/></div>


<div class="addr">
   <label class = "label-class" for="address">Address</label><br/>
   <textarea type="text" id="textbox1" name="address" cols="40" rows="5"></textarea><br/></div>

<div class="input-info">
<div class="inputbox2"><label class = "label-class" for="pincode">Pincode</label><br/>
<input id="textbox2"type="text" name="pincode"/><br/></div>

<div  class="inputbox2"><label class = "label-class" for="city">City</label><br/>
<input id="textbox2" type="text"  name="city"/><br/></div>
<div class="inputbox2"><label class = "label-class" for="state">State</label><br/>
<input id="textbox2" type="text"  name="state"/></div>
</div>

<div class="btn-form">
<button class="btn-6-form" type="submit">Submit</button></div>
   </form>
   
</div>
</div>
    );
}
}
export default DateForm