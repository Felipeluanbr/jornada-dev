// IF - ELSE

// Usando uma condiçao

const num1 = 2;
const num2 = 4;
const operacao = "subtraçao";

if (operacao === "soma") {
  console.log(num1 + num2);
} else {
  console.log("Operaçao nao indentificada");
}

// Usando duas condiçoes

if (operacao === "soma") {
  console.log(num1 + num2);
} else if (operacao === "subtraçao") {
  console.log(num1 - num2);
} else {
  console.log("Operaçao nao indentificada");
}

// Localizar o nivel de bonus
const salario = 5000;

if (salario > 11000) {
  console.log(salario + salario * 0.03);
} else if (salario < 10999 && salario > 7000) {
  console.log(salario + salario * 0.05);
} else if (salario < 7000 && salario > 4000) {
  console.log(salario + salario * 0.07);}
  else{
    console.log(salario+(salario*0.09))
  }
