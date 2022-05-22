/* exported takeRight */
/*
declare new array variable
 If the count is larger than the length of the array, then a shallow copy of the entire array is returned
 else push whole array backwards into the new array virable
 declare the other new empty array variable
 iterate through array set the condition to count and push into the new array variable declared above
 declare the final new empty array variable
 push the array into the final array variable backwards
 return to the final array
*/
function takeRight(array, count) {
  var newArray = [];
  if (array.length < count) {
    for (var a = 0; a < array.length; a++) {
      newArray.push(array[a]);
    }
    return newArray;
  }
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  var countArray = [];
  for (var j = 0; j < count; j++) {
    countArray.push(newArray[j]);
  }
  var finalArray = [];
  for (var k = countArray.length - 1; k >= 0; k--) {
    finalArray.push(countArray[k]);
  }
  return finalArray;
}
