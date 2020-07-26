import React from "react";

const Logo = ({ logoOn }) => {
  return (
    <div className={["logo", !logoOn ? "invisible" : ""].join(" ")}>
      <div>
        <p className="logo-text">Sophia</p>
        <p className="logo-text">Studio</p>
      </div>
    </div>
  );
};

export default Logo;
