"use strict";

// Принятие решений в вашем коде — условные конструкции
// https://developer.mozilla.org/ru/docs/Learn/JavaScript/Building_blocks/conditionals

if (4 == 9) {
	console.log("true");
} else {
	console.log("false");
}

const num = 50;

if (num < 49) {
	console.log("false");
} else if (num > 100) {
	console.log("false 2");
} else {
	console.log("Ok");
}

// Если условие в скобках верно, то выполняем команду после "?". Если не верно, то выполняем команду после ":"
// Тернарный оператор
(num === 50) ? console.log("Ok") : console.log("false");

// Конструкция switch всегда идет на строгое сравнение
const number = 50;

switch (number) {
case 49:
	console.log("Неверно");
	break;
case 100:
	console.log("Неверно 2");
	break;
case 50:
	console.log("Верно");
	break;
default:
	console.log("Ничего из этого");
	break;
}