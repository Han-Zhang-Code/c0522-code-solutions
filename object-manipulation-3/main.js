/*
declare new array called players, at each array value is an object with two property: name and hand, initialize the name and initialize the hand to empty array
declare new array with four suits, declare other array with 13 ranks, and declare an empty array to hold the carddeck
loop through both array and inside the loop declare a card object virable with two properties: suit and rank, assign both array value accordingly to the card variable,
after that, push the card into the cardDeck, and use shuffle method in Lodash to shuffl the card deck
loop through the player array and use pop and push method to deal each player a card, use pop and push method again to deal each player two card.
convert Ace, J,Q,K to numbers, calculate the sum and assign to each player object as the third property
find the max sum and find who has that max sum, whoever has that max sum is the winner
*/

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
console.log('Players: ', players);

var suit = ['clubs', 'diamonds', 'hearts', 'spades'];
var rank = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
var cardDeck = [];
for (var i = 0; i < suit.length; i++) {
  for (var j = 0; j < rank.length; j++) {
    var card = { suit: suit[i], rank: rank[j] };
    cardDeck.push(card);
  }
}

console.log('Card Deck: ', cardDeck);
var shuffled = _.shuffle(cardDeck);
console.log('shuffled Card Deck:', shuffled);

for (var a = 0; a < players.length; a++) {
  for (var b = 0; b < 2; b++) {
    players[a].hand.push(shuffled.pop());
  }
}

for (var d = 0; d < players.length; d++) {
  for (var c = 0; c < players[d].hand.length; c++) {
    if (players[d].hand[c].rank === 'Ace') {
      players[d].hand[c].rank = 11;
    } else if (players[d].hand[c].rank === 'Jack' || players[d].hand[c].rank === 'Queen' || players[d].hand[c].rank === 'King') {
      players[d].hand[c].rank = 10;
    }
  }
  var sum = 0;
  for (var e = 0; e < players[d].hand.length; e++) {
    sum += players[d].hand[e].rank;
    players[d].sums = sum;
  }
}

var scores = [];
for (var f = 0; f < players.length; f++) {
  scores.push(players[f].sums);
}
var maxScore = _.max(scores);
for (var g = 0; g < players.length; g++) {
  if (players[g].sums === maxScore) {
    console.log('the Winner is:', players[g].name);
  }
}

for (var h = 0; h < players.length; h++) {
  delete players[h].sums;
}
