import React from "react";
import img3 from '../assets/img3.png'
import "./header.css"

const Header2 =() =>{
    return (
      <nav className="navbar navbar-expand-lg navbar-fixed-right">
      <div className="container-fluid">
          <div className="navbar-brand">
              <a href="#" className="navbar-left nav-link active topleft "><img src={img3} class="rdw" alt="logo"/><span className="special-c">र</span>addiwala</a>
          </div>
      </div>
  </nav>
    );
  }

  export default Header2;