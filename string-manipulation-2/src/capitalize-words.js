/* exported capitalizeWords */
/*
make the string all to lowercase and assign to a new variable
use split method to split the string into array
use for loop to iterate through the array, and capitalize each element
use join() method to convert array into string seprate by a space
return to the new string
*/

// function capitalizeWords(string) {
//   var newString = string.toLowerCase();
//   newString = newString.split(' ');
//   for (var i = 0; i < newString.length; i++) {
//     newString[i] = newString[i][0].toUpperCase() + newString[i].substring(1);
//   }
//   return newString.join(' ');

// }

function capitalizeWords(string) {
  var newString = '';
  newString = string[0].toUpperCase();
  for (var i = 1; i < string.length; i++) {
    newString += string[i].toLowerCase();

    if (string[i] === ' ') {
      newString += string[i + 1].toUpperCase();
      i++;
    }
  }
  return newString;
}
