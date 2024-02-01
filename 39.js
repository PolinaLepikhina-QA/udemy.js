"use strict";

// cssText
// https://www.w3schools.com/jsref/prop_style_csstext.asp

// Матрица сравнений
// https://dorey.github.io/JavaScript-Equality-Table/

// To String
// 1
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2
console.log(typeof(5 + ""));
console.log(typeof(null + ""));

const num = 5;
console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + "px";

// To Number
// 1
console.log(typeof(Number("4")));

// 2
console.log(typeof(+"4"));

// 3
console.log(typeof(parseInt("4px", 10)));

// To Boolean
// Всегда false - 0, "", null, undefined, NaN
// 1
let switcher = null;
if (switcher) {
  console.log("Working...");
}

switcher = 5;

if (switcher) {
  console.log("Working...");
}

// 2
console.log(typeof(Boolean("4")));

// 3
console.log(typeof(!!"456"));