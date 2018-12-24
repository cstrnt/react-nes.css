import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Icon = ({ icon, size, status, transparent, ...props }) => {
  const className = classNames(
    "nes-icon",
    icon,
    size && `is-${size}`,
    status && `is-${status}`,
    {
      transparent: transparent
    }
  );
  return <i className={className} {...props} />;
};

Icon.propTypes = {
  icon: PropTypes.oneOf([
    "heart",
    "star",
    "like",
    "twitter",
    "facebook",
    "github",
    "youtube",
    "google",
    "medium",
    "twitch",
    "reddit",
    "whatsapp",
    "gmail",
    "linkedin",
    "close",
    "trophy"
  ]).isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  status: PropTypes.oneOf(["half", "empty"]),
  transparent: PropTypes.bool
};

export default Icon;
