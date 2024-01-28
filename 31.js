"use strict";

// String.prototype.trim()
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/Trim

// Callback функции
// https://learn.javascript.ru/callbacks

function first() {
  // Do something
  setTimeout(function() {
    console.log(1);
  }, 500);
}

function second() {
  console.log(2);
}

first();
second();

function learnJS(lang, callback) {
  console.log(`Я учу: ${lang}`);
  callback();
}

function done() {
  console.log("Я прошел этот урок");
};

learnJS('JavaScript', done);

// Функция ниже называется анонимной
learnJS('JavaScript', function() {
  console.log("Я прошел этот урок");
});