"use strict";

// Объекты Javascript в примерах
// https://javascript.ru/tutorial/object/intro

// Деструктуризация объектов
// https://learn.javascript.ru/destructuring-assignment

// Дескрипторы, геттеры и сеттера
// https://learn.javascript.ru/object-properties

// Цикл "for..in" для перебора свойств объекта
// https://learn.javascript.ru/object#forin

const obj = new Object();

const options = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    bg: "red"
  },
  makeTest: function() {
    console.log("Test");
  }
};

// Деструктуризация
const {border, bg} = options.colors;
console.log(border);

options.makeTest();

console.log(Object.keys(options).length);

// Удалить св-во объекта. Если нужно удалить сразу несколько, можно воспользоваться циклом
delete options.name;
console.log(options);

let counter = 0;
for (let key in options) {
  if (typeof(options[key]) === "object") {
    for (let i in options[key]) {
      console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
      counter++;
    }
  } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
    counter++;
  }
}

console.log(counter);