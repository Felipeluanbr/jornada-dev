// Usando a portas para fazer a verificação de senha 

const email = true;
const senha = false;

console.log('Condição 1')
if (email != senha) {
  console.log("Acesso permitido");
} else if (email != senha) {
  console.log("Senha diferente");
} else {
  console.log("Usuario ou senha incorreto");
}

console.log('\nCondição 2')
if (email && senha) {
  console.log("Acesso permitido");
} else if (email != senha) {
  console.log("Senha diferente");
} else {
  console.log("Usuario ou senha incorreto");
}