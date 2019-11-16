function createElement(el, props, value) {
  const element = document.createElement(el);

  if (typeof props === 'object') {
    Object.keys(props).forEach((item) => {
      if (item === 'style') {
        Object.keys(props[item]).forEach((styleItem) => {
          return (element[item][styleItem] = props[item][styleItem]);
        });
        return element;
      }

      return element[item] = props[item];
    });
  }

  if (typeof value === 'string') {
    return element.textContent = value;
  }

  if (typeof value === 'object') {
    value.forEach((item) => {
      if (typeof item === 'object') {
        element.innerHTML += item.outerHTML;
      } else {
        element.innerHTML += item;
      }
    });
    return element;
  }

  return element;
}

function render(element, place) {
  place.appendChild(element);
}

const React = {
  createElement,
  render,
};

const app = React.createElement(
    'div',
    { style: { backgroundColor: 'red' } },
    [
      React.createElement('span', undefined, 'Hello world'),
      React.createElement('br'),
      'This is just a text node',
      React.createElement('div', { textContent: 'Text content' }),
    ],
);

React.render(app, document.getElementById('app'));