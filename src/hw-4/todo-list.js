import React from 'react';
import { values } from 'mobx';

import TodoListItem from './todo-list-item';
import Button from './button';
import Input from './input';

import store from './stores/root';

const TodoList = () => {
  // const todos = store.todos.list;
  console.log(values(store.todos.list));

  return (
      <div style={{margin: '0 3rem', width: '70vw'}}>
        {
          //todos.map(item => {
          //  return <TodoListItem text={item.text}/>
          //})
        }
        {
          true ? <Input onAdd={() => {}} /> : <Button>Add task</Button>
        }
      </div>
  );
};

export default TodoList;