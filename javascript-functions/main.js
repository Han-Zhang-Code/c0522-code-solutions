function convertMinutesToSecond(minutes) {
  return minutes * 60;
}
console.log('5 mins equal to ' + convertMinutesToSecond(5) + ' seconds');

function greet(name) {
  return 'Hey, ' + name + '!';
}
console.log(greet('Yuhan'));

function getArea(width, height) {
  return width * height;
}
console.log('the area of this paint is ' + getArea(5, 10) + ' square inches');

function getFirstName(person) {
  return person.firstName;
}
console.log('The first name for Han is', getFirstName({ firstName: 'Yuhan', lastName: 'Zhang' }));

function getLastElement(array) {
  return array[array.length - 1];
}
console.log('The last element for this array is:', getLastElement([1, 2, 3, 4, 5]));
