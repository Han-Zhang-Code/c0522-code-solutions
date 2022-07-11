function reduce(array, reducer, initialValue) {
  var previous = initialValue;
  for (var i = 0; i < array.length; i++) {
    previous = reducer(previous, array[i]);
  }
  return previous;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(reduce(numbers, (previous, current) => previous + current, 0));
