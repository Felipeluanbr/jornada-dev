// Exercicio 01 - Você está criando um aplicativo para exibir a sequência de números até um valor que o usuário forneceu. O objetivo é mostrar todos os números a partir de 1 até o valor informado pelo usuário, de forma ordenada e crescente.

const numeroFinal = 5;

for (let i = 1; i < numeroFinal; i++) {
  console.log(i);
}

// Exercicio 02 - Você é uma pessoa desenvolvedora de interface em uma startup de tecnologia aeroespacial e precisa criar uma contagem regressiva automática para o painel de lançamento. A contagem deve começar de 10 até 0, exibindo “Lançar!” ao final.

for (let i = 10; i >= 0; i--) {
  console.log(i);
}

console.log("Lançar");

// Exercicio 03 - Você está criando um sistema de análise para um cliente que precisa identificar todos os números pares dentro de um intervalo informado. Ele quer saber quais valores são múltiplos de 2, para aplicar um filtro em dados financeiros.

const numeroUsuario = 10;
const numeroPares = 0;

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0 && i != 0) {
    console.log(i);
  }
}

// Exercicio 04 - Você é analista de segurança da informação em uma empresa e precisa validar a senha digitada por um novo usuário. Sua tarefa é mostrar, caractere por caractere, todos os símbolos digitados, para garantir que nada foi escondido.

const senhaCadastrada = "seguranç@2025";

for (let i = 0; i < senhaCadastrada.length; i++) {
  console.log(`Caractere ${i}: ${senhaCadastrada[i]}`);
}

// Exercicio 05  - Você está criando um sistema de cadastro em que a pessoa usuária pode cadastrar quantos nomes quiser, um por vez. O processo deve continuar até que seja encontrado a palavra "fim" (com letras minúsculas).

const entradas = ["Ana", "Bruno", "Carla", "fim", "Daniel"];
let i = 0;

while (entradas[i] !== "fim") {
  console.log(`Nome: ${entradas[i]}`);
  i++;
}

// Exercicio 06 - Você está trabalhando no sistema de controle de acesso de um laboratório secreto. Por questões de segurança, o número 10 deve ser evitado a todo custo. O contador de testes deve exibir os números normalmente, mas precisa ser encerrado imediatamente ao chegar nesse número. Crie um programa que inicie a contagem em 1 e siga até 20. Se o número 10 for alcançado, o sistema deve exibir uma mensagem de alerta e interromper a contagem.

for (let i = 1; i <= 20; i++) {
  if (i === 10) {
    console.log("Número proibido encontrado! Encerrando...");
    break;
  }
  console.log(i);
}

// Exercicio 07 - Você está desenvolvendo uma funcionalidade para um aplicativo de finanças pessoais. Um dos recursos permite simular quanto uma pessoa economizaria em um período de tempo, iniciando em R$1 no primeiro dia e aumentando esse valor em R$1 a cada novo dia. Ou seja, a cada dia que passa, ela economiza R$1 a mais do que no anterior.