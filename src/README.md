## Homework 1
Реалізувати бібліотеку, яка має схоже до React API, проте без використання React, а саме функції `createElement` та `render`: https://codesandbox.io/s/xr6orro5vp

##### Виконано: https://codesandbox.io/s/romantic-night-1tg92

## Homework 2

Створити 3 функціональні компоненти у Вашому додатку: PostList, PostListItem і MoreButton
- Використовуючи ХУКи отримати дані із відкритого АРІ “https://jsonplaceholder.typicode.com/posts”
- Добавити компонент Loader і відображати поки фетчаться дані
- PostList повинен отримувати лише “posts” параметр і рендерити PostListItem для кожного елемента із масиву.
- PostListItem повинен отрисувати “id”, “title”, “body” параметри, порівнювати їх і  ререндерити компонент лише при їх зміні.
- Головний компонент App повинен передавати в PostList обмеження -  (10 “posts” по замовчуванню)
- MoreButton повинен збільшувати ліміт (10 “posts” за клік) поки це можливо.

Завдання із зірочкою: Додати поле пошуку, яке фільтруватиме дані по “title” чи “body”

##### Виконано: https://codesandbox.io/s/posts-list-b7pxs