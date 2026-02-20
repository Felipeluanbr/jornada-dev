// Laço de repetiçao simples
// let numero = 5;

// for (let a = 1; a <= 10; a++) {
//   const resultado = numero * a;
//   console.log(`O numero ${numero} multiplicado por ${a} = ${resultado}`);
// }

// Laço de repetiçao usando uma condiçao dentro dele


for (let contador = 1; contador <= 50; contador++) {
  const num2 = Math.floor(Math.random() * (50 - 1 + 1) + 1);
  if(num2 === 15){
    console.log(`O numero ${num2} foi gerado em  ${contador} tentativas`);
    break
  }
}
