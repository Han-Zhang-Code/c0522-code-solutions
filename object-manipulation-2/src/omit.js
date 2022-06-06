/* exported omit */

/*
assign the source object to a new object,
use for loop to iterate through the keys array,
if source[key[i]] is found, delete that property in the new object
return the new object
*/

function omit(source, keys) {
  var newObject = {};
  for (var key in source) {
    newObject[key] = source[key];
  }
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      delete newObject[keys[i]];
    }
  }
  return newObject;
}

// function omit(source, keys) {
//   var newObject = {};
//   let found = false;
//   for (var key in source) {
//     for (var i = 0; i < keys.length; i++) {
//       if (key === keys[i]) {
//         found = true;
//       }
//     }
//     if (!found) {
//       newObject[key] = source[key];
//     }
//     found = false;
//   }
//   return newObject;
// }
