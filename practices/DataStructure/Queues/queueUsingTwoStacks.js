const readlineSync = require("readline-sync");

function processData(input) {
    const queries = input.split("\n");
    let stack = [];

    queries.shift();
    queries.forEach(element => {
        if (element.startsWith("1")) {
            const value = element.split(" ")[1];
            stack.push(value);
        } else if (element.startsWith("2")) {
            stack.shift();
        } else if (element.startsWith("3")) {
            console.log(stack[0]);
        }
    });
} 

// const input = readlineSync.question("Enter input: ");
processData(`10
1 42
2
1 14
3
1 28
3
1 60
1 78
2
2`);
