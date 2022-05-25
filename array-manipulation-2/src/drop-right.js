/* exported dropRight */
/*
declare new array variable
 push whole array backwards into the new array virable
 declare the other new empty array variable
 iterate through array and set the count as initial index and push into the new array variable declared above
 declare the final new empty array variable
 push the array into the final array variable backwards
 return to the final array
*/

// function dropRight(array, count) {
//   var newArray = [];

//   for (var i = array.length - 1; i >= 0; i--) {
//     newArray.push(array[i]);
//   }
//   var countArray = [];
//   for (var j = count; j < array.length; j++) {
//     countArray.push(newArray[j]);
//   }
//   var finalArray = [];
//   for (var k = countArray.length - 1; k >= 0; k--) {
//     finalArray.push(countArray[k]);
//   }
//   return finalArray;
// }
function dropRight(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length - count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
