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
  currentId: null,
  setIsActive: () => {},
  setIsAll: () => {},
  setIsEasy: () => {},
  setIsMedium: () => {},
  setIsHard: () => {},
  setIsUpcoming: () => {},
  setIsPast: () => {},
  cardsContext: Cards,
  setCardsContext: () => {},
  setCurrentId: () => {},
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

  const [currentId, setCurrentId] = useState(null);

  const value = {
    isall,
    isactive,
    isupcoming,
    ispast,
    iseasy,
    ishard,
    ismedium,
    cardsContext,
    currentId,
    setIsActive,
    setIsAll,
    setIsEasy,
    setIsHard,
    setIsMedium,
    setIsPast,
    setIsUpcoming,
    setCardsContext,
    setCurrentId,
  };
  return (
    <DropDownContext.Provider value={value}>
      {children}
    </DropDownContext.Provider>
  );
};

export default ContextAPI;
