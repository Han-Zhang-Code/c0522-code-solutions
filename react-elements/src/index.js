import React from 'react';
import * as ReactDOM from 'react-dom/client';
var element = React.createElement(
  'h1',
  null,
  'Hello, React!'
);
var container = document.querySelector('#root');

var root = ReactDOM.createRoot(container);
root.render(element);

console.log(element);
