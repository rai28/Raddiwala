import React from "react";
import { Link } from 'react-router-dom';

import img3 from '../assets/img3.png'
import "./combined.css"

const Header2 =() =>{
    return (
      <nav className="navbar navbar-expand-lg navbar-fixed-right">
      <div className="container-fluid">
          <div className="navbar-brand">
            <Link to="/" className="navbar-left nav-link active topleft "><img src={img3} class="rdw" alt="logo"/><span className="special-c">र</span>addiwala</Link>
          </div>
      </div>
  </nav>
    );
  }

  export default Header2;