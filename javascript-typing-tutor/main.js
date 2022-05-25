var currentIndex = 0;
function keyIn(event) {
  var $keyIn = document.querySelectorAll('span');
  if (event.key === $keyIn[currentIndex].outerText || (event.key === ' ' && $keyIn[currentIndex].innerHTML === '&nbsp;')) {
    $keyIn[currentIndex].className = 'make-green';
    currentIndex++;
  } else {
    $keyIn[currentIndex].className = 'make-red';
  }
}
document.addEventListener('keydown', keyIn);
