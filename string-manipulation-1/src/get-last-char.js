/* exported getLastChar */
/*
declar a new empty string variable
use for loop to iterate the string
in the for loop, assign the last index of the string array to the new empty string variable
after the for loop return to the new string variable
*/
function getLastChar(string) {
  var char = '';
  for (var i = 0; i < string.length; i++) {
    char = string[string.length - 1];
  }
  return char;
}
