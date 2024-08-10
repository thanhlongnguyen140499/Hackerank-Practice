// #region BUBBLE SORT -  Big O
// Time Complexity: O(n2)
// Space Complexity: O(1)

function insertionSort(arr) {
    let n = arr.length;

    // Loop through each element of the array starting from the second element
    for (let i = 1; i < n; i++) {
        let key = arr[i]; // Element to be inserted
        let j = i - 1;

        // Move elements of arr[0..i-1] that are greater than key to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert the key into its correct position
        arr[j + 1] = key;
    }

    return arr;
}

// Example usage:
let array = [12, 11, 13, 5, 6];
console.log("Sorted array:", insertionSort(array));
