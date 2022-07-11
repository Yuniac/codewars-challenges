function sumArray(array: number[] | [] | undefined | null | [number]): number {
	if (!array?.length || array.length === 1 || !array) {
		return 0;
	}

	const result = array?.sort((a, b) => a - b);
	result.pop();
	result.shift();

	return result.reduce((prev, acc) => prev + acc, 0);
}
