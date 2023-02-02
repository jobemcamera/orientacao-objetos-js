// Classe Cliente com os seus atributos/propriedades
class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
}

// Criando um novo Cliente
const cliente1 = new Cliente();
const cliente2 = new Cliente();

// Atribuição dos valores nas propriedades da Classe
cliente1.nome = 'Jobe';
cliente1.cpf = 11122233309;
cliente1.agencia = 1001;
cliente1.saldo = 0;

cliente2.nome = 'Ana';
cliente2.cpf = 22211133309;
cliente2.agencia = 1002;
cliente2.saldo = 20;

console.log(cliente1);
console.log(cliente2);