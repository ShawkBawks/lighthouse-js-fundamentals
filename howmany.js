

for ( var row = 0; row < numbers.length; row++) {
	for (var column = 0; column < numbers[row].length; column++) {
		if (numbers[row][column] % 2 === 0) {
			numbers[row][column] = "even";
		} else numbers [row][column] = "odd";
		}
	}
console.log(numbers);