var a = 1;
var b = 2;
var c = 3;
var maximumValue = Math.max(a, b, c);
console.log('Maximum value is:', maximumValue);

var heroes = ['spiderman', 'batman', 'thor', 'peacemaker'];
var randomNumber = Math.random();
randomNumber *= heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('random index:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('random hero:', randomHero);

var library = [
  {
    title: 'HARRY POTTER',
    author: 'JK ROWLING'
  },
  {
    title: 'Letting Go',
    author: 'Philip Roth'
  },
  {
    title: 'Fear of Flying',
    author: 'Erica Jong'
  }
];

var lastBook = library.pop();
console.log('last book is:', lastBook);
var firstBook = library.shift();
console.log('first book is:', firstBook);
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('array after splice', library);

var fullName = 'Yuhan Zhang';
var firstAndLastName = fullName.split(' ');
console.log(firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
