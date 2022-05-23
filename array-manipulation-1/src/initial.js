/* exported initial */
/**
 declare a new array variable
 use for loop to iterate though the array except the last index
 push the rest element into the new array
 return the new array
 */
function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
