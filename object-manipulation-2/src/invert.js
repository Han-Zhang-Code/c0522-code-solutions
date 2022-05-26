/* exported invert */
/*
convert the object to array using Object.entries method
swap the each array index
convert the resulting array to object using Object.fromEntries method
*/
// function invert(source) {
//   var newArray = Object.entries(source);
//   for (var i = 0; i < newArray.length; i++) {
//     var temp = newArray[i][0];
//     newArray[i][0] = newArray[i][1];
//     newArray[i][1] = temp;
//   }
//   var newObject = Object.fromEntries(newArray);
//   return newObject;
// }
function invert(source) {
  var newObject = {};
  for (var keys in source) {
    newObject[keys] = keys;
    // keys = source[keys];
  }
  return newObject;
}
