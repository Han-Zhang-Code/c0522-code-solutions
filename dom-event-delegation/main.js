var $taskList = document.querySelector('.task-list');

$taskList.addEventListener('click', tasks);
function tasks(event) {
  console.log('event target:', event.target);
  console.log('event target tagName', event.target.tagName);
  if (event.target && event.target.tagName === 'BUTTON') {
    console.log('closest.task-list-item', event.target.closest('.task-list-item'));
    var $taskListItem = event.target.closest('.task-list-item');
    $taskListItem.remove();
  }
}
