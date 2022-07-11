function map(array, transform) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(transform(array[i], i, array));
  }
  return newArray;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(map(numbers, number => number * 2));
