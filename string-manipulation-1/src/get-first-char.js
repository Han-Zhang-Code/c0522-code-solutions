/* exported getFirstChar */
/*
declar a new empty string variable
use for loop to iterate the string
in the for loop, assign the first index of the string array to the new empty string variable
after the for loop return to the new string variable
*/
function getFirstChar(string) {
  var char = '';
  for (var i = 0; i < string.length; i++) {
    char = string[0];
  }
  return char;
}
