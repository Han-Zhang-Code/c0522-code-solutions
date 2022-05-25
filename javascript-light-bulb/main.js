var $lightbulb = document.querySelector('.circle-night');
var $room = document.querySelector('.background-night');

var ifClicked = true;
function clicked() {

  if (ifClicked) {

    $lightbulb.className = 'circle-day';
    $room.className = 'background-day';
    ifClicked = false;
  } else if (!ifClicked) {
    $lightbulb.className = 'circle-night';
    $room.className = 'background-night';
    ifClicked = true;
  }
}
$lightbulb.addEventListener('click', clicked);
