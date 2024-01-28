"use strict";

// Алгоритм быстрой сортировки
// https://algolist.ru/sort/quick_sort.php

// Отличие for..in от for..of
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for...of#%D1%80%D0%B0%D0%B7%D0%BB%D0%B8%D1%87%D0%B8%D1%8F_%D0%BC%D0%B5%D0%B6%D0%B4%D1%83_for...of_%D0%B8_for...in

const arr = [1, 2, 3, 6, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
  return a - b;
}

arr[99] = 0;
console.log(arr.length);
console.log(arr);

const arr = [1, 2, 3, 6, 8];

arr.forEach(function(item, i, arr) {
  console.log(`${i}: ${item} внутри массива ${arr}`);
});

for (let value of arr) {
  console.log(value);
}

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Удаляет последний элемент из массива
arr.pop();

// Добавляет элемент в конец массива
arr.push(25);
console.log(arr);

const str = prompt("", "");
// Можем сформировать массив на основании строк
const products = str.split(", ");
console.log(products);
// Сортирует все как строки (по алфавиту/порядку)
products.sort();
// Объединение элементов в массив, в скобках указывает разделитель
console.log(products.join("; "));