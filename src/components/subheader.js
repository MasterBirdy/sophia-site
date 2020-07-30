import React from "react";
import PropTypes from "prop-types";
import { useTemplateProps } from "../animation/animations";
import { animated } from "react-spring";

const Subheader = ({ subheader, isIn }) => {
  const templateProps = useTemplateProps(isIn, 600);

  return (
    <animated.div style={templateProps} className="subheader">
      <h2>{subheader}</h2>
    </animated.div>
  );
};

Subheader.propTypes = {
  subheader: PropTypes.string,
};

Subheader.defaultProps = {
  subheader: ``,
};

export default Subheader;
