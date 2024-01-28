"use strict";

// Object.prototype.__proto__
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/proto

// Prototype methods, objects without __proto__
// https://javascript.info/prototype-methods

let str = "some";
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1, 2, 3]);

const soldier = {
  health: 400,
  armor: 100,
  sayHello: function() {
    console.log("Hello");
  }
};

const braun = Object.create(soldier);

const john = {
  health: 100
};

// Устанавливаем прототип для john (устаревшая форма записи)
john.__proto__ = soldier;

// Устанавливаем прототип для john (новая форма записи)
Object.setPrototypeOf(john, soldier);

console.log(john);
console.log(john.armor);
john.sayHello();