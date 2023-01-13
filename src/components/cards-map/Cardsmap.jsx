import React from "react";
import Timer from "../timerComp/timercomp";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DropDownContext } from "../contextAPI";
import moment from "moment";

const Cardsmap = ({ Searchedcards }) => {
  const navigate = useNavigate();

  const getTime = (startDate) => {
    const date = moment(startDate);
    const datenow = moment(new Date());
    const difff = date.diff(datenow, "hours");
    return difff;
  };
  const getfrom = (startDate) => {
    const date = moment(startDate);
    const datenow = moment(new Date());
    const difff = date.from(datenow);
    return difff;
  };

  return Searchedcards.map((item, i) => {
    return (
      <div key={i} className="card">
        <div className="imagecont">
          <img className="card__image" src={item.img} alt="" />
        </div>
        <div
          className={`status ${item.status === "Active" ? "active" : ""} ${
            getTime(item.startDate) < 0 ? "past" : ""
          }`}
        >
          {getTime(item.startDate) < 0
            ? "Ended On"
            : getTime(item.startDate) > 0
            ? "Starts in"
            : "Ends in"}
        </div>
        <div className="title">{item.title}</div>
        <div className="timer__wrapper">
          <div
            className={`timer ${
              getTime(item.startDate) < 0 ? "timer-small" : "timer-endson"
            }`}
          >
            {getTime(item.startDate) < 0
              ? item.enddate
              : // <Timer endDate={item.enddate} startdate={item.startDate} />
                getfrom(item.startDate)}
          </div>
        </div>
        <div
          className={`participate ${
            getTime(item.startDate) < 0 ? "p-past" : ""
          }`}
        >
          <div className="participate-icon"></div>
          <button
            onClick={() => navigate("/cardpreview", { state: item })}
            className={`participate-button ${
              getTime(item.startDate) < 0 ? "p-past" : ""
            }`}
          >
            Participate Now
          </button>
        </div>
      </div>
    );
  });
};

export default Cardsmap;
