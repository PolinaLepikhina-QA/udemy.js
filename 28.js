"use strict";

// Методы строк
// https://learn.javascript.ru/string
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String

// Методы чисел
// https://learn.javascript.ru/number
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number

const str = "test";

console.log(str.length);
console.log(str[2]);
console.log(str.toUpperCase());
console.log(str);

const str1 = "teSt";

console.log(str1.toLowerCase());
console.log(str1);

const arr = [1, 2, 4];

console.log(arr.length);

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));
console.log(fruit.indexOf("q"));

const logg = "Hello world";
// Второе число НЕ включено
console.log(logg.slice(6, 11));
console.log(logg.substring(6, 11));
console.log(logg.slice(6));
console.log(logg.slice(-5, -1));
// Указываем в качестве второго числа длину, которую необходимо вырезать
console.log(logg.substr(6, 5));

// Нужно запускать в браузере. Будут доступны все св-ва и методы конкретного типа данных
console.dir(Number);

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));