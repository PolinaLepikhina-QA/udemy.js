"use strict";

const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
  return amount * curr;
} 

function promotion(result) {
  console.log(result * discount);
}

const convertaion = convert(500, usdCurr);
promotion(convertaion);

function test() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i === 3) return
  }
  console.log("Done");
}

test();

function doNothing() {};
console.log(doNothing());

function getMathResult(num1, num2) {
  if (typeof(num2) != "number" || num2 === 0 || num2 < 0) {
    return num1;
  }

  let result = "";
  for (let i = 1; i <= num2; i++) {
    result = result + num1 * i;
    if (i != num2) {
      result += "---";
    }
  }
  return result;
}

console.log(getMathResult(5, 3));