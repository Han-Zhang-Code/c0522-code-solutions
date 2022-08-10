/* exported postpone */

function postpone(queue) {
  if (queue.peek() === undefined) return;
  var value = queue.dequeue();
  queue.enqueue(value);
}
