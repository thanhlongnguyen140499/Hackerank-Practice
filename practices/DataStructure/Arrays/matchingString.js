'use strict';

const readlineSync = require("readline-sync");

function readLine() {
    return readlineSync.question();
}

/*
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY stringList
 *  2. STRING_ARRAY queries
 */

function matchingStrings(stringList, queries) {
    let res = [];
    let stringMap = new Map();
    
    // Count the occurrences of each string in stringList
    for (let i = 0; i < stringList.length; i++) {
        let count = stringMap.get(stringList[i]) || 0;
        stringMap.set(stringList[i], count + 1);
    }
    
    // Check the occurrences of each query in the stringMap
    for (let i = 0; i < queries.length; i++) {
        let count = stringMap.get(queries[i]) || 0;
        res.push(count);
    }
    
    return res;
}

function main() {
    let stringList = readLine().split(' ');
    let queriesList = readLine().split(' ');

    const res = matchingStrings(stringList, queriesList);

    console.log(res);
}

main();
