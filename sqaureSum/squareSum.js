"use strict";
function squareSum(numbers) {
    let initialResult = [];
    for (const number of numbers) {
        const squaredNumber = number * number;
        initialResult.push(squaredNumber);
    }
    let result;
    if (initialResult.length) {
        result = initialResult.reduce((prev, acc) => prev + acc);
    }
    else {
        result = 0;
    }
    return result;
}
