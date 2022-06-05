/* exported unique */
/*
declare a new empty array
use for loop to iterate through array
if the new array element not existed in the original array, push the array
element to the new array variable
return to new array variable
*/

function unique(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
