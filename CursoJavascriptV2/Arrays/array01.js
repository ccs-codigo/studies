const isBelowThreshold = (currentValue) => currentValue < 40;
const array = [1, 30, 39, 29, 10, 13];
console.log(array.every(isBelowThreshold));
// Expected output: true

const words = ["spray", "elite", "exuberant", "destruction", "present"];
const result = words.filter((word) => word.length > 6);
console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

const array1 = ["a", "b", "c"];
array1.forEach((element) => console.log(element));
// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

const array2 = [1, 4, 9, 16];
// Pass a function to map
const map1 = array2.map((x) => x * 2);
console.log(map1);
// Expected output: Array [2, 8, 18, 32]

const array3 = [1, 2, 3, 4, 5];
// Checks whether an element is even
const even = (element) => element % 2 === 0;
console.log(array3.some(even));
// Expected output: true
