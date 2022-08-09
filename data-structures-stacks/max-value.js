/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) return -Infinity;
  var max = stack.peek();
  while (stack.peek() !== undefined) {
    stack.pop();
    if (stack.peek() > max) max = stack.peek();
  }
  return max;
}
