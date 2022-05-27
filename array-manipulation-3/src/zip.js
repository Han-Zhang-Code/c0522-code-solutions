/* exported zip */
/*
declare a new varible length assign initial value to 0, and declare a new empty array
assign the shorter array.length to length variable by comparing two array.length
start a loop with shorter length as condition, now that first array, second
array and the new array that we are returing have same length so all we need to
do is assign each value at the each array index to the new array
*/
function zip(first, second) {
  var length = 0;
  var newArray = [];
  if (first.length < second.length) {
    length = first.length;
  } else {
    length = second.length;
  }
  for (var i = 0; i < length; i++) {
    newArray[i] = [first[i], second[i]];
  }
  return newArray;
}
