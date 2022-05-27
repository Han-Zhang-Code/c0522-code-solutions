/* exported difference */
/*
declare an empty new array
use for loop to iterate through first array, if the value at first array index
is not found at the second array, push the variable to the new array
do the same thing for the second array and compare to first array
return to the new array variable
*/

function difference(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      newArray.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (!first.includes(second[j])) {
      newArray.push(second[j]);
    }
  }
  return newArray;

}
