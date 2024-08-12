"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Poupanca = void 0;
const Conta_1 = require("./Conta");
class Poupanca extends Conta_1.Conta {
    constructor(cliente, saldo = 0.0, rendimento = 0.0) {
        super(cliente, saldo);
        this._rendimento = rendimento;
    }
    get rendimento() {
        return this._rendimento;
    }
    set rendimento(valor) {
        if (valor < 0.0) {
            this._rendimento = 0.0;
        }
        else {
            this._rendimento = valor;
        }
    }
    aplicaRendimento() {
        let rendimento = super.saldo * (this._rendimento / 100);
        super.depositar(rendimento);
    }
    viraMes() {
        this.aplicaRendimento();
        return this.saldo;
    }
    toString() {
        return (super.toString() +
            "\nRendimento = " + this._rendimento.toFixed(2) + "%");
    }
}
exports.Poupanca = Poupanca;
//# sourceMappingURL=Poupanca.js.map