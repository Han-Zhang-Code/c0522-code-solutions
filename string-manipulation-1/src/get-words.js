/* exported getWords */
/*
declare a new array virable
using split method to split the string by the space and set the limit to the length of the string
*/
function getWords(string) {
  var array = [];
  array = string.split(' ', string.length);
  return array;
}
