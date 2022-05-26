var currentIndex = 0;
var count = 0;
function keyIn(event) {
  var $keyIn = document.querySelectorAll('span');
  var $count = document.querySelector('.accuracy');
  if ((event.key === $keyIn[currentIndex].outerText && currentIndex < $keyIn.length - 1) || (event.key === ' ' && $keyIn[currentIndex].innerHTML === '&nbsp;')) {
    $keyIn[currentIndex].className = 'make-green';
    $keyIn[currentIndex + 1].className = 'add-underline';
    currentIndex++;
  } else if (event.key !== $keyIn[currentIndex].outerText) {
    $keyIn[currentIndex].className = 'make-red add-underline';
    count++;
    $count.textContent = 'Accuracy: ' + (100 - count / ($keyIn.length) * 100).toFixed(2) + '%';
  }
}

document.addEventListener('keydown', keyIn);

var $btn = document.querySelector('.reset');
function reset() {
  var $keyIn = document.querySelectorAll('span');
  var $count = document.querySelector('.accuracy');
  for (var i = 0; i < $keyIn.length; i++) {
    $keyIn[i].className = ' ';
  }
  currentIndex = 0;
  $count.textContent = 'Accuracy: 100%';
  $keyIn[0].className = 'add-underline';
  count = 0;
}
$btn.addEventListener('click', reset);
