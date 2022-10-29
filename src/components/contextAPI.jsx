import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const DropDownContext = createContext({
  isall: false,
  isactive: false,
  isupcoming: false,
  ispast: false,
  iseasy: false,
  ishard: false,
  ismedium: false,
  currentId: null,
  deleting: false,
  setIsActive: () => {},
  setIsAll: () => {},
  setIsEasy: () => {},
  setIsMedium: () => {},
  setIsHard: () => {},
  setIsUpcoming: () => {},
  setIsPast: () => {},
  setCardsContext: () => {},
  setCurrentId: () => {},
  setDeleting: () => {},
});

const ContextAPI = ({ children }) => {
  const [isall, setIsAll] = useState(false);
  const [isactive, setIsActive] = useState(false);

  const [isupcoming, setIsUpcoming] = useState(false);

  const [ispast, setIsPast] = useState(false);

  const [iseasy, setIsEasy] = useState(false);

  const [ismedium, setIsMedium] = useState(false);

  const [ishard, setIsHard] = useState(false);

  const [currentId, setCurrentId] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const value = {
    isall,
    isactive,
    isupcoming,
    ispast,
    iseasy,
    ishard,
    ismedium,
    currentId,
    deleting,
    setIsActive,
    setIsAll,
    setIsEasy,
    setIsHard,
    setIsMedium,
    setIsPast,
    setIsUpcoming,
    setCurrentId,
    setDeleting,
  };
  return (
    <DropDownContext.Provider value={value}>
      {children}
    </DropDownContext.Provider>
  );
};

export default ContextAPI;
