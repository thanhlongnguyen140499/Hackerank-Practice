"use strict";

const fs = require("fs");

const readlineSync = require("readline-sync");

function readLine() {
  return readlineSync.question();
}

/*
 * Complete the 'superReducedString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function superReducedString(s) {
  if (!s) {
    return "Empty String";
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      if (i == 0) {
        return superReducedString(s.slice(i + 2, s.length));
      } else {
        return superReducedString(s.slice(0, i) + s.slice(i + 2, s.length));
      }
    }
  }
  
  return s;
}

function main() {
  const filePath =
    "/Users/edwardnguyen/Documents/Edward/Interview/node-hello-world/output.txt";
  const ws = fs.createWriteStream(filePath);

  const s = readLine();

  const result = superReducedString(s);

  ws.write(result + "\n");

  ws.end();
}

main();
