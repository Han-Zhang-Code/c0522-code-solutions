/* exported chunk */
/*
declare an empty new array
use for loop to iterate through array, update the i with size so it jumps to next element of the new sub-array
slice the array set start at index and end at index+size so it devide the array to sub arrays by size
push into new array and return the new array
*/
function chunk(array, size) {
  var newArray = [];
  for (var i = 0; i < array.length; i += size) {
    newArray.push(array.slice(i, i + size));
  }
  return newArray;
}
