/* exported intersection */
/*
declare a new empty array variable
use for loop to iterate through the first array, if the value at the index of the
first array is found at the second array, push that element to the new declared
array, return to new array variable
*/
function intersection(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      newArray.push(first[i]);
    }
  }
  return newArray;

}
