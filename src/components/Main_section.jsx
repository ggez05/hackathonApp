import React from "react";
import { Fragment } from "react";
import Dropdown from "./dropDownComp/dropdown";
import {
  Cards,
  activeCards,
  upcomingCards,
  easyCards,
  mediumCards,
  hardCards,
  pastCards,
} from "../assests/cards-info";
import Cardsmap from "./cards-map/Cardsmap";
import "./Main_section.style.css";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { DropDownContext } from "./contextAPI";
const Main_section = () => {
  const [Searchedcards, setSearchedCards] = useState(Cards);
  const [searchString, setSearchString] = useState("");
  const [dropDown, setDropDown] = useState(false);

  const {
    isall,
    isactive,
    iseasy,
    ishard,
    ismedium,
    ispast,
    isupcoming,
    cardsContext,
  } = useContext(DropDownContext);

  useEffect(() => {
    const searched = Cards.filter((elem) => {
      return elem.title
        .toLocaleLowerCase()
        .includes(searchString.toLocaleLowerCase());
    });
    setSearchedCards(searched);
  }, [searchString]);

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
        <div className="cards-container">
          {isall && ishard ? (
            <>
              <Cardsmap Searchedcards={hardCards} />
              <Cardsmap Searchedcards={easyCards} />
              <Cardsmap Searchedcards={mediumCards} />
            </>
          ) : isall && ismedium ? (
            <>
              <Cardsmap Searchedcards={mediumCards} />
              <Cardsmap Searchedcards={easyCards} />
              <Cardsmap Searchedcards={hardCards} />
            </>
          ) : isall && iseasy ? (
            <>
              <Cardsmap Searchedcards={easyCards} />
              <Cardsmap Searchedcards={mediumCards} />
              <Cardsmap Searchedcards={hardCards} />
            </>
          ) : isall && isupcoming ? (
            <>
              <Cardsmap Searchedcards={upcomingCards} />
              <Cardsmap Searchedcards={activeCards} />
              <Cardsmap Searchedcards={pastCards} />
            </>
          ) : isall && ispast ? (
            <>
              <Cardsmap Searchedcards={pastCards} />
              <Cardsmap Searchedcards={activeCards} />
              <Cardsmap Searchedcards={upcomingCards} />
            </>
          ) : isall && isactive ? (
            <>
              <Cardsmap Searchedcards={activeCards} />
              <Cardsmap Searchedcards={upcomingCards} />
              <Cardsmap Searchedcards={pastCards} />
            </>
          ) : isactive && ispast ? (
            <>
              <Cardsmap Searchedcards={activeCards} />
              <Cardsmap Searchedcards={pastCards} />
            </>
          ) : ispast && isupcoming ? (
            <>
              <Cardsmap Searchedcards={upcomingCards} />
              <Cardsmap Searchedcards={pastCards} />
            </>
          ) : isupcoming && isactive ? (
            <>
              <Cardsmap Searchedcards={upcomingCards} />
              <Cardsmap Searchedcards={activeCards} />
            </>
          ) : isall ||
            (ispast && isactive && isupcoming) ||
            (iseasy && ishard && ismedium) ? (
            <Cardsmap Searchedcards={Searchedcards} />
          ) : iseasy && ishard ? (
            <>
              <Cardsmap Searchedcards={easyCards} />
              <Cardsmap Searchedcards={hardCards} />
            </>
          ) : iseasy && ismedium ? (
            <>
              <Cardsmap Searchedcards={easyCards} />
              <Cardsmap Searchedcards={mediumCards} />
            </>
          ) : ismedium && ishard ? (
            <>
              <Cardsmap Searchedcards={mediumCards} />
              <Cardsmap Searchedcards={hardCards} />
            </>
          ) : ispast ? (
            <Cardsmap Searchedcards={hardCards} />
          ) : isupcoming ? (
            <Cardsmap Searchedcards={upcomingCards} />
          ) : iseasy ? (
            <Cardsmap Searchedcards={easyCards} />
          ) : ishard ? (
            <Cardsmap Searchedcards={hardCards} />
          ) : ismedium ? (
            <Cardsmap Searchedcards={mediumCards} />
          ) : isactive ? (
            <Cardsmap Searchedcards={activeCards} />
          ) : (
            <Cardsmap Searchedcards={Searchedcards} />
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Main_section;
