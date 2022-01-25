import React, {Component} from "react";
import ReactDOM from 'react-dom';
import Ellipse1 from "../assets/Ellipse1.png"
import img1d from "../assets/img1d.png"
import img2d from "../assets/img2d.png"
import img3d from "../assets/img3d.png"
import img4d from "../assets/img4d.png"
import img5d from "../assets/img5d.png"

class ProfileBtn extends Component{
    constructor(){
        super();

    }
    ontoggle(event){

    }
    render(){
        return(
        <div class="action">
        <div class="action">
        <div class="profile">
            <img class="asset/profile-img" src={Ellipse1} alt="logo"/>
        </div>
        <div class="menu">
            <h3>
                User Account
            </h3>
            <ul>
               <li><img src={img1d} alt="Profile"/><a href="#">Profile</a></li>
               <li><img src={img2d} alt="Edit Profile"/><a href="#">Edit Profile</a></li>
               <li><img src={img3d} alt="Settings"/><a href="#">Settings</a></li>
               <li><img src={img4d} alt="Help"/><a href="#">Help</a></li>
               <li><img src={img5d} alt="Logout"/><a href="#">Logout</a></li>
            </ul>
        </div>
    </div>  
    </div>)
    }
}
export default ProfileBtn;