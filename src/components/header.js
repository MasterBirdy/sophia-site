import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import Logo from "../components/logo";
import CartButton from "../components/cartbutton";

const Header = ({ logoOn, borderOn }) => {
  return (
    <header className={["header", borderOn ? "border-on" : ""].join(" ")}>
      <Logo logoOn={logoOn}></Logo>
      <div className="header-links">
        <div className="header-link-div">
          {" "}
          <Link to="/contact-us">Contact Us</Link>
        </div>
        <div className="header-link-div">
          {" "}
          <Link to="/">About</Link>
        </div>
        <div className="header-link-div">
          {" "}
          <Link to="/shop-projects">Shop Projects</Link>
        </div>
      </div>
      <CartButton logoOn={true}></CartButton>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  logoOn: PropTypes.bool,
  borderOn: PropTypes.bool,
  isIn: PropTypes.bool,
  timeout: PropTypes.number,
};

Header.defaultProps = {
  siteTitle: ``,
  logoOn: true,
  borderOn: true,
  isIn: false,
  timeout: 500,
};

export default Header;
