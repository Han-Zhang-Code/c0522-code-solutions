/* exported getKeys */
/*
declare new array
for in loop to iterate though object
push keys into new array
return new array
*/
function getKeys(object) {
  var array = [];
  var keys;
  for (keys in object) {
    array.push(keys);
  }
  return array;
}
