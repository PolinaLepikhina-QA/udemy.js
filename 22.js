"use strict";

// Циклы while и for
// https://learn.javascript.ru/while-for

let num = 50;

while (num < 55) {
	console.log(num);
	num++;
}

do {
	console.log(num);
	num++;
}
while (num < 55);

// Оператор "continue" позволяет пропустить шаг, который нам не нужен
for (let i = 1; i < 8; i++) {
	if (i == 6) {
		// break;
		continue;
	}
	console.log(i);
}