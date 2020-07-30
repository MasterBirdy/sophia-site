import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Logo from "../components/logo";
import CartButton from "../components/cartbutton";

const IndexFooter = () => (
  <footer className="index-footer">
    <div className="footer-links">
      <div className="footer-link">
        <Link to="/press">Press</Link>
      </div>
      <div className="footer-link">
        <Link to="/">View Featured</Link>
      </div>
      <div className="footer-link"></div>
    </div>
  </footer>
);

export default IndexFooter;
