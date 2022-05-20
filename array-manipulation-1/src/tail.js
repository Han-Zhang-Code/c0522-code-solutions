/* exported tail */
/**
 declare a new array variable
 use for loop to iterate though the array except the first index
 push the rest element into the new array
 return the new array
 */
function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
