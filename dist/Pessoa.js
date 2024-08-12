"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, cpf, data = new Date("2000/01/01")) {
        this._nome = nome.toUpperCase();
        this._cpf = cpf;
        if (data !== null) {
            this._dtNascimento = data;
        }
        else {
            this._dtNascimento = new Date("2000/01/01");
        }
    }
    get nome() {
        return this._nome;
    }
    set nome(novoNome) {
        if (novoNome != "") {
            this._nome = novoNome.toUpperCase();
        }
    }
    get cpf() {
        return this._cpf;
    }
    get dtNascimento() {
        return this._dtNascimento;
    }
    set dtNascimento(data) {
        if (data !== null && data !== undefined) {
            this._dtNascimento = data;
        }
        else {
            this._dtNascimento = new Date("2000/01/01");
        }
    }
    toString() {
        return "Nome: " + this._nome +
            "\nCPF: " + this._cpf +
            "\nNascimento : " + this._dtNascimento.toLocaleDateString('pt-br');
    }
    stringify() {
        return '\n{' +
            '\n\t"nome" : "' + this._nome + '" ,' +
            '\n\t"cpf" : "' + this._cpf + '" ,' +
            '\n\t"dtNascimento" : "' + this._dtNascimento.toLocaleDateString('pt-br') + '\n}';
    }
}
exports.Pessoa = Pessoa;
//# sourceMappingURL=Pessoa.js.map