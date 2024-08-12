import { Cliente } from "./Cliente";
import { Conta } from "./Conta";

export class ContaCorrente extends Conta {
    private _tarifa: number;
    private _limiteCredito: number;
    private _juros: number;
    private _saldoDevedor: number;

    constructor(cliente: Cliente, saldo: number = 0.0, tarifa: number = 0.0, limiteCredito: number = 100.0, juros: number = 0.0) {
        super(cliente, saldo);
        this._tarifa = tarifa;
        this._limiteCredito = limiteCredito;
        this._juros = juros;
        this._saldoDevedor = 0.0;
    }

    get tarifa(): number {
        return this._tarifa;
    }
    set tarifa(valor: number) {
        if (valor < 0.0) {
            this._tarifa = 0.0;
        } else {
            this._tarifa = valor;
        }
    }

    get limiteCredito(): number {
        return this._limiteCredito;
    }

    set limiteCredito(valor) {
        if (valor < 0.0) {
            this._limiteCredito = 0.0;
        } else {
            this._limiteCredito = valor;
        }
    }

    get juros(): number{
        return this._juros;
    }
    set juros(valor) {
        if (valor < 0.0) {
            this._juros = 0.0;
        } else {
            this._juros = valor;
        }
    }

    get saldo(): number {
        return super.saldo - this._saldoDevedor;
    }

    limiteDisponivel(): number {
        return (this._limiteCredito + this.saldo); //faz a chamada de get saldo()
    }

    sacar(valor: number): boolean {
        if (valor <= this.limiteDisponivel() && valor > 0.00){
            if (!super.sacar(valor)){ // se não conseguiu sacar, porque valor ultrapassa o saldo
                valor -= super.saldo;
                super.sacar(super.saldo);
                this._saldoDevedor += valor;
            }
            return true;
        }
        return false;
    }

    depositar(valor: number): boolean {
        if (this._saldoDevedor > 0.00 && valor > 0.00){
            if (valor > this._saldoDevedor){
                valor -= this._saldoDevedor;
                this._saldoDevedor = 0.00;
                super.depositar(valor);
            } else {
                this._saldoDevedor -= valor;
            }
            return true;
        }
        return super.depositar(valor);
    }

   viraMes(): number{
        let taxa = (this._saldoDevedor > 0.00) ? (this._saldoDevedor * (this._juros/100)) : 0.00;
        if (!this.sacar(this._tarifa + taxa)){//se não conseguiu sacar, porque (_tarifa + taxa) ultrapassam o limiteDisponível
            let valorDebito = this._tarifa + taxa - super.saldo;
            super.sacar(super.saldo);
            this._saldoDevedor += valorDebito; 
        }
        return this.saldo;
    }
    
    toString(): string {
        return (super.toString() +
            "\nTarifa = R$" + this._tarifa.toFixed(2) +
            "\nLimite de Crédito = R$" + this._limiteCredito.toFixed(2)) +
            "\nJuros = " + this._juros.toFixed(2) + "%" +
            "\nSaldo Devedor = R$" + this._saldoDevedor.toFixed(2);
    }
}

