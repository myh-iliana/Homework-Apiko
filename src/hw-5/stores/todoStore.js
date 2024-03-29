import { flow, types as t, getRoot } from 'mobx-state-tree';
import uuid from 'uuid';
import Api from '../api';

export const TodoModel = t
    .model('TodoModel', {
      id: t.maybe(t.string),
      text: t.maybe(t.string),
      isCompleted: t.optional(t.boolean, false),
      isImportant: t.optional(t.boolean, false),
      groupId: t.maybe(t.string),
      sending: false,
      sendingError: false,
      createdLocally: false
    })
    .actions(store => ({
      afterAttach() {
        if (store.createdLocally) {
          store.send();
        }
      },

      send: flow(function* send() {
        store.sending = true;
        store.sendingError = false;

        try {
          const todo = yield Api.Todos.add(store);
          todo.sending = false;
          todo.createdLocally = false;

          getRoot(store).todos.replaceItem(store.id, todo);
        } catch (err) {
          console.log(err);
          store.sendingError = true;
          store.sending = false;
        }
      }),

      toggleCompleted: flow(function* toggleCompleted() {
        const oldValue = store.isCompleted;
        store.isCompleted = !store.isCompleted;

        try {
          yield Api.Todos.update(store.id,{ isCompleted: store.isCompleted });
        } catch (err) {
          console.log(err);
          store.isCompleted = oldValue;
        }
      }),

      toggleImportant: flow(function* toggleImportant() {
        const oldValue = store.isImportant;
        store.isImportant = !store.isImportant;

        try {
          yield Api.Todos.update(store.id, { isImportant: store.isImportant });
        } catch (err) {
          console.log(err);
          store.isImportant = oldValue;
        }
      })
    }));

export const TodoListModel = t
    .model('TodoListModel', {
      list: t.optional(t.array(TodoModel), []),
      loading: false,
      error: false,
      deleting: false,
      deletingError: false
    })
    .views(store => ({
      get allTodos() {
        return store.list;
      },

      get importantTodos() {
        return store.list.filter(item => item.isImportant);
      },

      get importantTodosLength() {
        return store.list.filter(item => item.isImportant).length;
      },

      get completedTodos() {
        return store.list.filter(item => item.isCompleted);
      },

      get completedTodosLength() {
        return store.list.filter(item => item.isCompleted).length;
      },

      get activeTodos() {
        return store.list.filter(item => !item.isCompleted);
      },

      get activeTodosLength() {
        return store.list.filter(item => !item.isCompleted).length;
      },

      groupTodos(groupId) {
        return store.list.filter(todo => todo.groupId === groupId);
      },

      groupTodosLength(groupId) {
        return store.list.filter(todo => todo.groupId === groupId).length;
      }
    }))
    .actions(store => ({
      add(text, groupId) {
        const todo = {
          id: uuid(),
          text,
          groupId,
          createdLocally: true
        };

        store.list.unshift(todo);
      },

      replaceItem(id, todo) {
        const index = store.list.findIndex(item => id === item.id);

        if (index > -1) {
          store.list[index] = todo;
        }
      },

      deleteTodo: flow(function* deleteTodo(id) {
        store.deleting = true;
        store.list = store.list.filter(item => item.id !== id);

        try {
          yield Api.Todos.remove(id);
        } catch (err) {
          console.log(err);
          store.deletingError = true;
        } finally {
          store.deleting = false;
        }
      }),

      deleteGroupTodos(groupId) {
        store.list = store.list.filter(item => item.groupId !== groupId);
      },

      getTodos: flow(function* getTodos() {
        store.loading = true;
        try {
          store.list = yield Api.Todos.getAll();
        } catch (err) {
          store.error = true;
          console.log(err);
        } finally {
          store.loading = false;
        }
      })
    }));