"use strict";

const readlineSync = require("readline-sync");

function readLine() {
  return readlineSync.question();
}

function matchingStrings(stringList, queries) {
  let resultMap = new Map();
  let res = [];

  for (let i = 0; i < stringList.length; i++) {
    let count = resultMap.get(stringList[i]) || 0;
    resultMap.set(stringList[i], count + 1)
  }

  console.log("resultMap: ",  resultMap);

  for (let i = 0; i < queries.length; i++) {
    let count = resultMap.get(queries[i]) || 0;
    res.push(count);
  }

  console.log("res: ", res)

  return res;
}

function main() {
//   const firstLine = readlineSync.question("First line: ").split(" ");
//   const firstValueLines = readlineSync.question("Values: ").split(" ");
//   const secondLines = readlineSync.question("Second line: ").split(" ");
//   const secondValueLines = readlineSync.question("Values: ").split(" ");

//   matchingStrings(firstValueLines, secondValueLines);

  let test1 = ["asd", "umma", "ew"]
  let test2 = ["drama", "mama", "ew"]
  matchingStrings(test1, test2);

  
}

main();
