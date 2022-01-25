import React from "react";
import ProfileBtn from "../components/profilebtn.js";
import DashboardBody from "../components/dashboardbody.js"
import img3 from "../assets/img3.png"
import "../components/dashboard.css"

export default function Dashboard() {
    return (
    <div>    
    <div className="header">
        <div className = "logo-header">
            <img className="logo" src={img3} alt="logo"/>
            <h1 className="name"><span id="onHover">र</span><span id="notHover">addiwala</span></h1>
        </div>
        <ProfileBtn/>
    </div>
    <DashboardBody/>
    </div>
      );
}