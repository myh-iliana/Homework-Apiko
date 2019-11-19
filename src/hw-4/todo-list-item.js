import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const TodoListItem = ({ text }) => {
  return (
      <ul className='list-group list-group-flush d-flex'>
        <li className='list-group-item d-flex justify-content-between align-items-center'>
          <span>{ text }</span>
          <FontAwesomeIcon icon={ faTrashAlt }/>
        </li>
      </ul>
  );
};

export default TodoListItem;