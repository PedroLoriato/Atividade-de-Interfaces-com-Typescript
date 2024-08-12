"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaCorrente = void 0;
const Conta_1 = require("./Conta");
class ContaCorrente extends Conta_1.Conta {
    constructor(cliente, saldo = 0.0, tarifa = 0.0, limiteCredito = 100.0, juros = 0.0) {
        super(cliente, saldo);
        this._tarifa = tarifa;
        this._limiteCredito = limiteCredito;
        this._juros = juros;
        this._saldoDevedor = 0.0;
    }
    get tarifa() {
        return this._tarifa;
    }
    set tarifa(valor) {
        if (valor < 0.0) {
            this._tarifa = 0.0;
        }
        else {
            this._tarifa = valor;
        }
    }
    get limiteCredito() {
        return this._limiteCredito;
    }
    set limiteCredito(valor) {
        if (valor < 0.0) {
            this._limiteCredito = 0.0;
        }
        else {
            this._limiteCredito = valor;
        }
    }
    get juros() {
        return this._juros;
    }
    set juros(valor) {
        if (valor < 0.0) {
            this._juros = 0.0;
        }
        else {
            this._juros = valor;
        }
    }
    get saldo() {
        return super.saldo - this._saldoDevedor;
    }
    limiteDisponivel() {
        return (this._limiteCredito + this.saldo); //faz a chamada de get saldo()
    }
    sacar(valor) {
        if (valor <= this.limiteDisponivel() && valor > 0.00) {
            if (!super.sacar(valor)) { // se não conseguiu sacar, porque valor ultrapassa o saldo
                valor -= super.saldo;
                super.sacar(super.saldo);
                this._saldoDevedor += valor;
            }
            return true;
        }
        return false;
    }
    depositar(valor) {
        if (this._saldoDevedor > 0.00 && valor > 0.00) {
            if (valor > this._saldoDevedor) {
                valor -= this._saldoDevedor;
                this._saldoDevedor = 0.00;
                super.depositar(valor);
            }
            else {
                this._saldoDevedor -= valor;
            }
            return true;
        }
        return super.depositar(valor);
    }
    viraMes() {
        let taxa = (this._saldoDevedor > 0.00) ? (this._saldoDevedor * (this._juros / 100)) : 0.00;
        if (!this.sacar(this._tarifa + taxa)) { //se não conseguiu sacar, porque (_tarifa + taxa) ultrapassam o limiteDisponível
            let valorDebito = this._tarifa + taxa - super.saldo;
            super.sacar(super.saldo);
            this._saldoDevedor += valorDebito;
        }
        return this.saldo;
    }
    toString() {
        return (super.toString() +
            "\nTarifa = R$" + this._tarifa.toFixed(2) +
            "\nLimite de Crédito = R$" + this._limiteCredito.toFixed(2)) +
            "\nJuros = " + this._juros.toFixed(2) + "%" +
            "\nSaldo Devedor = R$" + this._saldoDevedor.toFixed(2);
    }
}
exports.ContaCorrente = ContaCorrente;
//# sourceMappingURL=ContaCorrente.js.map