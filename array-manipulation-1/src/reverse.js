/* exported reverse */
/**
 declare a new array
 using for loop to iterate though array backwards
 assign each element to the new array
 return new array
 */

function reverse(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
