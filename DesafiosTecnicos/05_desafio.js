function createNumbers(n) {
  let numbers = [];
  let sum = 0;

  function record(num) {
    if (numbers.length >= n) {
      sum -= numbers.shift();
    }
    numbers.push(num);
    sum += num;
  }

  function get_sum() {
    return sum;
  }

  function get_avg() {
    return sum / numbers.length;
  }

  return { record, get_sum, get_avg };
}

const numeros = createNumbers(5);

numeros.record(1);
numeros.record(2);
numeros.record(3);
numeros.record(4);
numeros.record(5);
numeros.record(6);
numeros.record(7);
numeros.record(10);

console.log(numeros.get_sum());
console.log(numeros.get_avg());
