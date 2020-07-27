import React from "react";
import Header from "../components/header";

const IndexLayout = ({ children }) => {
  return (
    <>
      <Header logoOn={false} borderOn={false}></Header>
      {children}
    </>
  );
};

export default IndexLayout;
