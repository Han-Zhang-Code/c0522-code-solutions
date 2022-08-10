/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) return stack.peek();
  var firstOut = stack.pop();
  var secondOut = stack.peek();
  stack.push(firstOut);
  return secondOut;
}
