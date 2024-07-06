"use strict";

const readlineSync = require("readline-sync");

function readLine() {
  return readlineSync.question();
}

// #region Solution 01
// function arrayManipulation(n, queries) {
//   let result = Array.from({ length: n }, () => 0);

//   // step 1: loop through every query
//   queries.forEach((query) => {
//     const [a, b, k] = query;
//     // console.log("a - b - k ", a, b, k)

//     // step 2: loop through result array, and assign value k from a -> b
//     if (a <= b) {
//       for (let i = a - 1; i < b; i++) {
//         result[i] = result[i] + k;
//       }
//     }
//   });

//   console.log("result: ", Math.max(...result));
//   return Math.max(...result);
// }

// #region Solution 02
function arrayManipulation(n, queries) {
  let arr = Array.from({ length: n }, () => 0);

  let maxValue = 0;
  let currentNumber = 0;

  queries.forEach(([startRange, endRange, value]) => {
    console.log("startRange - endRange - value: ", startRange, endRange, value);
  })

  queries.forEach(([startRange, endRange, value]) => {
    console.log("before => arr[startRange] - arr[endRange]: ", arr[startRange], arr[endRange])

    arr[startRange] = arr[startRange] || { start: 0, end: 0 };
    arr[endRange] = arr[endRange] || { start: 0, end: 0 };
    arr[startRange].start += value;
    arr[endRange].end += value;

    console.log("after => arr[startRange] - arr[endRange]: ", arr[startRange], arr[endRange])
  });

  console.log("Arr : ", arr)

  arr.forEach((cell) => {
    if (cell) {
      currentNumber += cell.start;
      if (currentNumber > maxValue) {
        maxValue = currentNumber;
      }
      currentNumber -= cell.end;
    }
  });

  console.log("maxValue: ", maxValue)
  return maxValue;
}

function main() {
  const n = 10;
  const queries = [
    [4, 8, 7],
    [1, 5, 3],

    [6, 9, 1],
  ];

  arrayManipulation(n, queries);
}

main();
