import React from "react";
import Navbar from "../navbar";
import { DropDownContext } from "../contextAPI";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  Cards,
  activeCards,
  pastCards,
  easyCards,
  upcomingCards,
  hardCards,
  mediumCards,
} from "../../assests/cards-info";
import { useContext } from "react";
import "./AddCard.style.css";
import { useState, useEffect } from "react";
import { createCard } from "../../actions/card";
const AddCard = () => {
  const cards = useSelector((state) => state.cards);
  const dispatch = useDispatch();
  console.log(cards);

  const [chname, setChName] = useState("");
  const [startdate, setStartDate] = useState("");
  const [enddate, setEndDate] = useState("");
  const [descriptiontext, setDescriptionText] = useState("");
  const [imgurl, setimgurl] = useState(null);
  const [selectedimgUrl, setSelectedImgUrl] = useState(null);
  const [leveltype, setLevelType] = useState("easy");
  const [status, setStatus] = useState("Upcoming");
  const [timerTITLE, setTimerTITLE] = useState("Starts in");
  const { cardsContext, setCardsContext } = useContext(DropDownContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (imgurl) {
      setSelectedImgUrl(URL.createObjectURL(imgurl));
    }
  }, [imgurl]);

  useEffect(() => {
    const datecurrent = new Date();
    const setStartDate = new Date(startdate);
    const setEndDate = new Date(enddate);
    const startdiff = datecurrent - setStartDate;
    const enddiff = datecurrent - setEndDate;
    console.log(startdiff);
    console.log(enddiff);

    startdiff > 0 && enddiff > 0
      ? setStatus("Past")
      : enddiff < 0 && startdiff > 0
      ? setStatus("Active")
      : setStatus("Upcoming");

    status === "Active"
      ? setTimerTITLE("Ends in")
      : status === "Past"
      ? setTimerTITLE("Ended On")
      : setTimerTITLE("Starts in");
  }, [startdate, enddate, status]);

  const addCardsubmitHandler = (e) => {
    e.preventDefault();
    const NewListObject = {
      img: selectedimgUrl,
      difficulty: leveltype,
      title: chname,
      description: descriptiontext,
      status: status,
      enddate: enddate,
      timertilte: timerTITLE,
    };
    var newList = Cards;
    newList.push(NewListObject);
    dispatch(createCard(NewListObject));
    console.log(newList);
    console.log(cards);
  };

  return (
    <div>
      <Navbar />
      <div className="challange__bar">
        <div className="challange__bar_text"> Challange Details</div>
      </div>
      <div className="challange__form">
        <label htmlFor="ch_name">Challange Name</label>
        <div>
          <input
            type="text"
            name="ch_name"
            id="ch_name"
            value={chname}
            onChange={(e) => {
              setChName(e.target.value);
            }}
          />
        </div>
        <label htmlFor="ch_date">Start Date</label>
        <div>
          <input
            type="date"
            name="ch_date"
            placeholder="Add start date"
            id="ch_date"
            value={startdate}
            onChange={(e) => {
              setStartDate(e.target.value);
            }}
          />
        </div>
        <label htmlFor="ch_enddate">End Date</label>
        <div>
          <input
            type="date"
            name="ch_enddate"
            placeholder="Add end date"
            id="ch_enddate"
            value={enddate}
            onChange={(e) => {
              setEndDate(e.target.value);
            }}
          />
        </div>
        <label htmlFor="desc">Description </label>
        <div>
          <textarea
            name="desc"
            rows="10"
            cols="100"
            id="desc"
            value={descriptiontext}
            onChange={(e) => {
              setDescriptionText(e.target.value);
            }}
          />
        </div>
        <label htmlFor="image-input">Image</label>
        <div>
          <input
            type="file"
            id="image-input"
            accept="image/jpeg, image/png, image/jpg"
            placeholder="Upload"
            name="image-input"
            onChange={(e) => {
              setimgurl(e.target.files[0]);
            }}
          />
        </div>
        <div className="image-display-addcard">
          {imgurl && selectedimgUrl ? (
            <>
              <div>Image Preview : </div>{" "}
              <img src={selectedimgUrl} alt={imgurl.name} />{" "}
            </>
          ) : (
            ""
          )}
        </div>
        <label htmlFor="level">Level Type</label>
        <div>
          <select
            name="level"
            id="level"
            value={leveltype}
            onChange={(e) => setLevelType(e.target.value)}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div className="create__challange_button">
          <button onClick={addCardsubmitHandler}>Create Challange</button>
        </div>
      </div>
    </div>
  );
};

export default AddCard;
