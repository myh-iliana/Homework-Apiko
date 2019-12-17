import React, { useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { observer } from 'mobx-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import store from './stores/rootStore';

const NavItem = ({ children, title, id }) => {
  const history = useHistory();
  const link = `/groups/${id}`;
  const { groupTodosLength } = store.todos;

  useEffect(() => {
    history.push(link);
  }, [id]);

  const onDelete = () => {
    store.groups.deleteGroup(id);
  };

  return (
      <div className='d-flex align-items-center'>
        <NavLink to={ link }
                 className="list-group-item d-flex justify-content-between align-items-center navigation-item-link"
        >
          { children }
          <span className="badge badge-primary badge-pill">{ groupTodosLength(id) }</span>
        </NavLink>
        <FontAwesomeIcon icon={ faTrash } className='delete-trash'
                         onClick={ onDelete }
        />
      </div>
  );
};

export default observer(NavItem);