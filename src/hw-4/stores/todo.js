import { types as t } from 'mobx-state-tree';
import uuid from 'uuid';

export const TodoModel = t
    .model('TodoModel', {
      id: t.identifier,
      text: t.string,
      isCompleted: t.optional(t.boolean, false),
      isImportant: t.optional(t.boolean, false),
      groupId: t.optional(t.string, ''),
    })
    .actions(store => ({
      toggleCompleted() {
        store.isCompleted = !store.isCompleted;
      },

      toggleImportant() {
        store.isImportant = !store.isImportant;
      }
    }));

export const TodoListModel = t
    .model('TodoListModel', {
      list: t.optional(t.array(TodoModel), [])
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
          groupId
        };

        store.list.push(todo);
      },

      delete(id) {
        store.list = store.list.filter(item => item.id !== id);
      }
    }));