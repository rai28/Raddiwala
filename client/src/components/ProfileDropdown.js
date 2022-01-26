import React from "react";
import { Link } from "react-router-dom";
import { signout } from "../actions/userActions";
import Ellipse1 from "../assets/Ellipse1.png";
import img1d from "../assets/img1d.png";
import img2d from "../assets/img2d.png";
import img3d from "../assets/img3d.png";
import img4d from "../assets/img4d.png";
import img5d from "../assets/img5d.png";
import { useDispatch } from "react-redux";

const onTog = () => {
  const toggleMenu = document.querySelector(".menu");
  toggleMenu.classList.toggle("active");
};

export default function ProfileDropdown() {
  // user signoutHandler
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <div class="action">
      <div class="action">
        <div class="profile">
          <img
            class="asset/profile-img"
            src={Ellipse1}
            alt="logo"
            onClick={onTog}
          />
        </div>
        <div class="menu">
          <h3>User Account</h3>
          <ul>
            <li>
              <img src={img1d} alt="Profile" />
              <Link to="/dashboard">Profile</Link>
            </li>
            <li>
              <img src={img2d} alt="Edit Profile" />
              <Link to="#">Edit Profile</Link>
            </li>
            <li>
              <img src={img3d} alt="Settings" />
              <Link to="#">Settings</Link>
            </li>
            <li>
              <img src={img4d} alt="Help" />
              <Link to="#">Help</Link>
            </li>
            <li>
              <img src={img5d} alt="Logout" />
              <Link to="/signout" onClick={signoutHandler}>
                signout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
