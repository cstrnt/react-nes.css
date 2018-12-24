import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Table = ({ bordered, centered, dark, ...props }) => {
  const className = classNames("nes-table", {
    "is-bordered": bordered,
    "is-centered": centered,
    "is-dark": dark
  });

  return (
    <table className={className} {...props}>
      {props.children}
    </table>
  );
};

Table.propTypes = {
  bordered: PropTypes.bool,
  centered: PropTypes.bool,
  dark: PropTypes.bool
};

export default Table;
