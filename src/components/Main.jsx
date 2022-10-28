import React, { useEffect } from "react";
import Header from "./header";
import MiddleComp from "./MiddleComp";
import StaticCards from "./static-cards";
import Main_section from "./Main_section";
import { getCards } from "../actions/card";
import { useDispatch } from "react-redux";
const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCards());
  }, [dispatch]);

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
