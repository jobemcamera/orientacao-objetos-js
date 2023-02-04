import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Jobe", 11122233309);
console.log(cliente1);
const cliente2 = new Cliente("Ana", 22211133309);
console.log(cliente2);

const conta1 = new ContaCorrente(1001, cliente1);

conta1.depositar(500);

const conta2 = new ContaCorrente(1002, cliente2);

console.log(conta1);
console.log(conta2);
