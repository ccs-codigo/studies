import chalk from "chalk";
import minimist from "minimist";
import Readline from "readline";

const args = minimist(process.argv.slice(2));

let x = parseInt(args["x"]);
let y = parseInt(args["y"]);
let op = args["op"];

function resultado(x, y, op) {
  switch (op) {
    case "soma":
      return x + y;
    case "sub":
      return x - y;
    case "mult":
      return x * y;
    case "div":
      return x / y;
  }
}

if (x && y && op) {
  console.log(chalk.blue.bgWhite(`Resultado = ${resultado(x, y, op)}`));
} else {
  const readline = Readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question("Informe o primeiro número: ", (num1) => {
    readline.question("Informe o segundo número: ", (num2) => {
      readline.question("Informa a op: ", (operation) => {
        x = parseFloat(num1);
        y = parseFloat(num2);
        op = operation.toLocaleLowerCase();

        console.log(chalk.green(`Resultado = ${resultado(x, y, op)}`));

        readline.close();
      });
    });
  });
}
