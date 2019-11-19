import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Button = ({ children }) => {
  return (
      <button className='btn btn-light'><FontAwesomeIcon icon={faPlus} /> { children }</button>
  );
};

export default Button;