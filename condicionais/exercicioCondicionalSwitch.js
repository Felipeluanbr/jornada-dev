const nome = "Roberta";
const nota = 8;
const faltas = 3;

const recebeBonus =
  nota >= 8 && faltas <= 2
    ? `${nome} recebe bonus`
    : `${nome} não recebe bonus`;

console.log(recebeBonus);

// Exercicio 02

const usuario = "Super Premium";

switch (usuario) {
  case "Normal":
    console.log("Voce nao tem acesso completo");

    break;

  case "Premium":
    console.log("Voce tem acesso total");
    break;

  case "Super Premium":
    console.log("Voce tem acesso ao Super total");
    break;
  default:
    console.log("voce nao tem usuario");
    break;
}
