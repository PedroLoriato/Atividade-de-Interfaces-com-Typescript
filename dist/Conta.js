"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
class Conta {
    constructor(cliente, saldo = 0.0) {
        if (cliente != null) {
            this._titular = cliente;
            this._saldo = saldo < 0.0 ? 0.0 : saldo;
            Conta._qtContas++; //ATENÇÃO: não usa o this, mas Conta
            this._id = "" + new Date().getFullYear() + Conta._qtContas;
        }
        else {
            throw new ReferenceError("Null Pointer Error - Cliente nulo");
        }
    }
    static get qtContas() {
        return Conta._qtContas;
    }
    get id() {
        return this._id;
    }
    get titular() {
        return this._titular;
    }
    set titular(cliente) {
        if (cliente != null) {
            this._titular = cliente;
        }
    }
    get saldo() {
        return this._saldo;
    }
    sacar(valor) {
        if (valor <= this._saldo) {
            this._saldo -= valor;
            return true;
        }
        return false;
    }
    depositar(valor) {
        if (valor > 0.0) {
            this._saldo += valor;
            return true;
        }
        return false;
    }
    transferir(param1, param2) {
        if (param1 instanceof Conta && typeof param2 == "number") {
            if (this.sacar(param2)) {
                return param1.depositar(param2);
            }
        }
        else if (typeof param1 == "number" && param2 instanceof Conta) {
            if (this.sacar(param1)) {
                return param2.depositar(param1);
            }
        }
        return false;
    }
    toString() {
        return ("Nº Conta = " + this._id +
            "\nTitular = " + this._titular.toString() +
            "\nSaldo = R$" + this.saldo.toFixed(2));
    }
}
exports.Conta = Conta;
Conta._qtContas = 0; //atributo estático, da classe e não da instância da classe
//# sourceMappingURL=Conta.js.map