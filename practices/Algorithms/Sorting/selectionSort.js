// #region SELECTION SORT -  Big O
// Time Complexity: O(n2)
// Space Complexity: O(1)

function selectionSortFunc(arr) {
    const length = arr.length;

    for (let i = 0; i < length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }   
        }

        if (minIndex !== i) {
            // Swap element
            [arr[i] , arr [minIndex]] = [arr[minIndex] , arr[i]];
         }
    }

    return arr;
}

// Example usage:
let array = [64, 34, 25, 12, 22, 11, 90];

console.log("Sorted array:", selectionSortFunc(array));