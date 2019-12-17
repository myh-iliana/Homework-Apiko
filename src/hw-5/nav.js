import React from 'react';
import { values } from 'mobx';
import { observer } from 'mobx-react';

import NavItem from './nav-item';
import StaticNav from './static-nav';
import Input from './input';
import Loader from './loader';

import store from './stores/rootStore';

const Nav = () => {
  const groups = values(store.groups.allGroups);
  const loading = store.groups.loading;

  const addGroup = value => {
    store.groups.add(value);
  };

  return (
      <nav className="nav flex-column d-inline-flex navigation">
        <StaticNav />
        {
          loading
              ? <Loader />
              : groups.map(({ id, title }) => {
                return (
                    <NavItem key={ id } {...{ id, title }}>{ title }</NavItem>
                );
              })
        }
        <Input add={ addGroup } placeholder='New group' />
      </nav>
  );
};

export default observer(Nav);