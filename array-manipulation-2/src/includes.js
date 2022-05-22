/* exported includes */
/*
iterate through array and compare value to each element
if element is equal to value return true else return false
*/
function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
