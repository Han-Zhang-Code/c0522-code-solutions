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
// for (var j = 0; j < finalArray.length; j++) {
//   if (finalArray[j] === 'And' && (j !== 0) && (finalArray[j - 1].charAt(finalArray[j - 1].length - 1) !== ':')) {
//     finalArray[j] = 'and';
//   } else if (finalArray[j] === 'Or' && (j !== 0) && (finalArray[j - 1].charAt(finalArray[j - 1].length - 1) !== ':')) {
//     finalArray[j] = 'or';
//   } else if (finalArray[j] === 'For' && (j !== 0) && (finalArray[j - 1].charAt(finalArray[j - 1].length - 1) !== ':')) {
//     finalArray[j] = 'for';
//   } else if (finalArray[j] === 'Javascript') {
//     finalArray[j] = 'JavaScript';
//   } else if (finalArray[j] === 'Nor' && (j !== 0) && (finalArray[j - 1].charAt(finalArray[j - 1].length - 1) !== ':')) {
//     finalArray[j] = 'nor';
//   } else if (finalArray[j] === 'But' && (j !== 0) && (finalArray[j - 1].charAt(finalArray[j - 1].length - 1) !== ':')) {
//     finalArray[j] = 'but';
//   } else if (finalArray[j] === 'A' && (j !== 0) && (finalArray[j - 1].charAt(finalArray[j - 1].length - 1) !== ':')) {
//     finalArray[j] = 'a';
//   } else if (finalArray[j] === 'An' && (j !== 0) && (finalArray[j - 1].charAt(finalArray[j - 1].length - 1) !== ':')) {
//     finalArray[j] = 'an';
//   } else if (finalArray[j] === 'The' && (j !== 0) && (finalArray[j - 1].charAt(finalArray[j - 1].length - 1) !== ':')) {
//     finalArray[j] = 'the';
//   } else if (finalArray[j] === 'As' && (j !== 0) && (finalArray[j - 1].charAt(finalArray[j - 1].length - 1) !== ':')) {
//     finalArray[j] = 'as';
//   } else if (finalArray[j] === 'At' && (j !== 0) && (finalArray[j - 1].charAt(finalArray[j - 1].length - 1) !== ':')) {
//     finalArray[j] = 'at';
//   } else if (finalArray[j] === 'By' && (j !== 0) && (finalArray[j - 1].charAt(finalArray[j - 1].length - 1) !== ':')) {
//     finalArray[j] = 'by';
//   } else if (finalArray[j] === 'In' && (j !== 0) && (finalArray[j - 1].charAt(finalArray[j - 1].length - 1) !== ':')) {
//     finalArray[j] = 'in';
//   } else if (finalArray[j] === 'Of' && (j !== 0) && (finalArray[j - 1].charAt(finalArray[j - 1].length - 1) !== ':')) {
//     finalArray[j] = 'of';
//   } else if (finalArray[j] === 'On' && (j !== 0) && (finalArray[j - 1].charAt(finalArray[j - 1].length - 1) !== ':')) {
//     finalArray[j] = 'on';
//   } else if (finalArray[j] === 'Per' && (j !== 0) && (finalArray[j - 1].charAt(finalArray[j - 1].length - 1) !== ':')) {
//     finalArray[j] = 'per';
//   } else if (finalArray[j] === 'To' && (j !== 0) && (finalArray[j - 1].charAt(finalArray[j - 1].length - 1) !== ':')) {
//     finalArray[j] = 'to';
//   } else if (finalArray[j] === 'Javascript:') {
//     finalArray[j] = 'JavaScript:';
//   } else if (finalArray[j] === 'Api') {
//     finalArray[j] = 'API';
//   }

// }
// var finalString = finalArray.join(' ');
// return finalString;
// }
