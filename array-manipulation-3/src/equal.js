/* exported equal */
/*
if first array length is not equal to second array length return false;
at this point the arrays to compare will have same length
use for loop to iterate through the arrays
compare each array value at each index if they are not same return false
after finished loop and no false returned, return true.
*/
function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
