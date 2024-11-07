let arr1 = ["a", "b", "c"];
let arr2 = [].concat(arr1); //espécie de clone do arr1

arr2[arr2.length] = "novo valor";

console.log(arr1);
console.log(arr2);
