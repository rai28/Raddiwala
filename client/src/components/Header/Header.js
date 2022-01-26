import React from "react";
import { useSelector } from "react-redux";
import ProfileDropdown from "../../components/ProfileDropdown";
import { Link } from "react-router-dom";
import img3 from "../../assets/img3.png";
import "./header.css";

const Header = () => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  return (
    <nav className="navbar navbar-expand-lg navbar-fixed-right">
      <div className="container-fluid">
        <div className="navbar-brand">
          <Link to="/" className="navbar-left nav-link active topleft ">
            <img src={img3} class="rdw" alt="logo" />
            <span className="special-c">र</span>addiwala
          </Link>
        </div>

        <button
          className="navbar-toggler navbar-dark bg-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/rewards"
                className="nav-link active fonthead rewards-header-a"
              >
                Rewards
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-link active fonthead rewards-header-a"
               
              >
                About Us!
              </Link>
            </li>
          </ul>
          {userInfo ? (
            <div>
              <ProfileDropdown />
            </div>
          ) : (
            <Link to="/register">
              <button type="button" class="btn btn-custom2 btn-lg ">
                <span className="Signup-btn">Sign Up!</span>
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
