import React from "react";
import PropTypes from "prop-types";

const List = ({ listStyle = "disc", ...props }) => {
  <ul className={`nes-list is-${listStyle}`} {...props}>
    {props.children}
  </ul>;
};

List.propTypes = {
  listStyle: PropTypes.oneOf(["disc", "circle"])
};

export default List;
