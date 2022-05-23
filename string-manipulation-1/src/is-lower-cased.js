/* exported isLowerCased */
/*
for loop to loop through the word
check each index for the word array,
compare each letter to word.tolowercase(), to determing if its lowercase letter
if the letter is not lowercased, return false
else return true

*/
function isLowerCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}
