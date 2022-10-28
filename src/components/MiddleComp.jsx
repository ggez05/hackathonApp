import React from "react";
import "./MiddleComp.style.css";

const MiddleComp = () => {
  return (
    <div className="middle-container">
      <div className="first-box">
        <div className="image-box-container">
          <div className="first-box-image-container"></div>
        </div>
        <div className="first-box-text-container">
          <div className="title-box">
            <strong>100K+</strong>
          </div>
          <div className="subs-box">AI Model submissions</div>
        </div>
      </div>
      <div className="second-box">
        <div className="image-box-container">
          <div className="second-box-image-container"></div>
        </div>
        <div className="second-box-text-container">
          <div className="title-box">
            <strong>50K+</strong>
          </div>
          <div className="subs-box">Data Scientists</div>
        </div>
      </div>
      <div className="third-box">
        <div className="image-box-container">
          <div className="third-box-image-container"></div>
        </div>
        <div className="third-box-text-container">
          <div className="title-box">
            <strong>100+</strong>
          </div>
          <div className="subs-box">AI Challanges Hosted</div>
        </div>
      </div>
    </div>
  );
};

export default MiddleComp;
