var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'King';
var cardFour = 'King';

// if (cardOne === cardTwo){
// 	alert ("You found a match!");
// } else if (cardThree === cardFour){
// 	alert ("You found a match!");
// } else {
// 	alert ("Sorry, try again.")
// }

var createBoard = function(){
	var oldBoard = document.getElementById("game-board");
	for(var i = 0; i < 4; i++) {
      var newCards = document.createElement('div');
      newCards.className = "card";
      oldBoard.appendChild(newCards);
	}
};
createBoard();

// var createBoard = function(){
// 	for(i = 0); i<4; i++){
// 	gameBoard.appendChild(createBoard);
// }
// }
