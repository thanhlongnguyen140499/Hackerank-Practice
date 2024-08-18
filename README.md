# Hackerank-Practice

# Helper
const readlineSync = require("readline-sync");

# Input an array in a line
 readLine().split(" ").map((arrTemp) => parseInt(arrTemp, 10));
 
 readLine().split(" ").map(Number);
 
# Input multi array in a multi line
 for (let i = 0; i < q; i++) {
     arr[i] = readLine()
       .replace(/\s+$/g, "")
       .split(" ")
       .map((arrTemp) => parseInt(arrTemp, 10));
   }

# Fill a 2 dimension array with given k value
let arr = Array.from({ length: n }, () => k);
 => arr = [k, k, ..., k]

# Config with fs write stream
const filePath =
    "/Users/edwardnguyen/Documents/Edward/Interview/node-hello-world/output.txt";
const ws = fs.createWriteStream(filePath);

# Readline
const readlineSync = require("readline-sync");

function readLine() {
  return readlineSync.question();
}