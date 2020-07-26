import React from "react";
import Header from "../components/header";

const Index = ({ children }) => {
  return (
    <>
      <Header logoOn={true}></Header>
      {children}
    </>
  );
};

export default Index;
