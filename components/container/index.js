import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Container = ({ dark, title, rounded }, ...props) => {
  const className = classNames("nes-container", {
    "is-dark": dark,
    "with-title": !!title,
    "is-rounded": rounded
  });
  <div className={className} {...props}>
    {title && <p className="title">{title}</p>}
    <p>{props.children}</p>
  </div>;
};

Container.propTypes = {
  dark: PropTypes.bool,
  title: PropTypes.string,
  rounded: PropTypes.bool
};

Container.defaultProps = {
  dark: false,
  rounded: false
};

export default Container;
