function findElement(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return true;
    }
  }
  return false;
}

console.log(findElement(1, 2, 3, 4, 5));
