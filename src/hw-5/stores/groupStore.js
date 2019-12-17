import { types as t, flow, getRoot } from 'mobx-state-tree';
import uuid from 'uuid';
import Api from '../api';

const GroupModel = t
    .model('GroupModel', {
      id: t.string,
      title: t.string,
      sending: false,
      sendingError: false,
      createdLocally: false
    })
    .actions(store => ({
      afterAttach() {
        if (store.createdLocally) store.send();
      },

      send: flow(function* send() {
        store.sending = true;
        store.sendingError = false;

        try {
          const group = yield Api.Groups.add(store);
          group.sending = false;
          group.createdLocally = false;

          getRoot(store).groups.replaceItem(store.id, group);
        } catch (err) {
          console.log(err);
          store.sendingError = true;
          store.sending = false;
        }
      })
    }));

export const GroupListModel = t
    .model('GroupListModel', {
      list: t.array(GroupModel),
      loading: false,
      error: false,
      deleting: false,
      deletingError: false
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
          title,
          createdLocally: true
        };

        store.list.unshift(group);
      },

      replaceItem(id, group) {
        const index = store.list.findIndex(item => id === item.id);

        if (index > -1) {
          store.list[index] = group;
        }
      },

      deleteGroup: flow(function* deleteGroup(id) {
        store.deleting = true;
        store.list = store.list.filter(item => item.id !== id);
        getRoot(store).todos.deleteGroupTodos(id);

        try {
          yield Api.Groups.remove(id);
        } catch (err) {
          console.log(err);
          store.deletingError = true;
        } finally {
          store.deleting = false;
        }
      }),

      getGroups: flow(function* getGroups() {
        store.loading = true;
        store.error = false;

        try {
          store.list = yield Api.Groups.getAll();
        } catch (err) {
          console.log(err);
          store.error = false;
        } finally {
          store.loading = false;
        }
      })
    }));