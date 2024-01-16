"use strict";

alert("Hello");

const result = confirm("Are you here?");
console.log(result);

// typeof - узнать тип данных
// Вся информация от пользователя приходит в виде строк

const answer = prompt("Are you older than 18?", "");
console.log(typeof(answer));

// // "+" (унарный плюс) позволяет преобразовать строку в число
const answer1 = +prompt("Are you older than 18?", "");
console.log(answer1 + 5);

const answers = [];
answers[0] = prompt("What is your name?", "");
answers[1] = prompt("What is your surname?", "");
answers[2] = prompt("How old are you?", "");

document.write(answers);
console.log(typeof(answers));