"use script";

//Задача 1

function parseCount(numb) {
	let error = new Error("Невалидное значение");
	if (Number.isNaN(Number.parseFloat(numb)) === true) {
		throw error;
	}
	return Number.parseFloat(numb);
}


function validateCount(numb) {
	try {
		parseCount(numb);
	} catch (error) {
		return error;
	}
	return parseCount(numb);
}


//Задача 2

class Triangle {
	constructor(a, b, c) {
		let error = new Error("Треугольник с такими сторонами не существует")
		if ((a + b) < c || (c + b) < a || (a + c) < b) {
			throw error;
		}
		this.a = a;
		this.b = b;
		this.c = c;
	}

	get perimeter() {
		return (this.a + this.b + this.c);
	}

	get area() {
		let p = 0.5 * (this.a + this.b + this.c);
		let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
		return (parseFloat(s.toFixed(3)));
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			get perimeter() {
				return "Ошибка! Треугольник не существует";
			},
			get area() {
				return "Ошибка! Треугольник не существует";
			}
		}
	}
}