

# 1 - For Loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Output: 0, 1, 2, 3, 4

# 2 - While Loop
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
// Output: 0, 1, 2, 3, 4

# 3 - For ... of Loop
const array = ['a', 'b', 'c'];
for (const element of array) {
  console.log(element);
}
// Output: 'a', 'b', 'c'

# 4 - For ... in Loop
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  console.log(key, obj[key]);
}
// Output: 'a 1', 'b 2', 'c 3'

# 5 - ForEach
## Purpose: Executes a provided function once for each array element.

const array = [1, 2, 3];
array.forEach(element => console.log(element));
// Output: 1, 2, 3

# 6 - Map
## Purpose: Creates a new array by applying a function to each element in the original array.

const array = [1, 2, 3];
const newArray = array.map(num => num * 2);
console.log(newArray); 
// Output: [2, 4, 6]

# 7 - Reduce
## Purpose: Reduces an array to a single value by applying a function on each element.

const array = [1, 2, 3, 4];
const sum = array.reduce((acc, num) => acc + num, 0);
console.log(sum); 
// Output: 10

# 8 - Every
## Purpose: Tests whether all elements in an array pass a specified condition.

const array = [1, 2, 3, 4];
const allPositive = array.every(num => num > 0);
console.log(allPositive); 
// Output: true

# 9 - Some
## Purpose: Tests whether at least one element in the array passes a specified condition.

const array = [1, -2, 3, -4];
const hasNegative = array.some(num => num < 0);
console.log(hasNegative); 
// Output: true

# 10 - Filter
## Purpose: Creates a new array with all elements that pass a specified condition.

const array = [1, 2, 3, 4];
const evenNumbers = array.filter(num => num % 2 === 0);
console.log(evenNumbers); 
// Output: [2, 4]

# 11 - Find
## Purpose: Returns the first element in the array that satisfies a specified condition.

const array = [1, 2, 3, 4];
const firstEven = array.find(num => num % 2 === 0);
console.log(firstEven); 
// Output: 2

# 11 - Find Index 
## Purpose: Returns the index of the first element in the array that satisfies a specified condition.

const array = [1, 2, 3, 4];
const firstEvenIndex = array.findIndex(num => num % 2 === 0);
console.log(firstEvenIndex); 
// Output: 1

# 12 - Entries()
## Purpose: Returns a new Array Iterator object that contains the key/value pairs for each index in the array.

const array = ['a', 'b', 'c'];
for (const [index, element] of array.entries()) {
  console.log(index, element);
}
// Output: '0 a', '1 b', '2 c'

# 13 - Keys()
## Purpose: Returns a new Array Iterator object that contains the keys for each index in the array.

const array = ['a', 'b', 'c'];
for (const key of array.keys()) {
  console.log(key);
}
// Output: 0, 1, 2

# 14 - Values()
## Purpose: Returns a new Array Iterator object that contains the values for each index in the array.

const array = ['a', 'b', 'c'];
for (const value of array.values()) {
  console.log(value);
}
// Output: 'a', 'b', 'c'
