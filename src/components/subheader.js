import React from "react";
import PropTypes from "prop-types";

const Subheader = ({ subheader }) => {
  return (
    <div className="subheader">
      <h2>{subheader}</h2>
    </div>
  );
};

Subheader.propTypes = {
  subheader: PropTypes.string,
};

Subheader.defaultProps = {
  subheader: ``,
};

export default Subheader;
