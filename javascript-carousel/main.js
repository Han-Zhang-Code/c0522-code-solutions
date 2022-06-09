var $circles = document.querySelector('.circles');
var $circle = document.querySelectorAll('.circle');
var $views = document.querySelectorAll('.view');
$circles.addEventListener('click', selected);
function selected(event) {
  clearInterval(intervalID);
  intervalID = setInterval(carousel, 3000);
  var $dataview = event.target.getAttribute('data-view');
  for (var i = 0; i < $circle.length; i++) {
    if ($circle[i].getAttribute('data-view') === $dataview) {
      $circle[i].className = 'fas fa-circle add-padding-5 circle';
      $views[i].className = 'view';
    } else if ($circle[i].getAttribute('data-view') !== $dataview) {
      $circle[i].className = 'far fa-circle add-padding-5 circle';
      $views[i].className = 'view hidden';
    }
  }
}
var $arrowRight = document.querySelector('.fa-chevron-right');
$arrowRight.addEventListener('click', arrowActivityRight);
var count = 0;
function arrowActivityRight(event) {
  clearInterval(intervalID);
  intervalID = setInterval(carousel, 3000);
  if (count < $views.length - 1) {
    $circle[count].className = 'far fa-circle add-padding-5 circle';
    $views[count].className = 'view hidden';
    $circle[count + 1].className = 'fas fa-circle add-padding-5 circle';
    $views[count + 1].className = 'view';
  } else if (count === $views.length - 1) {
    $circle[count].className = 'far fa-circle add-padding-5 circle';
    $views[count].className = 'view hidden';
    $circle[0].className = 'fas fa-circle add-padding-5 circle';
    $views[0].className = 'view';
  }
  if (count < $views.length - 1) {
    count++;
  } else if (count === $views.length - 1) {
    count = 0;
  }
}
var $arrowLeft = document.querySelector('.fa-chevron-left');
$arrowLeft.addEventListener('click', arrowActivityLeft);
function arrowActivityLeft(event) {
  clearInterval(intervalID);
  intervalID = setInterval(carousel, 3000);
  if (count > 0) {
    $circle[count].className = 'far fa-circle add-padding-5 circle';
    $views[count].className = 'view hidden';
    $circle[count - 1].className = 'fas fa-circle add-padding-5 circle';
    $views[count - 1].className = 'view';
  } else if (count === 0) {
    $circle[count].className = 'far fa-circle add-padding-5 circle';
    $views[count].className = 'view hidden';
    $circle[$views.length - 1].className = 'fas fa-circle add-padding-5 circle';
    $views[$views.length - 1].className = 'view';
  }
  if (count > 0) {
    count--;
  } else if (count === 0) {
    count = $views.length - 1;
  }
}
var intervalID = setInterval(carousel, 3000);
function carousel() {
  arrowActivityRight();
}
