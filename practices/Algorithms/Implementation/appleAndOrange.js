'use strict';

const readlineSync = require("readline-sync");

function readLine() {
  return readlineSync.question();
}
/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    console.log("s - t - a - b - apples - oranges: ", s, t, a, b, apples, oranges);
    let numberOfApples = 0;
    let numberOfOranges = 0;

    // for (let i = 0; i < apples.length; i++) {
    //     const element = apples[i] + a;
    //     if (s <= element && element <= t) {
    //         numberOfApples++;
    //     }
    // }

    // for (let i = 0; i < oranges.length; i++) {
    //     const element = oranges[i] + b;
    //     if (s <= element && element <= t) {
    //         numberOfApples++;
    //     }
    // }

    apples.forEach(apple => {
        const element = apple + a;
        if (s <= element && element <= t) {
            numberOfApples++;
        }
    });

    oranges.forEach(orange => {
        const element = orange + b;
        if (s <= element && element <= t) {
            numberOfOranges++;
        }
    });

    console.log("numberOfOranges: ", numberOfApples);
    console.log("numberOfOranges: ", numberOfOranges);
}

function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const s = parseInt(firstMultipleInput[0], 10);

    const t = parseInt(firstMultipleInput[1], 10);

    const secondMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const a = parseInt(secondMultipleInput[0], 10);

    const b = parseInt(secondMultipleInput[1], 10);

    const thirdMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const m = parseInt(thirdMultipleInput[0], 10);

    const n = parseInt(thirdMultipleInput[1], 10);

    const apples = readLine().replace(/\s+$/g, '').split(' ').map(applesTemp => parseInt(applesTemp, 10));

    const oranges = readLine().replace(/\s+$/g, '').split(' ').map(orangesTemp => parseInt(orangesTemp, 10));

    countApplesAndOranges(s, t, a, b, apples, oranges);
}

main();