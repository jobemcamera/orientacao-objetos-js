import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0; // atributo estático que pode ser alterado em qualquer objeto
    agencia;
    _cliente;
    _saldo = 0; // Proposta: '#' declara um atributo privado. Não irá aparecer no console.log fora do escopo da Classe. '_' convenção de que o campo é "privado".
   
    set cliente(novoValor) { // assessor
        if (novoValor instanceof Cliente) { // só vai atribuir se o _cliente for uma instância de Cliente
            this._cliente = novoValor;
        }
    }

    get cliente() { // assessor
        return this._cliente;
    }

    get saldo() { // assessor
        return this._saldo;
    }
    
    constructor(agencia, cliente) {
        this.agencia = agencia;
        this._cliente = cliente;
        ContaCorrente.numeroDeContas += 1;  // acessando o atributo estático da classe
    }

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

    transferir(valor, conta) { // Método transferir
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}