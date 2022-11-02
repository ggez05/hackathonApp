import React from "react";
import Navbar from "../navbar";
import { DropDownContext } from "../contextAPI";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import FileBase from "react-file-base64";

import { useContext } from "react";
import "./AddCard.style.css";
import { useState, useEffect } from "react";
import { createCard, updateCard } from "../../actions/card";
const AddCard = () => {
  const dispatch = useDispatch();

  const [chname, setChName] = useState("");
  const [startdate, setStartDate] = useState("");
  const [enddate, setEndDate] = useState("");
  const [descriptiontext, setDescriptionText] = useState("");
  const [imgurl, setimgurl] = useState("");
  const [leveltype, setLevelType] = useState("easy");
  const [status, setStatus] = useState("Upcoming");
  const [timerTITLE, setTimerTITLE] = useState("Starts in");
  const { currentId, setCurrentId } = useContext(DropDownContext);
  const navigate = useNavigate();

  const card = useSelector((card) => card.cards);
  const selectedCard = card.filter((item) => item._id === currentId);

  useEffect(() => {
    if (currentId) {
      setChName(selectedCard[0].title);
      const formatDate = new Date(selectedCard[0].enddate);
      const defaultValue = formatDate.toLocaleDateString("en-CA");
      const formatStartDate = new Date(selectedCard[0].startDate);
      const defaultValueStart = formatStartDate.toLocaleDateString("en-CA");
      setEndDate(defaultValue);
      setStartDate(defaultValueStart);
      setDescriptionText(selectedCard[0].description);
      setimgurl(selectedCard[0].img);
      setLevelType(selectedCard[0].difficulty);
    }
  }, []);

  useEffect(() => {
    const datecurrent = new Date();
    const setStartDate = new Date(startdate);
    const setEndDate = new Date(enddate);
    const startdiff = datecurrent - setStartDate;
    const enddiff = datecurrent - setEndDate;
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

    // form validation
    if (chname === "") {
      alert("Please Provide a title!!");
      return;
    } else if (startdate === "") {
      alert("Please Specify start date!!");
      return;
    } else if (enddate === "") {
      alert("Please Specify end date!!");
      return;
    } else if (descriptiontext === "") {
      alert("Please Provide a description!!");
      return;
    } else if (imgurl === null) {
      alert("Please Provide an Image!!");
      return;
    }
    const NewListObject = {
      img: imgurl,
      difficulty: leveltype,
      title: chname,
      description: descriptiontext,
      status: status,
      startDate: startdate,
      enddate: enddate,
      timertilte: timerTITLE,
    };
    if (currentId) {
      dispatch(updateCard(currentId, NewListObject));
      setCurrentId(null);
      alert("Updated Hackothon details!");
    } else {
      dispatch(createCard(NewListObject));
      alert("Added New Hackathon");
    }

    setTimeout(() => {
      navigate("/");
    }, 1000);
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
        <div className="addcard_img">
          <label className="image_label" htmlFor="image-input">
            Image
          </label>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setimgurl(base64)}
          />{" "}
        </div>
        {/** 
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
          */}
        <div className="image-display-addcard">
          {imgurl ? (
            <>
              <div>Image Preview : </div>
              <img id="base64image" src={imgurl} />
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
          <button className="addcard_button" onClick={addCardsubmitHandler}>
            {currentId ? "Update Challange" : "Create Challange"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCard;
