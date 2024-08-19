"use strict";

const fs = require("fs");

const readlineSync = require("readline-sync");

function readLine() {
  return readlineSync.question();
}

/*
 * Complete the 'twoStacks' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER maxSum
 *  2. INTEGER_ARRAY a
 *  3. INTEGER_ARRAY b
 */

function twoStacks(maxSum, a, b) {
  // #region Solution 01: Not true
  // let sum = 0;
  // let result = 0;
  // while (sum < maxSum) {
  //   sum += Math.min(a.pop(), b.pop());
  //   result++;
  // }

  // return result;

  // #region solution 02
  let aPoint = 0;
  let bPoint = 0;
  let resultCount = 0;
  let sum = 0;

  while (aPoint < a.length) {
    if (sum + a[aPoint] > maxSum) {
      break;
    }
    sum += a[aPoint];
    aPoint++;
  }
  resultCount = aPoint;

  while (bPoint < b.length) {
    sum += b[bPoint];
    bPoint++;
    while (sum > maxSum && aPoint > 0) {
      sum -= a[aPoint - 1];
      aPoint--;
    }
    if (sum <= maxSum && resultCount < aPoint + bPoint) {
      resultCount = aPoint + bPoint;
    }
  }

  return resultCount;
}

function main() {
  const filePath =
    "/Users/edwardnguyen/Documents/Edward/Interview/node-hello-world/output.txt";
  const ws = fs.createWriteStream(filePath);

  const g = parseInt(readLine().trim(), 10);

  for (let gItr = 0; gItr < g; gItr++) {
    const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    const maxSum = parseInt(firstMultipleInput[2], 10);

    const a = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((aTemp) => parseInt(aTemp, 10));

    const b = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((bTemp) => parseInt(bTemp, 10));

    const result = twoStacks(maxSum, a, b);

    console.log(result);
    // ws.write(result + '\n');
  }

  ws.end();
}

main();
