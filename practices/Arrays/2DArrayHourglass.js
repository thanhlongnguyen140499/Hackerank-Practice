"use strict";

const readlineSync = require("readline-sync");

function readLine() {
  return readlineSync.question();
}

/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr) {
  // Write your code here
  let maxSum = -63;

  for (let rowIndex = 0; rowIndex <= 3; rowIndex++) {
    for (let columnIndex = 0; columnIndex <= 3; columnIndex++) {
      const sum =
        arr[rowIndex][columnIndex] +
        arr[rowIndex][columnIndex + 1] +
        arr[rowIndex][columnIndex + 2] +
        arr[rowIndex + 1][columnIndex + 1] +
        arr[rowIndex + 2][columnIndex] +
        arr[rowIndex + 2][columnIndex + 1] +
        arr[rowIndex + 2][columnIndex + 2];

        if (sum >= maxSum) {
            maxSum = sum;
        }
      console.log("sum: ", sum);
    }
  }

  console.log("maxSum: ", maxSum);
  return maxSum;
}

function main() {
  let arr = Array(6);

  for (let i = 0; i < 6; i++) {
    arr[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((arrTemp) => parseInt(arrTemp, 10));
  }

  const result = hourglassSum(arr);
  console.log(result);
}

main();
