function sum() {
  const numbers = [...arguments];
  return numbers.reduce(function (sum, atual) {
    return sum + atual;
  });
}

let soma = sum(1, 2, 3, 4, 5);
console.log(soma);

function avarege() {
  return sum(...arguments) / arguments.length;
}

let media = avarege(1, 2, 3, 4, 5);
console.log(media);
