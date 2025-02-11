let letraAtual = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "X",
  "Z",
];

let agregador = 0;
for (let i = 0; i < letraAtual.length; i++) {
  console.log(letraAtual[i]);
  i = agregador + i;
  agregador++;
}
