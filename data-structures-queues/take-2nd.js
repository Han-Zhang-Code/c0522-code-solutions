/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() === undefined) return undefined;
  var a = queue.dequeue();
  if (queue.peek() === undefined) return a;
  var b = queue.dequeue();
  queue.enqueue(a);
  return b;
}
