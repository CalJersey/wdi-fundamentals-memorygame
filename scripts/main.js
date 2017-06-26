/* var cardOne = "queen";
 var cardTwo = "queen";
 var cardThree = "king";
 var cardFour = "king";

 console.log("User flipped " + cardOne);
 console.log("User flipped " + cardThree); */

 var cards = [
 	{
 		rank: "queen",
 		suit: "hearts",
 		cardImage: "images/queen-of-hearts.png"

 	},
 	{
 		rank: "queen",
 		suit: "diamonds",
 		cardImage: "images/queen-of-diamonds.png"

 	},
 	{
 		rank: "king",
 		suit: "hearts",
 		cardImage: "images/king-of-hearts.png"

 	},
 	{
 		rank: "king",
 		suit: "diamonds",
 		cardImage: "images/queen-of-diamonds.png"

 	}
 ];
 var cardsInPlay = [];
 
function checkForMatch() {
 	if(cardsInPlay[0].rank === cardsInPlay[1].rank){
		alert("You found a match!");
	} else {
		alert("Sorry. Try again!");
	}
		
}

function flipCard() {
	var cardId = this.getAttribute("data-id");
	console.log("card flipped is", cards[cardId].rank);
	console.log("card suit is", cards[cardId].suit);
	console.log("card image is", cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId]);

	this.setAttribute('src',cards[cardId].cardImage);

	if (cardsInPlay.length === 2) {
	 	checkForMatch();
	}
} 

function createBoard(){
	for (var i=0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src',"images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();