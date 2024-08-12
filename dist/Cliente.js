"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const Pessoa_1 = require("./Pessoa");
class Cliente extends Pessoa_1.Pessoa {
    constructor(nome, cpf, data, agencia, senha = "1234") {
        super(nome.toUpperCase(), cpf, data);
        this._agencia = agencia != undefined ? agencia : "001";
        this._senha = senha;
    }
    get agencia() {
        return this._agencia;
    }
    set agencia(novaAgencia) {
        if (novaAgencia != "") {
            this._agencia = novaAgencia;
        }
    }
    autentica(senha) {
        return this._senha == senha;
    }
    toString() {
        return "Cliente:\n" +
            super.toString() +
            "\nAgência : " + this._agencia;
    }
}
exports.Cliente = Cliente;
//# sourceMappingURL=Cliente.js.map