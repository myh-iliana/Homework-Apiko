import React from 'react';
import { NavLink } from 'react-router-dom';

const NavStaticItem = ({ children, title, length }) => {
  const link = `/groups/${title}`;

  return (
      <NavLink to={ link }
               className="list-group-item d-flex justify-content-between align-items-center navigation-item-link"
      >
        { children }
        <span className="badge badge-primary badge-pill">{ length }</span>
      </NavLink>
  );
};

export default NavStaticItem;