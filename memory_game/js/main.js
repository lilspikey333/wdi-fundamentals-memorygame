
const cards = ['queen', 'queen', 'king', 'king'];
const cardsInPlay = []

const checkForMatch = function () {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		}
	}
}

const flipCard = function (cardId) {

	console.log('User flipped ' + cards[cardId]);
	cardsInPlay.push(cards[cardId]);

	checkForMatch();
}

flipCard(0);
flipCard(2);
