import { types as t } from 'mobx-state-tree';

import { TodoListModel } from './todo';

function log(obj) {
  return console.log(JSON.stringify(obj, null, 2));
}

const RootStore = t.model('RootStore', {
  todos: t.optional(TodoListModel, {}),
});

const rootStore = RootStore.create({});

// log(rootstore);

export default rootStore;