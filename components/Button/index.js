import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({ color, ...props }) => {
  const className = classNames("nes-btn", color && `is-${color}`);
  return (
    <button className={className} {...props}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(["primary", "success", "warning", "error", "disabled"])
};

export default Button;
