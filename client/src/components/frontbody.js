import React from "react";
import ReactDOM from 'react-dom';
import "./header.css"
import img2 from "../assets/img2.png"
import img1 from "../assets/img1.png"

const FrontBody=()=>{
    return (
    <div className="container ">
		<div className="container-fluid p-5 col">
			<h1 className="head1">An Initiative towards <span className="title" >clean environment</span></h1>
            <div className="mid">
				<p><img src={img1} className="img1"/> <span className="to">  To  </span> <img src={img2} className="img2"/></p>
			</div>
            <div className="logo-tag">
            <span className="img-tags">Waste</span>
            <span className="img-tags">Bucks</span>
            </div>
            <div className="text-center">
                <button type="button" className="btn btn-custom btn-lg ">Sell Now!</button>
            </div>
	    </div>
    </div>
    );
}

export default FrontBody;