import React from "react";

const Radio = props => {
  return (
    <input type="radio" className="nes-radio" {...props}>
      {props.children}
    </input>
  );
};

Container.propTypes = {};

Container.defaultProps = {};

export default Radio;
