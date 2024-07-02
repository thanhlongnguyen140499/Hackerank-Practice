function minimalOperations(words) {
    function changeChar(c, avoid) {
        // This function changes `c` to a different character that's not `avoid`.
        for (let newChar of "abcdefghijklmnopqrstuvwxyz") {
            if (newChar !== c && newChar !== avoid) {
                return newChar;
            }
        }
        return c;  // This should not happen, but just in case
    }
    
    let result = [];
    for (let word of words) {
        let wordArr = word.split('');  // Convert string to array for easier manipulation
        let substitutions = 0;
        for (let i = 0; i < wordArr.length - 1; i++) {
            if (wordArr[i] === wordArr[i + 1]) {
                // Change wordArr[i + 1] to a different character
                let newChar = changeChar(wordArr[i], i > 0 ? wordArr[i - 1] : '');
                wordArr[i + 1] = newChar;
                substitutions++;
                i++; // Skip the next character since it has been changed
            }
        }
        result.push(substitutions);
    }
    
    return result;
}


function main() {
    let result = minimalOperations(['ab', 'aab', 'abb', 'abab', 'abaaaba']);
    let expectedOutput = [0, 1, 1, 0, 1];
    console.log("Result:", result);
}
main();
