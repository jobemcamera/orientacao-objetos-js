// Classe Cliente com os seus atributos/propriedades
class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        }
    }
}



// Criando um novo Objeto / instanciando o Objeto
const cliente1 = new Cliente();
// Atribuição dos valores nas propriedades do Objeto
cliente1.nome = 'Jobe';
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = 'Ana';
cliente2.cpf = 22211133309;

const ContaCorrenteJobe = new ContaCorrente();
ContaCorrenteJobe.saldo = 0;
ContaCorrenteJobe.agencia = 1001;

console.log(ContaCorrenteJobe.saldo);

// Depósito 100
ContaCorrenteJobe.saldo = 100;
console.log(ContaCorrenteJobe.saldo);
ContaCorrenteJobe.sacar(50);

console.log(cliente1);
console.log(cliente2);