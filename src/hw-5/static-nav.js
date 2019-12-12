import React, { Fragment } from 'react';
import { observer } from 'mobx-react';

import NavStaticItem from './nav-static-item';

import store from './stores/rootStore';

const StaticNav = () => {
  const { importantTodosLength, completedTodosLength, activeTodosLength } = store.todos;

  return (
      <Fragment>
        <NavStaticItem title='important' length={ importantTodosLength }>Important</NavStaticItem>
        <NavStaticItem title='done' length={ completedTodosLength }>Done</NavStaticItem>
        <NavStaticItem title='active' length={ activeTodosLength }>Active</NavStaticItem>
        <br />
      </Fragment>
  );
};

export default observer(StaticNav);