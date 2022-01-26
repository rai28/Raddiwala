import React from "react";
import ProfileBtn from "../components/profilebtn.js";
import DashboardBody from "../components/dashboardbody.js"
import img3 from "../assets/img3.png"
import "../components/dashboard.css"
import Header2 from "../components/header2.js";

export default function Dashboard() {
    return (
    <div>    
    <div className="header">
        <Header2/>
        <ProfileBtn/>
    </div>
    <DashboardBody/>
    </div>
      );
}