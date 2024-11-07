let arr = [4, 5, 10, 20, 35, 4, 5];
console.log(arr.indexOf(5));
console.log(arr.lastIndexOf(5));
console.log(arr.includes(5));
console.log(
  arr.find(function (parametro) {
    return parametro > 10;
  })
);
console.log(
  arr.findIndex(function (parametro) {
    return parametro > 10;
  })
);
