import React from 'react';
import ReactDOM from 'react-dom/client';
import Accordion from './accordion';

const topicsArray = [{
  topic: 'JavaScript',
  detail: 'JavaScript is Awesome!'
}, {
  topic: 'HTML',
  detail: 'HTML is easy!'
}, {
  topic: 'CSS',
  detail: 'CSS is hard!'
}];

const element = <Accordion topics={topicsArray} />;
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(element);
