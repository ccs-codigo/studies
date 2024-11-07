function sum() {
  const numbers = [];

  Array.prototype.forEach.call(arguments, function (argument) {
    numbers.push(argument);
  });

  return numbers.reduce(function (sum, atual) {
    return sum + atual;
  });
}

let soma = sum(1, 2, 3, 4, 5);
console.log(soma);

function avarege() {
  const soma = sum.apply(null, arguments);
  return soma / arguments.length;
}

console.log(avarege(1, 2, 3, 4, 5));
