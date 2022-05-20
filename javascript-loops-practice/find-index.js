/* exported findIndex */
function findIndex(array, values) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === values) {
      return i;
    }
  }
  return -1;
}
