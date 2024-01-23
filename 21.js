"use strict";

// Приоритет операторов
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

const hamburger = 5;
const fries = 0;

if (hamburger && fries) {
	console.log("Я сыт!");
}

console.log(hamburger && fries);

// Ноль, пустая строка, null, undefined, NaN - всегда false
// Если логические операторы работают не с boolean значениями, то они возвращают сами значения. Если все значения true,
// то возвращают последнее значение

console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log("ask.jhv,mfdvbdkfjh" && 0);

const hamburger = 3;
const fries = 1;
const cola = 0;

console.log(hamburger === 3 && cola && fries);

if (hamburger === 3 && cola === 1 && fries) {
	console.log("Все сыты!");
} else {
	console.log("Мы уходим!");
}

console.log(hamburger && fries);

const pizza = 3;
const salat = 2;
const juice = 0;
const nuggets = 3;

if (pizza === 3 && juice === 2 || nuggets === 3 && salat) {
	console.log("Все сыты!");
} else {
	console.log("Мы уходим!");
}

console.log(pizza || salat || juice);
console.log(pizza === 3 && juice === 2);
console.log(pizza === 3 && juice === 2 || nuggets === 3 && salat);

// Логический оператор ИЛИ возвращает первое правдивое значение. Если все значения ложны, возвращает последнее ложное
if (hamburger || cola || fries) {
	console.log("Все довольны!");
} else {
	console.log("Мы уходим!");
}

let johnReport, alexReport, samReport, mariaReport = "done";

console.log(johnReport || alexReport || samReport || mariaReport);

console.log(!0);