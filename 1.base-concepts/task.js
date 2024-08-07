"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = Math.pow(b, 2) - 4 * a * c;

	if (d === 0) {
		let result = (-b) / (2 * a);
		arr.push(result);
	} else if (d > 0) {
		let result_1 = ((-b) + Math.sqrt(d)) / (2 * a);
		let result_2 = ((-b) - Math.sqrt(d)) / (2 * a);
		arr.push(result_1, result_2);
	} else {
		arr = [];
	}
	return arr;
}
console.log(solveEquation(1, 5, 4))


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let partMonth = percent / 100 / 12;
	let creditBody = amount - contribution;
	let payment = creditBody * (partMonth + (partMonth / (((1 + partMonth) ** countMonths) - 1)));
	let sum = parseFloat((payment * countMonths).toFixed(2));
	return sum;
}

console.log(calculateTotalMortgage(10, 1000, 50000, 12))