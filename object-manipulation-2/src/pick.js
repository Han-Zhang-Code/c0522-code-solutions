/* exported pick */
/*
declare a new empty object
use for loop to iterate through keys array
if source[keys[i]] is found, assign that property to the new object
return the new object
*/
function pick(source, keys) {
  var newObject = {};

  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      newObject[keys[i]] = source[keys[i]];
    }
  }

  return newObject;
}
