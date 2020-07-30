import React from "react";
import Header from "../components/header";
import IndexFooter from "../components/indexfooter";

const IndexLayout = ({ children, isIn, entry, exit }) => {
  return (
    <>
      <Header
        logoOn={false}
        borderOn={false}
        timeout={1000}
        isIn={isIn}
        entry={entry}
        exit={exit}
      ></Header>
      {children}
      <IndexFooter isIn={isIn}></IndexFooter>
    </>
  );
};

export default IndexLayout;
