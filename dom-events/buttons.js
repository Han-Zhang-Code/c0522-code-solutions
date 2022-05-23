function handleClick(event) {
  console.log('button clicked');
  console.log('event object:', event);
  console.log('target: ', event.target);
}
var $mouseClick = document.querySelector('.click-button');
$mouseClick.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log('target: ', event.target);
}
var $mouseOver = document.querySelector('.hover-button');
$mouseOver.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event:', event);
  console.log('target: ', event.target);
}
var $mouseDoubleClicked = document.querySelector('.double-click-button');
$mouseDoubleClicked.addEventListener('dblclick', handleDoubleClick);
