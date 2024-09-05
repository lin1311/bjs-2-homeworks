'use strict'

function solveEquation(a, b, c) {
	let d = b ** 2 - 4 * a * c;
	let arr = [];

	if (d == 0) {
		arr.push(-b / (2 * a));
	} else if (d > 0) {
		arr.push((-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a));
	};

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	percent = percent / (100 * 12);
	let s = amount - contribution;
	let payMonth = s * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
	let totalMortgage = payMonth * countMonths;

	return (Math.round(totalMortgage * 100) / 100);
};