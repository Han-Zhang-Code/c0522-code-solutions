/* exported findIndex */
function findIndex(array, values) {
  var count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === values) {
      return i;
    } else {
      count++;
    }
  }
  if (count > 0) {
    return -1;
  }
}
