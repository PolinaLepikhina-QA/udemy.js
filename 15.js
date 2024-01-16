"use strict";

console.log("arr" + " - object");
console.log("4" + " - object");
console.log("arr" + +"4");
console.log(5 + +"4");

let incr = 10, decr = 10;

// Постфиксная форма (знаки ПОСЛЕ)
// Оператор инкремента, увеличение значения на 1
incr++;
// // Оператор декремента, уменьшение значения на 1
decr--;

console.log(incr);
console.log(decr);

// // Префиксная форма (знаки ДО)
++incr;
--decr;

console.log(incr);
console.log(decr);

// Постфиксная форма сначала возвращает значение, а только потом прибавляет/убавляет 1
console.log(incr++);
console.log(decr--);

// Префиксная форма сначала прибавляет/убавляет 1, а затем возвращает значение
console.log(++incr);
console.log(--decr);

console.log(5%2);

console.log(2*4 == 8);
console.log(2*4 == "8");

// Строгое сравнение (значение + тип данных)
console.log(2*4 === "8");

// И (работает только тогда, когда 2 и более выражений правдивы)
&&

// Или (работает тогда, когда 1 из вариантов правдив)
||

const isChecked = true, isClosed = false;
console.log(isChecked && isClosed);
console.log(isChecked || isClosed);

// Оператор отрицания - !
console.log(isChecked && !isClosed);

console.log(2 + 2 * 2 === 8);
console.log(2 + 2 * 2 != 8);
console.log(2 + 2 * 2 != 6);
console.log(2 + 2 * 2 !== "6");