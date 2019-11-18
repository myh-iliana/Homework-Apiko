import React, { useState } from 'react';

const Input = ({ addReview }) => {
  const [text, setText] = useState('');

  const onChangeText = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();

    if (text !== '') {
      addReview(text);
      setText('');
    }
  };

  return (
      <form onSubmit={ onSubmit } className='input-group mb-3'>
          <input type='text' className='form-control'
                 value={ text }
                 onChange={ onChangeText }
          />
      </form>
  );
};

export default Input;