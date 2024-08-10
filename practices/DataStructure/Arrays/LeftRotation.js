"use strict";

const readlineSync = require("readline-sync");

function readLine() {
  return readlineSync.question();
}

function rotateLeft(d, arr) {
  let result = [];
  let rotationShift = d;

  if (d === arr.length) {
    result = arr;
  } else if (d > arr.length) {
    rotationShift = d / arr.length;
  }

  // Handle rotate
  let firstPart = arr.slice(rotationShift, arr.length);
  let secondPart = arr.slice(0, rotationShift);

  result = firstPart.concat(secondPart);
  return result;
}

function main() {
  const firstLine = readlineSync.question("First line: ").split(" ");
  const n = firstLine[0];
  const q = firstLine[1];

  // secondLin = Array
  const secondLine = readlineSync
    .question("Second line: ")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  rotateLeft(q, secondLine);
}

main();
