// Função 1
function fatorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  return num * fatorial(num - 1);
}

console.log(fatorial(5));

// Função 2
const boasVindas = function (){
    console.log('Boa Vinda!')
} 

boasVindas()

// Função 3
function fatorialNovo(num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  return num * fatorial(num - 1);
  
}

fatorialNovo(5)

// Função 4 - Pegar o valor que esta dentro de outra função

let resultado = 0;
function soma (){
    resultado =  fatorial() + fatorialNovo();
    return resultado
}

console.log(soma( ))