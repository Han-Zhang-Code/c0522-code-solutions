/* exported truncate */
/*
declare a new empty string
if the length of the parameter string is longer than the string,
use for loop to loop though the whole string and assign to the new empty string, return to new string + '...'
if the length of the parameter string is not longer than the string,
use for loop to loop though the string and use parameter length for for loop condition,
assign the string value to new string, return to new string + '...'

*/
function truncate(length, string) {
  var newString = '';
  if (string.length < length) {
    for (var i = 0; i < string.length; i++) {
      newString += string[i];
    }
    return newString + '...';
  } else {
    for (var j = 0; j < length; j++) {

      newString += string[j];
    }
    return newString + '...';
  }
}
