"use strict";

const fs = require("fs");

const readlineSync = require("readline-sync");

function readLine() {
  return readlineSync.question();
}

/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

const findMultiplesInRange = (A, B) => {
  let result = [];

  for (let i = A[0]; i <= B[0]; i++) {
    if (A.every((item) => i % item === 0)) {
      result.push(i);
    }
  }

  return result;
};

const findFactorsInRange = (A, B) => {
  let result = [];

  for (let i = A[0]; i <= B[0]; i++) {
    if (B.every((item) => item % i === 0)) {
      result.push(i);
    }
  }

  return result;
};

function getTotalX(a, b) {
  // #region SOLUTION 1
  //   // Find multiples of array a
  //   const A = findMultiplesInRange(a, b);

  //   // Find divisible number of array b
  //   const B = findFactorsInRange(a, b);

  //   return A.filter((value) => B.includes(value));

  // #region SOLUTION 2
  let resultNum = 0;
  const maxNumA = Math.max(...a);
  const minNumB = Math.min(...b);

  for (let i = maxNumA; i <= minNumB; i++) {
    if (a.every((x) => i % x === 0) && b.every((x) => x % i === 0)) {
      resultNum += 1;
    }
  }

  return resultNum;
}

function main() {
  const filePath =
    "/Users/edwardnguyen/Documents/Edward/Interview/node-hello-world/output.txt";
  const ws = fs.createWriteStream(filePath);

  const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

  const n = parseInt(firstMultipleInput[0], 10);

  const m = parseInt(firstMultipleInput[1], 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  const brr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((brrTemp) => parseInt(brrTemp, 10));

  const total = getTotalX(arr, brr);

  ws.write(total + "\n");

  ws.end();
}

main();
