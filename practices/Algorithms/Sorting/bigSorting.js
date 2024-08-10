"use strict";

const fs = require("fs");

const readlineSync = require("readline-sync");

function readLine() {
  return readlineSync.question();
}

/*
 * Complete the 'bigSorting' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY unsorted as parameter.
 */

function bigSorting(unsorted) {
  return unsorted.sort((a, b) => {
    // Compare by length first
    if (a.length !== b.length) {
      return a.length - b.length;
    }
    // If lengths are the same, compare lexicographically
    return a.localeCompare(b);
  });
}

function main() {
  const filePath =
    "/Users/edwardnguyen/Documents/Edward/Interview/node-hello-world/output.txt";
  const ws = fs.createWriteStream(filePath);

  const n = parseInt(readLine().trim(), 10);

  let unsorted = [];

  for (let i = 0; i < n; i++) {
    const unsortedItem = readLine();
    unsorted.push(unsortedItem);
  }

  let result = bigSorting(unsorted);

  console.log("result: ", result);
  //   ws.write(result.join("\n") + "\n");

  ws.end();
}

main();
