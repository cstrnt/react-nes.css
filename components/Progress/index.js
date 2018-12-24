import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Progress = ({ color, ...props }) => {
  const className = classNames("nes-progress", color && `is-${color}`);
  return <progress className={className} {...props} />;
};

Progress.propTypes = {
  color: PropTypes.oneOf(["primary", "success", "warning", "error", "pattern"])
};

export default Progress;
