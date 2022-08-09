/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) return stack.peek();
  var firstOut = stack.pop();
  stack.push(value);
  stack.push(firstOut);

}
