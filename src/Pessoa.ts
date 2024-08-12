export class Pessoa {
    private _nome: string;
    private _cpf: string;
    private _dtNascimento: Date;

    constructor(nome: string, cpf: string, data: Date = new Date("2000/01/01")) {
        this._nome = nome.toUpperCase();
        this._cpf = cpf;
        if (data !== null) {
            this._dtNascimento = data;
        } else {
            this._dtNascimento = new Date("2000/01/01");
        }
    }

    get nome() : string {
        return this._nome;
    } 

    set nome(novoNome: string)  {
        if (novoNome != "") {
            this._nome = novoNome.toUpperCase();
        }        
    }
    
    get cpf(): string {
        return this._cpf;
    }

    get dtNascimento(): Date {
        return this._dtNascimento;
    }
    set dtNascimento(data: Date) {
        if (data !== null && data !== undefined) {
            this._dtNascimento = data;
        } else {
            this._dtNascimento = new Date("2000/01/01");
        }
    }

    toString(): string{
        return "Nome: " + this._nome +
            "\nCPF: " + this._cpf +
            "\nNascimento : " + this._dtNascimento.toLocaleDateString('pt-br');
    }

    stringify(): string{
        return '\n{' + 
                '\n\t"nome" : "' + this._nome + '" ,' + 
                '\n\t"cpf" : "' + this._cpf + '" ,' +
                '\n\t"dtNascimento" : "' + this._dtNascimento.toLocaleDateString('pt-br') + '\n}'; 
    }
}