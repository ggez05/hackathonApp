import React, { useEffect } from "react";
import Header from "./header";
import MiddleComp from "./MiddleComp";
import StaticCards from "./static-cards";
import Main_section from "./Main_section";
import { useDispatch } from "react-redux";
import { useContext } from "react";
import { DropDownContext } from "./contextAPI";
import { getCards } from "../actions/card";
const Main = () => {
  const dispatch = useDispatch();
  const { currentId, deleting } = useContext(DropDownContext);
  useEffect(() => {
    console.log("Getting cards now! from main.js");
    const dispatchgetcards = async () => {
      dispatch(getCards());
      console.log("dispatch function");
    };
    dispatchgetcards();
    console.log("Getting cards now! from main.js");
  }, [dispatch, currentId, deleting]);
  return (
    <div>
      <Header />
      <MiddleComp />
      <StaticCards />
      <Main_section />
    </div>
  );
};

export default Main;
