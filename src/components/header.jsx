import React from "react";
import "./header.style.css";
import { rocketImg } from "../assests/images";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";

const Header = () => {
  const navigate = useNavigate();

  const onNavigateHandler = () => {
    navigate("/addcard");
  };
  return (
    <>
      <Navbar />
      <div className="middle-upper-box">
        <div className="middle-box1">
          <div className="middle-box-main-text-wrapper">
            <div className="box1-main-text">Accelerate Innovation</div>
            <div className="box1-main-text">with Global AI Challenges</div>
          </div>
          <div className="box1-text">
            AI Challenges at DPhi simulate real-world problems. It is a great
            place to put your AI/Data Science skills to test on diverse datasets
            allowing you to foster learning through competitions.
          </div>
          <div className="box1-button-wrapper">
            <button className="box1-button" onClick={onNavigateHandler}>
              Create Challange
            </button>
          </div>
        </div>
        <div className="middle-box2">
          <img src={rocketImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
