import { types as t } from 'mobx-state-tree';
import uuid from 'uuid';

const GroupModel = t
    .model('GroupModel', {
      id: t.string,
      title: t.string
    })
    .views(store => ({
      get groupTodos() {
        return store.todos;
      }
    }));

export const GroupListModel = t
    .model('GroupListModel', {
      list: t.array(GroupModel)
    })
    .views(store => ({
      get allGroups() {
        return store.list;
      }
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