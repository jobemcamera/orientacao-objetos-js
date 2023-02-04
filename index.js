import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente(); // Criando um novo Objeto / instanciando o Objeto
cliente1.nome = 'Jobe'; // Atribuição dos valores nas propriedades do Objeto
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = 'Ana';
cliente2.cpf = 22211133309;

const contaCorrenteJobe = new ContaCorrente();
contaCorrenteJobe.agencia = 1001;

console.log(contaCorrenteJobe);

contaCorrenteJobe.depositar(100);
contaCorrenteJobe.depositar(100);
contaCorrenteJobe.depositar(100);

console.log(`Saldo da CC: ${contaCorrenteJobe._saldo}`);

const valorSacado = contaCorrenteJobe.sacar(50);

console.log(`Valor sacado: ${valorSacado}`)

console.log(`Saldo da CC: ${contaCorrenteJobe._saldo}`);