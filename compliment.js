function pickRandomWord (word) {
	var randomWord = Math.floor(Math.random() * (word.length - 0)) + 0;
	return word[randomWord];
}

 function generateCompliment () {
 	var bodyParts = ["hair","teeth","ears", "face"];
 	var adjectives = ["beautiful", "gorgeous", "wonderful", "dank", "noice", "coolio"];
 	var randomWord = ["flying","jumping","moving", "eating", "trending", "remotely alive", "in bleach"];
 	var randomObject = ["meme", "fish", "factory", "streetgum", "crystal"]
 	var perfectCompliment = "Your"+  pickRandomWord(bodyParts)+  "is like a" +  pickRandomWord (adjectives)  + pickRandomWord (randomObject) + pickRandomWord(randomWord) + "!!!!!1!!?"
 	console.log (perfectCompliment);
 }

 generateCompliment();