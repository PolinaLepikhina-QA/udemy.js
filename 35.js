"use strict";

// Копирование объектов в JavaScript
// https://medium.com/@stasonmars/%D0%BA%D0%BE%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BE%D0%B2-%D0%B2-javascript-d25c261a7aff

// Object.assign()
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

// Spread оператор
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax

const obj = {
  a: 5,
  b: 1
};

// Передача по ссылке
const copy = obj;
copy.a = 10;

console.log(copy);
console.log(obj);

function copy(mainObject) {
  let objCopy = {};

  let key;
  for (key in mainObject) {
    objCopy[key] = mainObject[key];
  }

  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4
  }
};

// Поверхностная копия
const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
  d: 17,
  e: 20
};

// Объединение двух объектов. Первый аргумент - тот объект, в который помещаем
console.log(Object.assign(numbers, add));

const clone = Object.assign({}, add);
clone.d = 25;

console.log(add);
console.log(clone);

const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice();
newArray[1] = "d";

console.log(newArray);
console.log(oldArray);

const video = ["youtube", "vimeo", "rutube"],
      blogs = ["wordpress", "livejournal", "blogger"],
      internet = [...video, ...blogs, "vk", "facebook"];

console.log(internet);

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c)
}

const num = [2, 5, 7];
log(...num);

const obj1 = {
  one: 1,
  two: 2
};

const newObj = {...obj1};
console.log(newObj);