import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./dashboard.css";
import LogoHeader from "../components/Header/LogoHeader";
import image8 from "../assets/image8.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";

const DashboardBody = () => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  return (
    <div>
      <LogoHeader />
      <div class="main">
        <div className="dashboard-part1">
          <h1 className="TitleD1">Hello {userInfo.name}</h1>
          <h2 className="TitleD2">
            You have helped in recycling "x"Kgs of waste
          </h2>
          <div className="buttons">
          <Link to="/form1" className="link-recycle-more common-link-class">
            <button className="button-5" type="button">
              Recycle More
              </button>
              </Link>
            <Link to="/History" className="link-Recycle-History common-link-class">
            <button className="button-6" type="button">
              Recycle History
            </button>
            </Link>
          </div>
        </div>
        <div className="dashboard-part2">
          <div className="box">
            <h2>Rewards Earned</h2>
            <div>
              <ul>
                <li>
                  <img src={image8} alt="points" />
                  <Link to="#" className="effect-underline">
                    Green Points
                  </Link>
                </li>
                <li>
                  <img src={image6} alt="Vouchers" />
                  <Link to="#" className="effect-underline">
                    Vouchers
                  </Link>
                </li>
                <li>
                  <img src={image7} alt="Cash" />
                  <Link to="#" className="effect-underline">
                    Cash
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardBody;
