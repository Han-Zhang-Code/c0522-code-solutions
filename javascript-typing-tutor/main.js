var currentIndex = 0;
function keyIn(event) {
  var $keyIn = document.querySelectorAll('span');
  if (event.key === $keyIn[currentIndex].outerText || (event.key === ' ' && $keyIn[currentIndex].innerHTML === '&nbsp;')) {
    $keyIn[currentIndex].className = 'make-green';
    $keyIn[currentIndex + 1].className = 'add-underline';
    currentIndex++;
  } else {
    $keyIn[currentIndex].className = 'make-red add-underline';
  }
}
document.addEventListener('keydown', keyIn);
