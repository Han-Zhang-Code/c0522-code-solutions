console.log('Lodash is loaded:', typeof _ !== 'undefined');
var players = [{
  name: 'Han',
  hand: []
}, {
  name: 'James',
  hand: []
}, {
  name: 'Tim',
  hand: []
}, {
  name: 'Nathan',
  hand: []
}];

var suit = ['clubs', 'diamonds', 'hearts', 'spades'];
var rank = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
var cardDeck = [];
for (var i = 0; i < suit.length; i++) {
  for (var j = 0; j < rank.length; j++) {
    var card = { suit: suit[i], rank: rank[j] };
    cardDeck.push(card);
  }
}
console.log(cardDeck);
var shuffled = _.shuffle(cardDeck);

console.log(players);
for (var a = 0; a < players.length; a++) {
  for (var b = 0; b < 2; b++) {
    players[a].hand.push(shuffled.pop());
  }
}

for (var d = 0; d < players.length; d++) {
  // sum.push(players[i].hand[0].rank + players[i].hand[1].rank);
  players[d].sums = players[d].hand[0].rank + players[d].hand[1].rank;
}
console.log(players);
