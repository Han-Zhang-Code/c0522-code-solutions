/* exported defaults */
/*
use for in loop to loop through source
if target[keys] not found, assign that key to target object
*/
function defaults(target, source) {
  for (var keys in source) {
    if (target[keys] === undefined) {
      target[keys] = source[keys];
    }
  }
}
