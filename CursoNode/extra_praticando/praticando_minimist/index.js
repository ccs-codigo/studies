const minimist = require("minimist");
const calculadora = require("./calculadora");

const args = minimist(process.argv.slice(2));

const a = parseInt(args["a"]);
const b = parseInt(args["b"]);
const op = args["op"];

let resultado;

switch (op) {
  case "soma":
    resultado = calculadora.soma(a, b);
    break;
  case "sub":
    resultado = calculadora.sub(a, b);
    break;
  case "mult":
    resultado = calculadora.mult(a, b);
    break;
  case "div":
    resultado = calculadora.div(a, b);
    break;

  default:
    resultado = "Operação inválida!";
}

console.log("Resultado:", resultado);
