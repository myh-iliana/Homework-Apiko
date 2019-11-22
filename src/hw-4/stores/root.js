import { types as t } from 'mobx-state-tree';

import { TodoListModel } from './todo';
import { GroupListModel } from './group';

// function log(obj) {
//   return console.log(JSON.stringify(obj, null, 2));
// }

const RootStore = t.model('RootStore', {
  todos: t.optional(TodoListModel, {}),
  groups: t.optional(GroupListModel, {}),
});

const rootStore = RootStore.create({});

export default rootStore;