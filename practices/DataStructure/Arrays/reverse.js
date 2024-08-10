"use strict";

/*
 * Complete the 'reverseArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

const readlineSync = require("readline-sync");

function reverseArray(a) {
  // Write your code here
  return a.reverse();
}

function main() {
  // Wait for user's response
  const arraySize = readlineSync.question("Array size: ");
  const input = readlineSync.question(
    "Enter the number of " + arraySize + " (separated by a space): "
  );
  const inputArray = input.split(" ").map(Number);
  reverseArray(inputArray).forEach((element) => {
    console.log(element);
  });
}

main();
