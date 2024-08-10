"use strict";

const fs = require("fs");

const readlineSync = require("readline-sync");

function readLine() {
  return readlineSync.question();
}

/*
 * Complete the 'isBalanced' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

// #region SOLUTION 01
// function isBalanced(s) {
//   const arrString = s.split("");
//   let stack = [];
//   let check = true;
//   const openBrackets = ["(", "{", "["];

//   for (let i = 0; i < arrString.length; i++) {
//     const bracket = arrString[i];

//     // is openBracket
//     if (openBrackets.includes(bracket)) {
//       stack.push(bracket);
//       continue;
//     }

//     // is closeBracket
//     const previousOpenBracket = stack.pop();
//     switch (bracket) {
//       case ")":
//         if (previousOpenBracket !== "(") {
//             check = false;
//         }
//         break;
//       case "}":
//         if (previousOpenBracket !== "{") {
//             check = false;
//         }
//         break;
//       case "]":
//         if (previousOpenBracket !== "[") {
//             check = false;
//         }
//         break;
//       default:
//         break;
//     }
//   }

//   console.log("check: " , check)

//   return check;
// }

// #region SOLUTION 02
function isBalanced(s) {
  const stack = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (const l of s) {
    if (map[l]) {
      stack.push(l);
    } else {
      if (stack.length === 0 || map[stack.pop()] !== l) return "NO";
    }
  }

  return stack.length > 0 ? "NO" : "YES";
}

function main() {
  const filePath =
    "/Users/edwardnguyen/Documents/Edward/Interview/node-hello-world/output.txt";
  const ws = fs.createWriteStream(filePath);

  const t = parseInt(readLine().trim(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const s = readLine();

    const result = isBalanced(s);

    ws.write(result + "\n");
  }

  ws.end();
}

main();
