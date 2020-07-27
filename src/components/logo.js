import React from "react";
import { Link } from "gatsby";

const Logo = ({ logoOn }) => {
  return (
    <div className={["logo", !logoOn ? "invisible" : ""].join(" ")}>
      <Link to="/">
        <div>
          <p className="logo-text first-name">Sophie</p>
          <p className="logo-text">Studio</p>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
