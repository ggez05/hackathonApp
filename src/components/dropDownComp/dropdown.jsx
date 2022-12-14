import React from "react";
import { useContext } from "react";
import { DropDownContext } from "../contextAPI";
import "./dropdown.style.css";

const Dropdown = ({ isdrop }) => {
  const {
    isall,
    isactive,
    iseasy,
    ishard,
    ismedium,
    ispast,
    isupcoming,
    setIsActive,
    setIsAll,
    setIsEasy,
    setIsHard,
    setIsMedium,
    setIsPast,
    setIsUpcoming,
  } = useContext(DropDownContext);

  return (
    <div className="drop-down-box">
      <div className="top-filter-wrapper" onClick={isdrop}>
        <div className="text-drop">Filter</div>
        <div className="image-drop"></div>
      </div>
      <div className="status-box-wrapper-u">
        <div className="status-text">Status</div>
        <div className="box-status-check-u">
          <input
            type="checkbox"
            name="all"
            id="all_checkbox"
            onClick={() => (isall ? setIsAll(false) : setIsAll(true))}
          />
          <div className="checkbox-text-u">All</div>
        </div>
        <div className="box-status-check-u">
          <input
            type="checkbox"
            name="active"
            id="active_checkbox"
            onClick={() => (isactive ? setIsActive(false) : setIsActive(true))}
          />
          <div className="checkbox-text-u">Active</div>
        </div>
        <div className="box-status-check-u">
          <input
            type="checkbox"
            name="upcoming"
            id="upcoming_checkbox"
            onClick={() =>
              isupcoming ? setIsUpcoming(false) : setIsUpcoming(true)
            }
          />
          <div className="checkbox-text-u">Upcoming</div>
        </div>
        <div className="box-status-check-u">
          <input
            className="input-box-u"
            type="checkbox"
            name="past"
            id="past_checkbox"
            onClick={() => (ispast ? setIsPast(false) : setIsPast(true))}
          />
          <div className="checkbox-text-u">Past</div>
        </div>
      </div>
      <div className="status-box-wrapper-u">
        <div className="status-text">Level</div>

        <div className="box-status-check-u">
          <input
            type="checkbox"
            name="easy"
            onClick={() => (iseasy ? setIsEasy(false) : setIsEasy(true))}
          />
          <div className="checkbox-text-u">Easy</div>
        </div>
        <div className="box-status-check-u">
          <input
            type="checkbox"
            name="medium"
            onClick={() => (ismedium ? setIsMedium(false) : setIsMedium(true))}
          />
          <div className="checkbox-text-u">Medium</div>
        </div>
        <div className="box-status-check-u">
          <input
            type="checkbox"
            name="hard"
            onClick={() => (ishard ? setIsHard(false) : setIsHard(true))}
          />
          <div className="checkbox-text-u">Hard</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
