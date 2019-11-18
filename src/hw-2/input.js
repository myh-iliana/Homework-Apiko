import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Input = ({ onSearch }) => {
  const [text, setText] = useState('');

  const handleChange = e => setText(e.target.value);

  useEffect(() => onSearch(text));

  return (
      <div className='input-group input-group-lg fixed-top'>
        <input className='form-control' type='text' placeholder='Search' value={text}
               onChange={ handleChange }
        />
      </div>
  );
};

Input.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default Input;