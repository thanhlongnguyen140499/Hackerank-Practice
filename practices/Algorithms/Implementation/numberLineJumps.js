'use strict';

const fs = require('fs');

const readlineSync = require("readline-sync");

function readLine() {
  return readlineSync.question();
}

/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

function kangaroo(x1, v1, x2, v2) {
    // Solution 01: myself
    // const value = (x1 - x2) / (v2 - v1);

    // if (Number.isInteger(value) && value > 0) {
    //     return "YES";
    // } else {
    //     return "NO";
    // }

    // Solution 02: other
    if (v1 > v2 && (x2 - x1) % (v2 - v1) == 0) return "YES";
    return "NO";
}

function main() {
    const filePath =
    "/Users/edwardnguyen/Documents/Edward/Interview/node-hello-world/output.txt";
    const ws = fs.createWriteStream(filePath);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const x1 = parseInt(firstMultipleInput[0], 10);

    const v1 = parseInt(firstMultipleInput[1], 10);

    const x2 = parseInt(firstMultipleInput[2], 10);

    const v2 = parseInt(firstMultipleInput[3], 10);

    const result = kangaroo(x1, v1, x2, v2);

    ws.write(result + '\n');

    ws.end();
}

main();
