import React from 'react';
import { useRouteMatch, useParams } from 'react-router-dom';
import { values } from 'mobx';
import { observer } from 'mobx-react';

import TodoListItem from './todo-list-item';
import Input from './input';

import store from './stores/root';

const TodoList = () => {
  const { id: groupId } = useParams();
  const matchActive = useRouteMatch('/groups/active');
  const matchDone = useRouteMatch('/groups/done');
  const matchImportant = useRouteMatch('/groups/important');

  let todos = values(store.todos.allTodos);

  if (matchActive) {
    todos = store.todos.activeTodos;
  }

  if (matchDone) {
    todos = store.todos.completedTodos;
  }

  if (matchImportant) {
    todos = store.todos.importantTodos;
  }

  if (!matchActive && !matchDone && !matchImportant) {
    todos = store.todos.groupTodos(groupId);
  }

  console.log('store', JSON.stringify(store, null, 2));

  const addTodo = value => {
    store.todos.add(value, groupId);
  };

  return (
      <div className='list'>
        {
          todos.map(todo => {
            console.log('render todoListItem');
            return <TodoListItem key={todo.id} {...{todo}}/>
          })
        }
        <Input add={ addTodo } placeholder='Add task' />
      </div>
  );
};

export default observer(TodoList);