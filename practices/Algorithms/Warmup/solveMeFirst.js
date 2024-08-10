process.stdin.resume();
process.stdin.setEncoding('ascii');

const readlineSync = require("readline-sync");

function readLine() {
  return readlineSync.question();
}

function solveMeFirst(a, b) {
  // Hint: Type return a+b below   
  console.log("a vs b: ", a, b);
  return a + b;
}


function main() {
    var a = parseInt(readLine());
    var b = parseInt(readLine());;

    var res = solveMeFirst(a, b);
    console.log(res);
}

main();