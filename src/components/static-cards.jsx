import React from "react";
import "./static-cards.style.css";

const StaticCards = () => {
  return (
    <>
      <div className="text-wrapper-upper">
        <p>
          <strong>
            Why Participate in <span className="green-text">AI Challanges</span>
          </strong>
        </p>
      </div>
      <div className="static-cards-wrapper">
        <div className="static-card">
          <div className="static-card-img1"></div>
          <div className="static-card-main-text">
            <strong>Prove your skills</strong>
          </div>
          <div className="static-card-sub-text">
            Gain substantial experience by solving real-world problems and pit
            against others to come up with innovative solutions.
          </div>
        </div>
        <div className="static-card">
          <div className="static-card-img2"></div>
          <div className="static-card-main-text">
            <strong>Learn from community</strong>
          </div>
          <div className="static-card-sub-text">
            One can look and analyze the solutions submitted by the other Data
            Scientists in the community and learn from them.
          </div>
        </div>
        <div className="static-card">
          <div className="static-card-img3"></div>
          <div className="static-card-main-text">
            <strong>Challange yourself</strong>
          </div>
          <div className="static-card-sub-text">
            There is nothing for you to lose by participating in a challenge.
            You can fail safe, learn out of the entire experience and bounce
            back harder.
          </div>
        </div>
        <div className="static-card">
          <div className="static-card-img4"></div>
          <div className="static-card-main-text">
            <strong>Earn recognition</strong>
          </div>
          <div className="static-card-sub-text">
            You will stand out from the crowd if you do well in AI challenges,
            it not only helps you shine in the community but also earns rewards.
          </div>
        </div>
      </div>
    </>
  );
};

export default StaticCards;
