import React from "react";
import ReactDOM from 'react-dom';
import "./dashboard.css"
import image8 from "../assets/image8.png"
import image6 from "../assets/image6.png"
import image7 from "../assets/image7.png"

const DashboardBody=()=>{
return(
<div class = "main">
        <div className = "dashboard-part1">
            <h1 className="TitleD1">Hello Ritesh</h1>
            <h2 className="TitleD2">You have helped in recycling 20Kgs of waste</h2>
            <div className="buttons">
            <button className="button-5" type="button">Recycle More</button>
            <button className="button-6" type="button">Recycle History</button>
            </div>
        </div>
        <div className = "dashboard-part2">
            <div className="box">
                <h2>Rewards Earned</h2>
                <div>
                <ul>
                    <li><img src={image8} alt = "points"/><a className= "effect-underline" href="#">Green Points</a></li>
                    <li><img src={image6} alt = "Vouchers"/><a className= "effect-underline" href="#">Vouchers</a></li>
                    <li><img src={image7} alt = "Cash"/><a className= "effect-underline" href="#">Cash</a></li>
                </ul>
                </div>
            </div>
        </div>
    </div>
);
}

export default DashboardBody;