/* exported includesSeven */
function includesSeven(array) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      count++;
    }
  }
  if (count > 0) {
    return true;
  } else {
    return false;
  }
}
