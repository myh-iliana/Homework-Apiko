import React, { useState } from 'react';

const Input = ({ onAdd }) => {
  const [value, setValue] = useState('');

  const onChange = e => setValue(e.target.value);

  const onSubmit = e => {
    e.preventDefault();

    if (value !== '') {
      onAdd(value);
      setValue('');
    }
  };

  return (
      <form onSubmit={ onSubmit }>
        <input type='text' className='form-control' value={ value } onChange={ onChange }/>
      </form>
  );
};

export default Input;