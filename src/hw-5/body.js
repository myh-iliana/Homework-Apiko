import React from 'react';
import { Route } from 'react-router-dom';
import { observer } from 'mobx-react';

import TodoList from './todo-list';
import Nav from './nav';

const Body = () => {
  return (
      <div className='d-flex justify-content-start body'>
        <Route path='/groups' render={() => <Nav />} />
        <Route path='/groups/:id' render={() => <TodoList />} />
      </div>
  );
};

export default observer(Body);