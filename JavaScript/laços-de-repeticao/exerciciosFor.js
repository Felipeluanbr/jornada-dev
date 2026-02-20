// Exercicio 01 - Criar um contador que so e incrementado caso os numeros nao sejam divisiveis por 5

let contador = 0;
for (let i = 1; i <= 50; i++) {
  const num2 = Math.floor(Math.random() * (50 - 1 + 1) + 1);
  if (num2 % 5 === 0) {
    continue;
  } ;
  contador++;
}

console.log(contador);

