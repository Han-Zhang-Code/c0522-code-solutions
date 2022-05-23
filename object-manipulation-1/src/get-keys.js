/* exported getKeys */
/*
declare new array
for in loop to iterate though object
push keys into new array
return new array
*/
function getKeys(object) {
  var array = [];
  for (var keys in object) {
    array.push(keys);
  }
  return array;
}
