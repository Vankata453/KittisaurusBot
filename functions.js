//Various functions
function mathRandomInt(a, b) {
  if (a > b) {
	// Swap a and b to ensure a is smaller.
	var c = a;
	a = b;
	b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}

function shuffleAllNumsTo(num) {
	var array = [];
	
	for (var i = 0; i < num; i++) {
		array.push(i + 1);
	}
	
	var currentIndex = array.length,  randomIndex;
  
	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
		
		[array[currentIndex], array[randomIndex]] = [
		  array[randomIndex], array[currentIndex]];
	}
	
	return array;
}

function arrayRegex(elementsNeededToPass, array, regex) {
	var elementsPassed = 0;
	for (currElement = 0; currElement < array.length && elementsPassed < elementsNeededToPass; currElement++) {
		if (regex.test(array[currElement])) {
			elementsPassed++;
		}
	}
	return elementsPassed >= elementsNeededToPass;
}

//Export the functions to the other modules
module.exports = { mathRandomInt, shuffleAllNumsTo, arrayRegex };