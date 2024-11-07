(function () {
  let qtdParametros = 0;

  function sum() {
    let somaParametros = 0;

    for (let i = 0; i < arguments.length; i++) {
      qtdParametros = arguments.length;
      if (typeof arguments[i] == "number") {
        somaParametros += arguments[i];
      }
    }
    return somaParametros;
  }

  let somaTotal = sum(1, 2, 3, 4, 5);
  console.log(`Soma total: ${somaTotal}`);

  function avarege() {
    return somaTotal / qtdParametros;
  }

  let mediaFinal = avarege().toFixed(2);
  console.log(`A média é: ${mediaFinal}`);
})();
