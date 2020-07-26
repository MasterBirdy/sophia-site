import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Logo from "../components/logo";

const Header = ({ siteTitle, logoOn }) => (
  <header className="header">
    <Logo logoOn={true}></Logo>
    <div className="header-links">
      <Link to="/">Contact Us</Link>
      <Link to="/">About</Link>
      <Link to="/">Shop Projects</Link>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  logoOn: PropTypes.bool,
};

Header.defaultProps = {
  siteTitle: ``,
  logoOn: true,
};

export default Header;
