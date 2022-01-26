import React from "react";
import ReactDOM from 'react-dom';
import img3 from '../assets/img3.png'
import "./combined.css"

const Header =() =>{
    return (
      <nav className="navbar navbar-expand-lg navbar-fixed-right">
      <div className="container-fluid">
          <div className="navbar-brand">
              <a href="#" className="navbar-left nav-link active topleft "><img src={img3} class="rdw" alt="logo"/><span className="special-c">र</span>addiwala</a>
          </div>

          <button className="navbar-toggler navbar-dark bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active fonthead rewards-header-a" href="#">Rewards</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fonthead rewards-header-a" href="#">About Us!</a>
              </li>
              </ul>
              <button type="button" class="btn btn-custom2 btn-lg "><span className="Signup-btn">Sign Up!</span></button>
          </div>
      </div>
  </nav>
    );
  }

  export default Header;