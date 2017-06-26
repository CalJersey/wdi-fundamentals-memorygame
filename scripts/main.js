/* var cardOne = "queen";
 var cardTwo = "queen";
 var cardThree = "king";
 var cardFour = "king";

 console.log("User flipped " + cardOne);
 console.log("User flipped " + cardThree); */

 var cards = ["queen","queen","king","king"];
 var cardsInPlay = [];
 
function checkForMatch() {
 	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	} else {
		alert("Sorry. Try again!");
	}
		
}

function flipCard(cardId) {
	console.log("card flipped was", cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	if (cardsInPlay.length === 2) {
	 	checkForMatch();
	}
} 

flipCard(0);
flipCard(2);