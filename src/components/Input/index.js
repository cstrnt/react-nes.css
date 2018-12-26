import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Input = ({ color, ...props }) => {
  const classname = classNames("nes-input", color && `is-${color}`);
  return <input className={classname} {...props} />;
};

Input.propTypes = {
  color: PropTypes.oneOf(["success", "warning", "error"])
};

export default Input;
