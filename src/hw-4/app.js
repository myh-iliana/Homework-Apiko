import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { observer } from 'mobx-react';
import Header from './header';
import TodoList from './todo-list';
import Sidebar from './sidebar';

const App = () => {
  return (
      <Router>
        <Header />
        <div className='d-flex justify-content-start' style={{margin: '2rem 0'}}>
          <Sidebar />
          <TodoList />
        </div>
      </Router>
  );
};

export default observer(App);