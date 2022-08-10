/* exported countValues */

function countValues(stack) {
  var count = 0;
  while (stack.peek() !== undefined) {
    count++;
    stack.pop();
  }
  return count;
}
