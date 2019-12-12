import { types as t, onSnapshot } from 'mobx-state-tree';
import localForage from 'localforage';

import { TodoListModel } from './todoStore';
import { GroupListModel } from './groupStore';
import Api from '../api';

import createPersist from './persist';

const RootStore = t.model('RootStore', {
  todos: t.optional(TodoListModel, {}),
  groups: t.optional(GroupListModel, {}),
});

const rootStore = RootStore.create({});

onSnapshot(rootStore, snapshot => console.log(JSON.stringify(snapshot, null, 2)));

rootStore.todos.getTodos().then(() => {
  console.log('root success');
  // rootStore.todos.list[0].toggleImportant();
});

// rootStore.todos.add('Thor');
//
// const todo = rootStore.todos.list[0];
// console.log('todo', todo);
//
// async function createTodo() {
//   const result = await Api.Todos.add(todo);
//   console.log(result);
// }
//
// async function run() {
//   await createTodo();
// }
//
// run();

// const saveData = createPersist(rootStore, localForage);
// saveData.getData();

export default rootStore;