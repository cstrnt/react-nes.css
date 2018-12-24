import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Balloon = ({ direction = "left", ...props }) => {
  const className = classNames("nes-balloon", `from-${direction}`);
  return (
    <div className={className} {...props}>
      {props.children}
    </div>
  );
};

Balloon.propTypes = {
  direction: PropTypes.oneOf(["left", "right"])
};

export default Balloon;
