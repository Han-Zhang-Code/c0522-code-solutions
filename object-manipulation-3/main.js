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

for (var a = 0; a < players.length; a++) {

  players[a].hand.push(shuffled.pop());
  players[a].hand.push(shuffled.pop());

}
console.log(players);
