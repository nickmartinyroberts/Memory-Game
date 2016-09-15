        var cardOne = document.getElementById('cardOne').onclick = function() {
			document.getElementById('cardOne').innerHTML = '<img src="/static/uploads/photo/2015/08/11/11/57/spades-884203_960_720.png">'
		}
		var cardTwo = document.getElementById('cardTwo').onclick = function() {
			document.getElementById('cardTwo').innerHTML = '<img src="/static/uploads/photo/2015/08/11/11/57/spades-884203_960_720.png>'}
		var cardThree = document.getElementById('cardThree').onclick = function() {
			document.getElementById('cardThree').innerHTML = '<img src="/static/uploads/photo/2015/08/11/11/57/diamonds-884195_960_720.png">'}	
		var cardFour = document.getElementById('cardFour').onclick = function() {
			document.getElementById('cardFour').innerHTML = <img src="/static/uploads/photo/2015/08/11/11/57/diamonds-884195_960_720.png>'
		}

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var gameboard = document.getElementById("game-board")

var createBoard = function(){
	var oldBoard = document.getElementById("game-board");
	for(var i = 0; i < cards.length; i++) {
      var newCards = document.createElement('div');
      newCards.className = "card";
      oldBoard.appendChild(newCards);
      cardElement.setAttribute('data-card', cards[i]);
      cardElement.addEventListener('click', isTwoCards);

	}
};

var isMatch = function (){  
if (cards[0] === cards[1]) {
	alert ("You found a match!");
} else if (cards[2] === cards[3]){
	alert ("You found a match!");
} else {
	alert ("Sorry, try again.")
}
this.innerHTML = "none";
};

var isTwoCards = function (){
  cardsInPlay.push(this.getAttribute('data-card'));
   if (cardsInPlay.length === 2) {
   isMatch(cardsInPlay);
   cardsInPlay = [];
}
}


if (this.getAttribute('data-card') === 'king' || this.getAttribute('data-card') === 'king') {
this.innerHTML = '<img src="/static/uploads/photo/2015/08/11/11/57/diamonds-884195_960_720.png">'
} else if (this.getAttribute('data-card') === 'queen' || this.getAttribute('data-card') === 'queen') {
this.innerHTML = '<img src="/static/uploads/photo/2015/08/11/11/57/spades-884203_960_720.png">'}
};


createBoard();




