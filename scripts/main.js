/* var cardOne = "queen";
 var cardTwo = "queen";
 var cardThree = "king";
 var cardFour = "king";

 console.log("User flipped " + cardOne);
 console.log("User flipped " + cardThree); */

 var cards = ["queen","queen","king","king"];
 var cardsInPlay = [];
 var cardOne = cards[0];
 cardsInPlay.push(cardOne);
 cardsInPlay.push(cards[2]);
 
 console.log("User flipped" , cardsInPlay[0]);

 if (cardsInPlay.length === 2) {
 	if(cardsInPlay[0] === cardsInPlay[1]){
 		alert("You found a match!")
 	} else {
 		alert("Sorry. Try again!")
 	}
 }