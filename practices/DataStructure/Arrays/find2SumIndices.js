const readlineSync = require('readline-sync');

function findTwoSumIndices(arr, target) {
    let indicesMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];
ß
        if (indicesMap.has(complement)) {
            return [indicesMap.get(complement), i];
        }

        indicesMap.set(arr[i], i);
    }

    return null;
}

const result = findTwoSumIndices([2, 7, 11, 15], 17);

console.log(result);