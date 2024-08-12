import { Cliente } from "./Cliente";

export abstract class Conta {
    private static _qtContas = 0; //atributo estático, da classe e não da instância da classe
    private _id: string;
    private _saldo: number;
    private _titular: Cliente;

    constructor(cliente: Cliente, saldo: number = 0.0) {
        if (cliente != null){
            this._titular = cliente;
            this._saldo = saldo < 0.0 ? 0.0 : saldo;
            
            Conta._qtContas++; //ATENÇÃO: não usa o this, mas Conta

            this._id = "" + new Date().getFullYear() + Conta._qtContas;
        } else {
            throw new ReferenceError("Null Pointer Error - Cliente nulo");
        } 
    }

    static get qtContas(): number {
        return Conta._qtContas;
    }

    get id(): string {
        return this._id;
    }

    get titular(): Cliente {
        return this._titular;
    }

    set titular(cliente: Cliente) {
        if (cliente != null) {
            this._titular = cliente;
        }
    }

    get saldo(): number {
        return this._saldo;
    }

    sacar(valor: number): boolean {
        if (valor <= this._saldo) {
            this._saldo -= valor;
            return true;
        }
        return false;
    }

    depositar(valor: number): boolean {
        if (valor > 0.0){
            this._saldo += valor;
            return true;
        }
        return false;
    }

    //Sobrecarregando o método transferir
    transferir(valor: number, contaDestino: Conta): boolean;
    transferir(contaDestino: Conta, valor: number): boolean;
    transferir(param1: number | Conta, param2: number | Conta): boolean {
        if (param1 instanceof Conta &&  typeof param2 == "number") {
            if (this.sacar(param2)){
                return param1.depositar(param2);
            }
        } else if (typeof param1 == "number" && param2 instanceof Conta) {
            if (this.sacar(param1)){
                return param2.depositar(param1);
            }
        }
        return false;
    }

    abstract viraMes(): number;
    
    toString(): string {
        return ("Nº Conta = " + this._id +
            "\nTitular = " + this._titular.toString() +
            "\nSaldo = R$" + this.saldo.toFixed(2));
    }
}

