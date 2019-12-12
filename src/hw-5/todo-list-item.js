import React from 'react';
import { observer } from 'mobx-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faStar as starImportant } from '@fortawesome/free-solid-svg-icons';
import { faStar as starSimple } from '@fortawesome/free-regular-svg-icons';

import store from './stores/rootStore';

const TodoListItem = ({ todo }) => {
  const { id, text, isCompleted, isImportant, toggleCompleted, toggleImportant } = todo;

  const onCompleted = () => toggleCompleted();
  const onImportant = () => toggleImportant();
  const onDelete = () => store.todos.delete(id);

  const style = isCompleted ? 'completed' : 'important-icon';

  return (
      <ul className='list-group list-group-flush d-flex'>
        <li className='list-group-item d-flex justify-content-between align-items-center'>
          <span className={ style }
                onClick={ onCompleted }
          >
            { text }
          </span>
          <div>
            {
              isImportant
                  ? <FontAwesomeIcon icon={ starImportant } className='important-icon' onClick={ onImportant }/>
                  : <FontAwesomeIcon icon={ starSimple } className='important-icon' onClick={ onImportant }/>
            }
            <FontAwesomeIcon icon={ faTrashAlt }
                             className='delete-todo-trash'
                             onClick={ onDelete }
            />
          </div>
        </li>
      </ul>
  );
};

export default observer(TodoListItem);