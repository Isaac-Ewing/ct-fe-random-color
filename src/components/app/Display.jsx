import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ color }) => {
  return <div style={{ background: color }}>hi!</div>;
};

Display.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Display;
