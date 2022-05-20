/* exported compact */
/*
declare new array
use for loop to iterate though array
if !array[i] is true, use continue to skip
push the rest element to new array
return new array
*/
function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (!array[i]) {
      continue;
    }
    newArray.push(array[i]);
  }
  return newArray;
}
