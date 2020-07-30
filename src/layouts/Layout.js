import React from "react";
import Header from "../components/header";
import Subheader from "../components/subheader";
import Footer from "../components/footer";

const Layout = ({ children, subheader, isIn }) => {
  return (
    <>
      <Header logoOn={true} borderOn={true}></Header>
      <Subheader subheader={subheader} isIn={isIn}></Subheader>
      {children}
      <Footer></Footer>
    </>
  );
};

export default Layout;
