function filter(array, predicate) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    var result = predicate(array[i]);
    if (result) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var hihi = filter(numbers, number => number % 2 === 0);

console.log(hihi);
