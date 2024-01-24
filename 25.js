"use strict";

// Замыкания в JavaScript
// https://medium.com/nuances-of-programming/%D1%8F-%D0%BD%D0%B8%D0%BA%D0%BE%D0%B3%D0%B4%D0%B0-%D0%BD%D0%B5-%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%BB-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%87%D0%B0%D1%81%D1%82%D1%8C-%D0%BF%D0%B5%D1%80%D0%B2%D0%B0%D1%8F-3c3f02041970

// Область видимости переменных, замыкание
// https://learn.javascript.ru/closure

// Стрелочные функции
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions

let num = 20; // Глобальная переменная

function showFirstMessage(text) {
  console.log(text);
  let abc = 50; // Локальная переменная, НЕ доступна вне функции
  num = 10;
}

showFirstMessage("Hello, world!");
console.log(num);

function calc(a, b) {
  return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 7));

function ret() {
  let qwe = 50;
  return qwe;
} 

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
  console.log("Boa tarde");
};

logger();

// Не имеет контекста вызова
const plus = (a, b) => a + b;