/* exported union */
/*
combine both array into a new array
after that use unique method to delete the repeating element
*/
function union(first, second) {
  var newArray = [...first];
  for (var i = 0; i < second.length; i++) {
    newArray.push(second[i]);
  }
  var finalArray = [];
  for (var j = 0; j < newArray.length; j++) {
    if (!finalArray.includes(newArray[j])) {
      finalArray.push(newArray[j]);
    }
  }
  return finalArray;
}
