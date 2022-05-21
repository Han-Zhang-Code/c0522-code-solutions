/* exported getValues */
/*
declare new array
for in loop to iterate though object
push object[keys] into new array
return new array
*/
function getValues(object) {
  var array = [];
  var keys;
  for (keys in object) {
    array.push(object[keys]);
  }
  return array;
}
