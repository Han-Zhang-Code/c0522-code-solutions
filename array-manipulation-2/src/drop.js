/* exported drop */
/*
declare a new array and iterate though array from the count index,
push the array element to new array variable
return to new array variable
*/
function drop(array, count) {
  var newArray = [];
  for (var i = count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
