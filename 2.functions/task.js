function getArrayParams(...arr) {
	let minN = Infinity;
	let maxN = -Infinity;
	let avg = [0];
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] >= maxN) {
			maxN = arr[i];
		}
		if (arr[i] <= minN) {
			minN = arr[i];
		}
		sum = sum + arr[i];
	}
	avg = parseFloat((sum / arr.length).toFixed(2));
	return {
		min: minN,
		max: maxN,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	const initialValue = 0;
	const sum = arr.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		initialValue,
	);
	return sum;
}

function differenceMaxMinWorker(...arr) {
	let result;
	let maxx = Math.max.apply(null, arr);
	let minn = Math.min.apply(null, arr);
	if (maxx === -Infinity) {
		result = 0;
	} else {
		result = maxx - minn;
	}
	return result;
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement = sumEvenElement + arr[i];
		} else {
			sumOddElement = sumOddElement + arr[i];
		}
	}
	if (sumEvenElement !== null) {
		return sumEvenElement - sumOddElement;
	} else {
		return 0;
	}
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement = sumEvenElement + arr[i];
			count++;
		}
	}
	if (count !== 0) {
		return sumEvenElement / count;
	} else {
		return 0;
	}
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const result = func(...arrOfArr[i]);
		if (maxWorkerResult < result) {
			maxWorkerResult = result;
		}
	}

	return maxWorkerResult;
}
const arr = [
	[10, 10, 11, 20, 10],
	[67, 10, 2, 39, 88],
	[72, 75, 51, 87, 43],
	[30, 41, 55, 96, 62]
];
console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72