import React from "react";
import PropTypes from "prop-types";

const Nes = ({ character, snes, ...props }) => {
  const className = `${snes ? "s" : ""}nes-${character}`;
  return <i className={className} {...props} />;
};

Nes.propTypes = {
  character: PropTypes.oneOf([
    "octocat",
    "mario",
    "ash",
    "pokeball",
    "bulbasaur",
    "squirtle",
    "smartphone",
    "phone",
    "kirby",
    "logo",
    "jp-logo"
  ]).isRequired,
  snes: PropTypes.bool
};
export default Nes;
