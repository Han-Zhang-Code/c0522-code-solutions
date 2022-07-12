function reduce(array, reducer, initialValue) {
  if (initialValue !== undefined) {
    var previous = initialValue;
    for (var i = 0; i < array.length; i++) {
      previous = reducer(previous, array[i], i, array);
    }
  } else {
    previous = array[0];
    for (var j = 1; j < array.length; j++) {
      previous = reducer(previous, array[j], j, array);
    }
  }

  return previous;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(reduce(numbers, (previous, current) => previous + current, 0));
