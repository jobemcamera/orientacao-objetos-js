class Cliente { // Classe Cliente com os seus atributos/propriedades
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    _saldo = 0; // Proposta: '#' declara um atributo privado. Não irá aparecer no console.log fora do escopo da Classe.
                // '_' convenção de que o campo é "privado".
    
    sacar(valor) { // Método sacar
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor; // Para atribuir um valor de retorno para uma outra variável, necessário a palavra "return"
        }
    }
    
    depositar(valor) { // Método depositar
        if (valor <= 0) return; // Earlier return
        this._saldo += valor;
    }
}


const cliente1 = new Cliente(); // Criando um novo Objeto / instanciando o Objeto
cliente1.nome = 'Jobe'; // Atribuição dos valores nas propriedades do Objeto
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = 'Ana';
cliente2.cpf = 22211133309;

const contaCorrenteJobe = new ContaCorrente();
contaCorrenteJobe.agencia = 1001;

contaCorrenteJobe.depositar(100);
contaCorrenteJobe.depositar(100);
contaCorrenteJobe.depositar(100);

const valorSacado = contaCorrenteJobe.sacar(50);

console.log(`Valor sacado: ${valorSacado}`)
