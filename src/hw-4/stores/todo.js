import { types as t } from 'mobx-state-tree';
import uuid from 'uuid';

function log(obj) {
  return console.log(JSON.stringify(obj, null, 2));
}

const TodoModel = t
    .model('TodoModel', {
      id: t.string,
      text: t.string,
      isCompleted: t.optional(t.boolean, false),
      isImportant: t.optional(t.boolean, false),
    })
    .actions(store => ({
      toggleCompleted() {
        store.isCompleted = !store.isCompleted;
      },

      toggleImportant() {
        store.isImportant = !store.isImportant;
      }
    }));
// t.optional(t.array(TodoModel), [])
export const TodoListModel = t
    .model('TodoListModel', {
      list: t.optional(t.array(TodoModel), [])
    })
    .actions(store => ({
      add(text) {
        const todo = {
          id: uuid(),
          text
        };

        store.list.push(todo);
      }
    }));

// const todoList = TodoListModel.create({
//     id: uuid(),
//     text: 'action'
// });
//
// todoList.add('from action');
// log(todoList);