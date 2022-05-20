/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var newWrods = [];
  for (var i = 0; i < words.length; i++) {
    newWrods.push(words[i] += suffix);
  }
  return newWrods;
}
