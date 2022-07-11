function squareSum(numbers: number[]) {
	let initialResult: number[] = [];

	for (const number of numbers) {
		const squaredNumber = number * number;
		initialResult.push(squaredNumber);
	}

	let result: number;

	if (initialResult.length) {
		result = initialResult.reduce((prev, acc) => prev + acc);
	} else {
		result = 0;
	}

	return result;
}
