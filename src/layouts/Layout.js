import React from "react";
import Header from "../components/header";
import Subheader from "../components/subheader";
import Footer from "../components/footer";

const Index = ({ children, subheader }) => {
  return (
    <>
      <Header logoOn={true} borderOn={true}></Header>
      <Subheader subheader={subheader}></Subheader>
      {children}
      <Footer></Footer>
    </>
  );
};

export default Index;
