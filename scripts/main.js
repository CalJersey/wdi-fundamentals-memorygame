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

function flipCard(cardId) {
	console.log("card flipped is", cards[cardId].rank);
	console.log("card suit is", cards[cardId].suit);
	console.log("card image is", cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId]);
	if (cardsInPlay.length === 2) {
	 	checkForMatch();
	}
} 

flipCard(0);
flipCard(2);