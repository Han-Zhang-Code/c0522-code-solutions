/* exported flatten */
/*
declare a new empty array
use for loop to iterate through array
if the array[i] is an array then use other for loop to iterate through the
array at index i, and push each value at that index to the new array
else if the array[i] is not an array, just push that value at the index to the
new array
return to new array
*/
function flatten(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
    } else if (!Array.isArray(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
