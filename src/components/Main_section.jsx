import React from "react";
import { Fragment } from "react";
import Dropdown from "./dropDownComp/dropdown";

import Cardsmap from "./cards-map/Cardsmap";
import "./Main_section.style.css";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { DropDownContext } from "./contextAPI";
import { useSelector } from "react-redux";
const Main_section = () => {
  const cards = useSelector((card) => card.cards);
  const [Searchedcards, setSearchedCards] = useState(cards);
  const [searchString, setSearchString] = useState("");
  const [dropDown, setDropDown] = useState(false);
  const [activecards, setActiveCARDS] = useState(cards);
  const [upcomingcards, setUpcomingCARDS] = useState(cards);
  const [pastcards, setPastCARDS] = useState(cards);
  const [hardcards, setHardCARDS] = useState(cards);
  const [easycards, setEasyCARDS] = useState(cards);
  const [mediumcards, setMediumCARDS] = useState(cards);

  const { isall, isactive, iseasy, ishard, ismedium, ispast, isupcoming } =
    useContext(DropDownContext);

  useEffect(() => {
    const searched = cards.filter((elem) => {
      return elem.title
        .toLocaleLowerCase()
        .includes(searchString.toLocaleLowerCase());
    });
    setSearchedCards(searched);
  }, [searchString, cards]);
  useEffect(() => {
    const searchedactive = cards.filter((elem) => {
      return elem.status === "Active";
    });
    setActiveCARDS(searchedactive);
    const searchedpast = cards.filter((elem) => {
      return elem.status === "Past";
    });
    setPastCARDS(searchedpast);
    const searchedupcoming = cards.filter((elem) => {
      return elem.status === "Upcoming";
    });
    setUpcomingCARDS(searchedupcoming);
    const searchedeasy = cards.filter((elem) => {
      return elem.difficulty === "easy";
    });
    setEasyCARDS(searchedeasy);
    const searchedmedium = cards.filter((elem) => {
      return elem.difficulty === "medium";
    });
    setMediumCARDS(searchedmedium);
    const searchedhard = cards.filter((elem) => {
      return elem.difficulty === "hard";
    });
    setHardCARDS(searchedhard);
  }, [dropDown, cards]);

  const handleDropdown = () => {
    setDropDown(!dropDown);
    setSearchString("");
  };

  return (
    <Fragment>
      <div className="search-box-wrapper">
        <div className="search-box-text-explore">Explore Challenges</div>
        <div className="search-box-input-wrapper">
          <div className="search-box-input">
            <button className="button1">
              <div className="search-image"></div>
            </button>
            <input
              className="input-search_box"
              type="text"
              placeholder="Search"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
            ></input>
          </div>
          {!dropDown ? (
            <div className="filter-button" onClick={handleDropdown}>
              <button className="button2">Filter</button>
              <div className="filter-icon"></div>
            </div>
          ) : (
            <Dropdown isdrop={handleDropdown} />
          )}
        </div>
      </div>

      <div className="lastsection">
        <div className="giforcards">
          {cards.length === 0 ? (
            <div className="loadinggif"></div>
          ) : (
            <div className="cards-container">
              {isall && ishard ? (
                <>
                  <Cardsmap Searchedcards={hardcards} />
                  <Cardsmap Searchedcards={easycards} />
                  <Cardsmap Searchedcards={mediumcards} />
                </>
              ) : isall && ismedium ? (
                <>
                  <Cardsmap Searchedcards={mediumcards} />
                  <Cardsmap Searchedcards={easycards} />
                  <Cardsmap Searchedcards={hardcards} />
                </>
              ) : isall && iseasy ? (
                <>
                  <Cardsmap Searchedcards={easycards} />
                  <Cardsmap Searchedcards={mediumcards} />
                  <Cardsmap Searchedcards={hardcards} />
                </>
              ) : isall && isupcoming ? (
                <>
                  <Cardsmap Searchedcards={upcomingcards} />
                  <Cardsmap Searchedcards={activecards} />
                  <Cardsmap Searchedcards={pastcards} />
                </>
              ) : isall && ispast ? (
                <>
                  <Cardsmap Searchedcards={pastcards} />
                  <Cardsmap Searchedcards={activecards} />
                  <Cardsmap Searchedcards={upcomingcards} />
                </>
              ) : isall && isactive ? (
                <>
                  <Cardsmap Searchedcards={activecards} />
                  <Cardsmap Searchedcards={upcomingcards} />
                  <Cardsmap Searchedcards={pastcards} />
                </>
              ) : isactive && ispast ? (
                <>
                  <Cardsmap Searchedcards={activecards} />
                  <Cardsmap Searchedcards={pastcards} />
                </>
              ) : ispast && isupcoming ? (
                <>
                  <Cardsmap Searchedcards={upcomingcards} />
                  <Cardsmap Searchedcards={pastcards} />
                </>
              ) : isupcoming && isactive ? (
                <>
                  <Cardsmap Searchedcards={upcomingcards} />
                  <Cardsmap Searchedcards={activecards} />
                </>
              ) : isall || (ispast && isactive && isupcoming) ? (
                <Cardsmap Searchedcards={Searchedcards} />
              ) : iseasy && ishard ? (
                <>
                  <Cardsmap Searchedcards={easycards} />
                  <Cardsmap Searchedcards={hardcards} />
                </>
              ) : iseasy && ismedium ? (
                <>
                  <Cardsmap Searchedcards={easycards} />
                  <Cardsmap Searchedcards={mediumcards} />
                </>
              ) : ismedium && ishard ? (
                <>
                  <Cardsmap Searchedcards={mediumcards} />
                  <Cardsmap Searchedcards={hardcards} />
                </>
              ) : ispast ? (
                <Cardsmap Searchedcards={hardcards} />
              ) : isupcoming ? (
                <Cardsmap Searchedcards={upcomingcards} />
              ) : iseasy ? (
                <Cardsmap Searchedcards={easycards} />
              ) : ishard ? (
                <Cardsmap Searchedcards={hardcards} />
              ) : ismedium ? (
                <Cardsmap Searchedcards={mediumcards} />
              ) : isactive ? (
                <Cardsmap Searchedcards={activecards} />
              ) : (
                <Cardsmap Searchedcards={Searchedcards} />
              )}
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Main_section;
