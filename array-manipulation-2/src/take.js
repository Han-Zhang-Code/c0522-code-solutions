/* exported take */
/*
declare an new array
if the array length longer than count
use for loop to iterate though the array and set count as loop condition
push the array element to the new array
if the array length shorter than count
use for loop to iterate though the array and set array length as loop condition
push the array element to the new array
*/
function take(array, count) {
  var newArray = [];
  if (array.length > count) {
    for (var i = 0; i < count; i++) {
      newArray.push(array[i]);
    }
  } else {
    for (var j = 0; j < array.length; j++) {
      newArray.push(array[j]);
    }
  }
  return newArray;
}
