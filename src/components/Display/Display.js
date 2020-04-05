import React from 'react';
import './Display.css';
import PropTypes from 'prop-types';

const Display = (props) => {
  const data = props.data;

  return <div className='Display'>     
    {data.expression}
  </div>;
};

Display.propTypes = {
  data:PropTypes.object.isRequired
};

export default Display;