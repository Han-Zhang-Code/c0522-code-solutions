/* exported titleCase */
/*
declare a new string, make the first letter to uppcase and return to new string
use for loop to iterate through array start with index 1, and make the next index letter lower case
if the index at the value ' ' or '-', make it to uppercase and increment the index
at this point all String should be capitalized, use split method to convert the string to word array
and iterate through array use if-else statement to handle special cases
*/
function titleCase(title) {
  var newString = '';
  newString = title[0].toUpperCase();
  for (var i = 1; i < title.length; i++) {
    newString += title[i].toLowerCase();
    if (title[i] === ' ' || title[i] === '-') {
      newString += title[i + 1].toUpperCase();
      i++;
    }
  }
  var noChange = ['And', 'Or', 'For', 'Nor', 'But', 'A', 'An', 'The', 'As', 'At', 'By', 'In', 'Of', 'On', 'Per', 'To'];
  var finalArray = newString.split(' ');
  for (var j = 0; j < finalArray.length; j++) {
    if (noChange.includes(finalArray[j]) && (j !== 0) && (finalArray[j - 1].charAt(finalArray[j - 1].length - 1) !== ':')) {
      var temp = finalArray[j].split('');
      temp[0] = temp[0].toLowerCase();
      finalArray[j] = temp.join('');
    } else if (finalArray[j] === 'Javascript') {
      finalArray[j] = 'JavaScript';
    } else if (finalArray[j] === 'Javascript:') {
      finalArray[j] = 'JavaScript:';
    } else if (finalArray[j] === 'Api') {
      finalArray[j] = 'API';
    }
  }
  var finalString = finalArray.join(' ');
  return finalString;
}
