import React from 'react';
import { useRouteMatch, useParams } from 'react-router-dom';
import { values } from 'mobx';
import { observer } from 'mobx-react';

import TodoListItem from './todo-list-item';
import Input from './input';
import Loader from './loader';

import store from './stores/rootStore';

const TodoList = () => {
  const { id: groupId } = useParams();
  const matchActive = useRouteMatch('/groups/active');
  const matchDone = useRouteMatch('/groups/done');
  const matchImportant = useRouteMatch('/groups/important');
  const isLoading = store.todos.loading;

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

  const addTodo = value => {
    store.todos.add(value, groupId);
  };

  return (
      <div className='list'>
        {
          isLoading
              ? <Loader />
              : todos.map(todo => {
                return <TodoListItem key={todo.id} {...{todo}}/>
              })
        }
        <Input add={ addTodo } placeholder='Add task' />
      </div>
  );
};

export default observer(TodoList);