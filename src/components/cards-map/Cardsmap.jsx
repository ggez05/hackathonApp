import React from "react";
import Timer from "../timerComp/timercomp";
import { useNavigate } from "react-router-dom";

const Cardsmap = ({ Searchedcards }) => {
  const navigate = useNavigate();

  return Searchedcards.map((item, i) => {
    return (
      <div key={i} className="card">
        <div className="imagecont">
          <img className="card__image" src={item.img} alt="" />
        </div>
        <div
          className={`status ${item.status === "Active" ? "active" : ""} ${
            item.status === "Past" ? "past" : ""
          }`}
        >
          {item.status}
        </div>
        <div className="title">{item.title}</div>
        <div className="timer__wrapper">
          <div className="timertitle">{item.timertilte}</div>
          <div
            className={`timer ${
              item.timertilte === "Ended On" ? "timer-small" : ""
            }`}
          >
            {item.timertilte === "Ended On" ? (
              item.enddate
            ) : (
              <Timer endDate={item.enddate} startdate={item.startDate} />
            )}
          </div>
          <div
            className={`timer-subs ${
              item.timertilte === "Ended On" ? "timer-subs-none" : ""
            }`}
          >
            <p>Days Hours Minutes</p>
          </div>
        </div>
        <div
          className={`participate ${item.status === "Past" ? "p-past" : ""}`}
        >
          <div className="participate-icon"></div>
          <button
            onClick={() => navigate("/cardpreview", { state: item })}
            className={`participate-button ${
              item.status === "Past" ? "p-past" : ""
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
