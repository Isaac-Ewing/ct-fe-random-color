import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ color, lastColor }) => {
  return color === lastColor ? <div style={{ background: 'url(https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg)', height: '500px', width: '500px' }}>hi!</div> : <div style={{ background: color }}>hi!</div>;
};

Display.propTypes = {
  color: PropTypes.string.isRequired,
  lastColor: PropTypes.string.isRequired,
};

export default Display;
