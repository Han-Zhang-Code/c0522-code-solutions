/* exported pokedex */

var pokedex = [
  {
    number: '001',
    name: 'Bulbasaur',
    description: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    imageUrl: 'images/bulbasaur.png'
  },
  {
    number: '004',
    name: 'Charmander',
    description: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
    imageUrl: 'images/charmander.png'
  },
  {
    number: '007',
    name: 'Squirtle',
    description: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
    imageUrl: 'images/squirtle.png'
  },
  {
    number: '002',
    name: 'Ivysaur',
    description: 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
    imageUrl: 'images/ivysaur.png'
  },
  {
    number: '005',
    name: 'Charmeleon',
    description: 'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.',
    imageUrl: 'images/charmeleon.png'
  },
  {
    number: '008',
    name: 'Wartortle',
    description: 'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.',
    imageUrl: 'images/wartortle.png'
  },
  {
    number: '003',
    name: 'Venusaur',
    description: 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
    imageUrl: 'images/venusaur.png'
  },
  {
    number: '006',
    name: 'Charizard',
    description: 'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.',
    imageUrl: 'images/charizard.png'
  },
  {
    number: '009',
    name: 'Blastoise',
    description: 'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.',
    imageUrl: 'images/blastoise.png'
  }
];

function renderPokemon(pokemon) {
  // var $appendtoRow = document.querySelector('.row');
  // $appendtoRow.appendChild(document.createElement('div')).setAttribute('class', 'column-third');
  // // var $appendtoColumn = document.querySelectorAll('.column-third:last-child');
  // var $appendtoColumn = Array.from(
  //   document.querySelectorAll('.column-third')
  // ).pop();
  // $appendtoColumn.appendChild(document.createElement('div')).setAttribute('class', 'pokemon-card');
  // // var $appendtoPokemon = document.querySelectorAll('.pokemon-card:last-child');
  // var $appendtoPokemon = Array.from(
  //   document.querySelectorAll('.pokemon-card')
  // ).pop();
  // $appendtoPokemon.appendChild(document.createElement('img')).setAttribute('src', pokemon.imageUrl);
  // // var $setChildDiv = document.querySelectorAll('.pokemon-card:last-child');
  // var $setChildDiv = Array.from(
  //   document.querySelectorAll('.pokemon-card')
  // ).pop();
  // $setChildDiv.appendChild(document.createElement('div')).setAttribute('class', 'pokemon-card-text');
  // // var $appendtoCardText = document.querySelector('.pokemon-card-text');
  // var $appendtoCardText = Array.from(
  //   document.querySelectorAll('.pokemon-card-text')
  // ).pop();
  // $appendtoCardText.appendChild(document.createElement('h2')).textContent = pokemon.name;
  // $appendtoCardText.appendChild(document.createElement('h3')).textContent = pokemon.number;
  // $appendtoCardText.appendChild(document.createElement('p')).textContent = pokemon.description;

  // return $appendtoRow;
  var $createColumn = document.createElement('div');
  $createColumn.setAttribute('class', 'column-third');

  var $createCard = document.createElement('div');
  $createCard.setAttribute('class', 'pokemon-card');

  var $createImg = document.createElement('img');
  $createImg.setAttribute('src', pokemon.imageUrl);

  var $createText = document.createElement('div');
  $createText.setAttribute('class', 'pokemon-card-text');

  var $setName = document.createElement('h2');
  $setName.textContent = pokemon.name;

  var $setNumber = document.createElement('h3');
  $setNumber.textContent = '#' + pokemon.number;

  var $setContent = document.createElement('p');
  $setContent.textContent = pokemon.description;

  $createColumn.appendChild($createCard);
  $createCard.appendChild($createImg);
  $createCard.appendChild($createText);
  $createText.appendChild($setName);
  $createText.appendChild($setNumber);
  $createText.appendChild($setContent);
  return $createColumn;
}
// for (var i = 0; i < pokedex.length; i++) {
//   renderPokemon(pokedex[i]);
// }
var $selectRow = document.querySelector('.row');
for (var i = 0; i < pokedex.length; i++) {
  var $pokemons = renderPokemon(pokedex[i]);
  $selectRow.appendChild($pokemons);
}
