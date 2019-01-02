import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Avatar = ({ size, rounded, ...props }) => {
  const className = classNames('nes-avatar', size && `is-${size}`, {
    'is-rounded': rounded,
  });
  return <img className={className} {...props} />;
};

Avatar.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  rounded: PropTypes.bool,
};

export default Avatar;
