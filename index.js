import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente(); // Criando um novo Objeto / instanciando o Objeto
cliente1.nome = 'Jobe'; // Atribuição dos valores nas propriedades do Objeto
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = 'Ana';
cliente2.cpf = 22211133309;

const conta1 = new ContaCorrente();
conta1.agencia = 1001;
conta1.cliente = cliente1;
conta1.depositar(500);

const conta2 = new ContaCorrente();
conta2.agencia = 1002;
conta2.cliente = cliente2;

console.log(conta1);
console.log(conta2);

conta1.transferir(200, conta2);

console.log(conta1);
console.log(conta2);