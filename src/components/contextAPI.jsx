import React from "react";
import { createContext } from "react";
import { useState } from "react";
import { Cards, activeCards } from "../assests/cards-info";

export const DropDownContext = createContext({
  isall: false,
  isactive: false,
  isupcoming: false,
  ispast: false,
  iseasy: false,
  ishard: false,
  ismedium: false,
  setIsActive: () => {},
  setIsAll: () => {},
  setIsEasy: () => {},
  setIsMedium: () => {},
  setIsHard: () => {},
  setIsUpcoming: () => {},
  setIsPast: () => {},
  cardsContext: Cards,
  setCardsContext: () => {},
});

const ContextAPI = ({ children }) => {
  const [isall, setIsAll] = useState(false);
  const [isactive, setIsActive] = useState(false);

  const [isupcoming, setIsUpcoming] = useState(false);

  const [ispast, setIsPast] = useState(false);

  const [iseasy, setIsEasy] = useState(false);

  const [ismedium, setIsMedium] = useState(false);

  const [ishard, setIsHard] = useState(false);

  const [cardsContext, setCardsContext] = useState(Cards);

  const value = {
    isall,
    isactive,
    isupcoming,
    ispast,
    iseasy,
    ishard,
    ismedium,
    cardsContext,
    setIsActive,
    setIsAll,
    setIsEasy,
    setIsHard,
    setIsMedium,
    setIsPast,
    setIsUpcoming,
    setCardsContext,
  };
  return (
    <DropDownContext.Provider value={value}>
      {children}
    </DropDownContext.Provider>
  );
};

export default ContextAPI;
