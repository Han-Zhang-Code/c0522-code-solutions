/* exported capitalizeWord */
/*
declare an empty string variable
set the word[0] to upper case
use for loop to loop though the word and make the rest word to lower case and assign to new empty string variable
if the result equals to Javascript, assign JavaScript to the new string variable
return the new string variable

*/
// function capitalizeWord(word) {
//   var newWord = '';
//   newWord = word[0].toUpperCase();
//   for (var i = 1; i < word.length; i++) {
//     newWord += word[i].toLowerCase();
//   }
//   if (newWord.toLowerCase() === 'javascript') {
//     newWord = 'JavaScript';
//   }

//   return newWord;
// }

function capitalizeWord(word) {
  var newWord = '';
  newWord = word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    newWord += word[i].toLowerCase();
  }
  if (newWord === 'Javascript') {
    var temp = newWord.split('');
    temp[4] = 'S';
    return temp.join('');

  }

  return newWord;
}
