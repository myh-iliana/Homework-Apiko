import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom'

const NavBar = () => {
  const match = useRouteMatch('/review/:reviewId');
  const active = {color: 'orange'};

  if (match) return null;

  return (
      <div>
        <ul className='list-group'>
          <NavLink exact to='/' activeStyle={ active }>
            <li className='list-group-item'>Home</li>
          </NavLink>
          <NavLink to='/shop' activeStyle={ active }>
            <li className='list-group-item'>Shop</li>
          </NavLink>
          <NavLink to='/reviews' activeStyle={ active }>
            <li className='list-group-item'>Reviews</li>
          </NavLink>
        </ul>
      </div>
  );
};

export default NavBar;