/* exported lastChars */
/*
iterate though the string backwards assign to a new variable
iterate though the string backwards again with the length value
if the length is shorter than string length, assign the length long value to other new variable
else assign the string length long value to the other new variable
return to the other new variable
*/

function lastChars(length, string) {
  var newString = '';
  var finalString = '';
  for (var i = string.length - 1; i >= 0; i--) {

    newString += string[i];
  }
  if (string.length > length) {
    for (var j = length - 1; j >= 0; j--) {
      finalString += newString[j];
    }
    return finalString;
  } else {
    for (var k = string.length - 1; k >= 0; k--) {
      finalString += newString[k];
    }
    return finalString;

  }
}
