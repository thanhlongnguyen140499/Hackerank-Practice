function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  // Loop through all elements in the array
  for (let i = 0; i < n - 1; i++) {
    swapped = false;

    // Inner loop to compare adjacent elements
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap if the element found is greater, using array destructuring assignment
        // Right Side: [arr[j + 1], arr[j]] creates a new array containing the values at arr[j + 1] and arr[j].
        // Left Side: [arr[j], arr[j + 1]] is an array pattern that will unpack the values from the right-side array back into arr[j] and arr[j + 1] in the opposite order.
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    // If no elements were swapped in the inner loop, the array is sorted
    if (!swapped) break;
  }

  return arr;
}

// Example usage:
let array = [64, 34, 25, 12, 22, 11, 90];

console.log("Sorted array:", bubbleSort(array));
