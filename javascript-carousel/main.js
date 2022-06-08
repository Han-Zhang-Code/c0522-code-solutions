var $img = document.querySelector('#image');
var $dots1 = document.querySelector('#bulbasaur');
$dots1.addEventListener('click', selectedBulbasaur);
function selectedBulbasaur() {
  clearInterval(intervalID);
  intervalID = setInterval(carousel, 3000);
  $img.setAttribute('src', 'images/001.png');
  $img.setAttribute('alt', '001.png');
  $dots1.className = 'fas fa-circle add-padding-5';
  $dots2.className = 'far fa-circle add-padding-5';
  $dots3.className = 'far fa-circle add-padding-5';
  $dots4.className = 'far fa-circle add-padding-5';
  $dots5.className = 'far fa-circle add-padding-5';
}
var $dots2 = document.querySelector('#charmander');
$dots2.addEventListener('click', selectedCharmander);
function selectedCharmander() {
  clearInterval(intervalID);
  intervalID = setInterval(carousel, 3000);
  $img.setAttribute('src', 'images/004.png');
  $img.setAttribute('alt', '004.png');
  $dots1.className = 'far fa-circle add-padding-5';
  $dots2.className = 'fas fa-circle add-padding-5';
  $dots3.className = 'far fa-circle add-padding-5';
  $dots4.className = 'far fa-circle add-padding-5';
  $dots5.className = 'far fa-circle add-padding-5';
}

var $dots3 = document.querySelector('#squirtle');
$dots3.addEventListener('click', selectedSquirtle);
function selectedSquirtle() {
  clearInterval(intervalID);
  intervalID = setInterval(carousel, 3000);
  $img.setAttribute('src', 'images/007.png');
  $img.setAttribute('alt', '007.png');
  $dots1.className = 'far fa-circle add-padding-5';
  $dots2.className = 'far fa-circle add-padding-5';
  $dots3.className = 'fas fa-circle add-padding-5';
  $dots4.className = 'far fa-circle add-padding-5';
  $dots5.className = 'far fa-circle add-padding-5';
}

var $dots4 = document.querySelector('#pikachu');
$dots4.addEventListener('click', selectedPikachu);
function selectedPikachu() {
  clearInterval(intervalID);
  intervalID = setInterval(carousel, 3000);
  $img.setAttribute('src', 'images/025.png');
  $img.setAttribute('alt', '025.png');
  $dots1.className = 'far fa-circle add-padding-5';
  $dots2.className = 'far fa-circle add-padding-5';
  $dots3.className = 'far fa-circle add-padding-5';
  $dots4.className = 'fas fa-circle add-padding-5';
  $dots5.className = 'far fa-circle add-padding-5';
}

var $dots5 = document.querySelector('#jigglypuff');
$dots5.addEventListener('click', selectedJigglypuff);
function selectedJigglypuff() {
  clearInterval(intervalID);
  intervalID = setInterval(carousel, 3000);
  $img.setAttribute('src', 'images/039.png');
  $img.setAttribute('alt', '039.png');
  $dots1.className = 'far fa-circle add-padding-5';
  $dots2.className = 'far fa-circle add-padding-5';
  $dots3.className = 'far fa-circle add-padding-5';
  $dots4.className = 'far fa-circle add-padding-5';
  $dots5.className = 'fas fa-circle add-padding-5';
}

var $arrowRight = document.querySelector('.fa-chevron-right');
$arrowRight.addEventListener('click', nextPic);
function nextPic() {
  clearInterval(intervalID);
  intervalID = setInterval(carousel, 3000);
  if ($img.getAttribute('alt') === '001.png') {
    selectedCharmander();
  } else if ($img.getAttribute('alt') === '004.png') {
    selectedSquirtle();
  } else if ($img.getAttribute('alt') === '007.png') {
    selectedPikachu();
  } else if ($img.getAttribute('alt') === '025.png') {
    selectedJigglypuff();
  } else if ($img.getAttribute('alt') === '039.png') {
    selectedBulbasaur();
  }
}

var $arrowLeft = document.querySelector('.fa-chevron-left');
$arrowLeft.addEventListener('click', lastPic);
function lastPic() {
  clearInterval(intervalID);
  intervalID = setInterval(carousel, 3000);
  if ($img.getAttribute('alt') === '001.png') {
    selectedJigglypuff();
  } else if ($img.getAttribute('alt') === '039.png') {
    selectedPikachu();
  } else if ($img.getAttribute('alt') === '025.png') {
    selectedSquirtle();
  } else if ($img.getAttribute('alt') === '007.png') {
    selectedCharmander();
  } else if ($img.getAttribute('alt') === '004.png') {
    selectedBulbasaur();
  }
}

var intervalID = setInterval(carousel, 3000);
function carousel() {
  if ($img.getAttribute('alt') === '001.png') {
    selectedCharmander();
  } else if ($img.getAttribute('alt') === '004.png') {
    selectedSquirtle();
  } else if ($img.getAttribute('alt') === '007.png') {
    selectedPikachu();
  } else if ($img.getAttribute('alt') === '025.png') {
    selectedJigglypuff();
  } else if ($img.getAttribute('alt') === '039.png') {
    selectedBulbasaur();
  }
}
