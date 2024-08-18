"use strict";

const fs = require("fs");

const readlineSync = require("readline-sync");

function readLine() {
  return readlineSync.question();
}

/*
 * Complete the 'equalStacks' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h1
 *  2. INTEGER_ARRAY h2
 *  3. INTEGER_ARRAY h3
 */

function equalStacks(h1, h2, h3) {
  console.log("h1: ", h1);
  console.log("h2: ", h2);
  console.log("h3: ", h3);

  let sum1 = h1.reduce((acc, cur) => acc + cur, 0);
  let sum2 = h2.reduce((acc, cur) => acc + cur, 0);
  let sum3 = h3.reduce((acc, cur) => acc + cur, 0);

  let m;
  while (sum1 !== sum2 || sum2 !== sum3) {
    m = Math.min(sum1, sum2, sum3);
    if (sum1 > m) sum1 -= h1.shift();
    if (sum2 > m) sum2 -= h2.shift();
    if (sum3 > m) sum3 -= h3.shift();
  }

  return sum1;
}

function main() {
  const filePath =
    "/Users/edwardnguyen/Documents/Edward/Interview/node-hello-world/output.txt";
  const ws = fs.createWriteStream(filePath);

  const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

  const n1 = parseInt(firstMultipleInput[0], 10);

  const n2 = parseInt(firstMultipleInput[1], 10);

  const n3 = parseInt(firstMultipleInput[2], 10);

  const h1 = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((h1Temp) => parseInt(h1Temp, 10));

  const h2 = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((h2Temp) => parseInt(h2Temp, 10));

  const h3 = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((h3Temp) => parseInt(h3Temp, 10));

  const result = equalStacks(h1, h2, h3);

  console.log("result: ", result);

  // ws.write(result + '\n');

  ws.end();
}

main();
