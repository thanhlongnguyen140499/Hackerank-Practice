"use strict";

const fs = require("fs");

const readlineSync = require("readline-sync");

function readLine() {
  return readlineSync.question();
}

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
  let results = [];
  grades.forEach((grade) => {
    if (grade < 38) {
      // Case 1 - grade < 38
      results.push(grade);
    } else if (grade % 5 >= 3) {
      // Case 2 - grade % 5 >= 3
      results.push(grade + (5 - (grade % 5)));
    } else {
      // Case 3 - grade % 5 < 3
      results.push(grade);
    }
  });

  return results;
}

function main() {
  const filePath =
    "/Users/edwardnguyen/Documents/Edward/Interview/node-hello-world/output.txt";
  const ws = fs.createWriteStream(filePath);

  const gradesCount = parseInt(readLine().trim(), 10);

  let grades = [];

  for (let i = 0; i < gradesCount; i++) {
    const gradesItem = parseInt(readLine().trim(), 10);
    grades.push(gradesItem);
  }

  const result = gradingStudents(grades);

  console.log("result: ", result);
  // ws.write(result.join('\n') + '\n');

  ws.end();
}

main();
