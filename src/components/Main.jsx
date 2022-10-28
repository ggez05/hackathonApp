import React from "react";
import Header from "./header";
import MiddleComp from "./MiddleComp";
import StaticCards from "./static-cards";
import Main_section from "./Main_section";

const Main = () => {
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
