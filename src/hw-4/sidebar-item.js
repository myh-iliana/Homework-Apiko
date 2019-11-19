import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebarItem = ({ children }) => {
  return (
      <NavLink to='/j'
               className="list-group-item d-flex justify-content-between align-items-center"
               style={{width: '30vw'}}
      >
        { children }
        <span className="badge badge-primary badge-pill">14</span>
      </NavLink>
  );
};

export default SidebarItem;