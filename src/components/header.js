import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Logo from "../components/logo";
import CartButton from "../components/cartbutton";

const Header = ({ siteTitle, logoOn, borderOn }) => (
  <header className={["header", borderOn ? "border-on" : ""].join(" ")}>
    <Logo logoOn={logoOn}></Logo>
    <div className="header-links">
      <Link to="/contact-us">Contact Us</Link>
      <Link to="/">About</Link>
      <Link to="/">Shop Projects</Link>
    </div>
    <CartButton logoOn={logoOn}></CartButton>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  logoOn: PropTypes.bool,
  borderOn: PropTypes.bool,
};

Header.defaultProps = {
  siteTitle: ``,
  logoOn: true,
  borderOn: true,
};

export default Header;
