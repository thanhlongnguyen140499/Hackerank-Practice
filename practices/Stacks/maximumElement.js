"use strict";

const fs = require("fs");

const readlineSync = require("readline-sync");

function readLine() {
  return readlineSync.question();
}

/*
 * Complete the 'getMax' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY operations as parameter.
 */

function getMax(operations) {
  let arr = [];
  let results = [];

  operations.forEach((element) => {
    const op = element.split(" ");
    const type = parseInt(op[0], 10);

    if (type === "1") {
      arr.push(parseInt(op[1], 10));
    } else if (type === "2") {
      arr.pop();
    } else if (type === "3") {
      let max = Math.max(...arr);
      results.push(max);
    }
  });

  return results;
}

function main() {
  const filePath =
    "/Users/edwardnguyen/Documents/Edward/Interview/node-hello-world/output.txt";
  const ws = fs.createWriteStream(filePath);

  const n = parseInt(readLine().trim(), 10);

  let ops = [];

  for (let i = 0; i < n; i++) {
    const opsItem = readLine();
    ops.push(opsItem);
  }

  const res = getMax(ops);

  console.log("res: ", res);
  // ws.write(res.join('\n') + '\n');

  ws.end();
}

main();
