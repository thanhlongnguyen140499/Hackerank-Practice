"use strict";

const readlineSync = require("readline-sync");

function readLine() {
  return readlineSync.question();
}

// #region SOLUTION 01: self-thinking
// const dynamicArray = (n, queries) => {
//   const rowSize = queries.length;
//   let lastAnswer = 0;
//   let arr = [];
//   let answersArray = [];

//   // Loop to fill empty arrays from input
//   for (let i = 0; i < n; i++) {
//     arr.push([]);
//   }

//   // Loop through each row
//   for (let rowIndex = 0; rowIndex < rowSize; rowIndex++) {
//     const firstElement = queries[rowIndex][0];
//     const y = queries[rowIndex][1];
//     let idx = Math.floor((y ^ lastAnswer) % n);

//     if (firstElement === 1) {
//       arr[idx].push(queries[rowIndex][2]);
//     } else if (firstElement === 2) {
//       lastAnswer = arr[idx][y % arr[idx].length];
//       // answersArray.push(lastAnswer);
//       console.log(lastAnswer)
//     }

//   }

//   return answersArray;
// };

// #region SOLUTION 02:
const dynamicArray = (n, queries) => {
  let result = [];
  let lastAnswer = 0;
  let arr = Array.from({ length: n }, () => []);

  queries.forEach((query) => {
    const [type, x, y] = query;
    let idx = (x ^ lastAnswer) % n;

    if (type === 1) {
      arr[idx].push(y);
    } else if (type === 2) {
      lastAnswer = arr[idx][y % arr[idx].length];
      result.push(lastAnswer);
    }
  });

  return result;
};

const main = () => {
  const firstLine = readlineSync.question("First line: ").split(" ");
  const n = firstLine[0];
  const q = firstLine[1];

  // for (let i = 0; i < q; i++) {
  //   arr[i] = readLine()
  //     .replace(/\s+$/g, "")
  //     .split(" ")
  //     .map((arrTemp) => parseInt(arrTemp, 10));
  // }

  const tempArray = [
    [1, 0, 5],
    [1, 1, 7],
    [1, 0, 3],
    [2, 1, 0],
    [2, 1, 1],
  ];

  console.log("results: ", dynamicArray(n, tempArray));
};

main();

// const test = () => {
//   const tempArray = [
//     [1, 0, 5],
//     [1, 1, 7],
//     [1, 0, 3],
//     [2, 1, 0],
//     [2, 1, 1],
//   ];

//   console.log("tempArray[0]: ", tempArray[0]);
//   console.log("tempArray[1]: ", tempArray[1]);
// }

// test()
