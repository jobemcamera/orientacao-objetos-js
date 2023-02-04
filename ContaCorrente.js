export class ContaCorrente {
    agencia;
    cliente;

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

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}