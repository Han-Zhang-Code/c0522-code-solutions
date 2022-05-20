/* exported isVowel */
/*
compare the letter to each vowel,
if its vowel return true,
if not return false
*/
function isVowel(char) {
  if (char === 'a' || char === 'A' || char === 'e' || char === 'E' || char === 'i' || char === 'I' || char === 'o' || char === 'O' || char === 'u' || char === 'U') {
    return true;
  } else {
    return false;
  }
}
