import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../navbar";
import { useNavigate } from "react-router-dom";
import { DropDownContext } from "../contextAPI";
import { useContext } from "react";

import "./CardPage.styles.css";

const CardPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setCurrentId } = useContext(DropDownContext);

  const edithandler = () => {
    setCurrentId(location.state._id);
    navigate("/addcard");
  };

  return (
    <>
      <Navbar />
      <div className="cardpage_topcontainer">
        <div className="cardpage_startalert">
          {location.state.timertilte} {location.state.enddate}
        </div>

        <div className="cardpage_title">{location.state.title}</div>
        <div className="cardpage_difficulty">{location.state.difficulty}</div>
      </div>
      <div className="cardpage_middlecontainer">
        <div className="cardpage_middleoverview">Overview</div>
        <div className="cardpage_deletebutton">Delete</div>
        <div onClick={edithandler} className="cardpage_editbutton">
          Edit
        </div>
      </div>

      <div className="cardpage_description">{location.state.description}</div>
    </>
  );
};

export default CardPage;
