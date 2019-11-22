import { types as t } from 'mobx-state-tree';
import uuid from 'uuid';

import { TodoModel } from './todo';

const GroupModel = t
    .model('GroupModel', {
      id: t.string,
      title: t.string,
      todos: t.array(t.reference(TodoModel))
    })
    .views(store => ({
      get groupTodos() {
        return store.todos;
      }
    }));
    // .actions(store => ({
    //   addTodo(todo) {
    //     store.todos.push(todo);
    //   }
    // }));

export const GroupListModel = t
    .model('GroupListModel', {
      list: t.array(GroupModel)
    })
    .views(store => ({
      get allGroups() {
        return store.list;
      },

      // getGroup(groupId) {
      //   return store.list.filter(item => groupId === item.id);
      // }
    }))
    .actions(store => ({
      add(title) {
        const group = {
          id: uuid(),
          title
        };

        store.list.push(group);
      },

      delete(id) {
        store.list = store.list.filter(item => item.id !== id);
      }
    }));