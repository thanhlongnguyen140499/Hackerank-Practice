# Hackerank-Practice

# Helper
const readlineSync = require("readline-sync");

<!-- Input an array in a line -->
1) readLine().split(" ").map((arrTemp) => parseInt(arrTemp, 10));

<!-- Input multi array in a multi line -->
2) for (let i = 0; i < q; i++) {
     arr[i] = readLine()
       .replace(/\s+$/g, "")
       .split(" ")
       .map((arrTemp) => parseInt(arrTemp, 10));
   }