var $lightbulb = document.querySelector('.circle-night');
var $room = document.querySelector('.background-night');
function clicked() {
  if ($lightbulb.className === 'circle-night') {

    $lightbulb.className = 'circle-day';
    $room.className = 'background-day';
  } else if ($lightbulb.className === 'circle-day') {
    $lightbulb.className = 'circle-night';
    $room.className = 'background-night';
  }
}
$lightbulb.addEventListener('click', clicked);
