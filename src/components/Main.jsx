import React, { useEffect } from "react";
import Header from "./header";
import MiddleComp from "./MiddleComp";
import StaticCards from "./static-cards";
import Main_section from "./Main_section";
import { getCards } from "../actions/card";
import { useDispatch } from "react-redux";
import { useContext } from "react";
import { DropDownContext } from "./contextAPI";
const Main = () => {
  const dispatch = useDispatch();
  const { currentId, deleting } = useContext(DropDownContext);
  useEffect(() => {
    dispatch(getCards());
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
