const nome = "Roberta";
const nota = 8;
const faltas = 3;

const recebeBonus =
  nota >= 8 && faltas <= 2
    ? `${nome} recebe bonus`
    : `${nome} não recebe bonus`;

console.log(recebeBonus)