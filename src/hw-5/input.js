import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Input = ({ add, ...props }) => {
  const [value, setValue] = useState('');

  const onChange = e => setValue(e.target.value);

  const onSubmit = e => {
    e.preventDefault();

    if (value !== '') {
      add(value);
      setValue('');
    }
  };

  return (
      <form onSubmit={ onSubmit } className='d-flex align-items-center'>
        <FontAwesomeIcon icon={ faPlus }/>
        <input type='text'
               className='form-control no-outline'
               value={ value }
               onChange={ onChange }
               { ...props }
        />
      </form>
  );
};

export default Input;