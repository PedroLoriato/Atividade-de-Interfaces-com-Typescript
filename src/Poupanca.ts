import { Cliente } from "./Cliente";
import { Conta } from "./Conta";
import { IAplicacao } from "./IAplicacao";

export class Poupanca extends Conta implements IAplicacao {
    private _rendimento: number;

    constructor(cliente: Cliente, saldo: number = 0.0, rendimento: number = 0.0) {
        super(cliente, saldo);
        this._rendimento = rendimento;
    }

    get rendimento(): number {
        return this._rendimento;
    }
    set rendimento(valor: number) {
        if (valor < 0.0) {
            this._rendimento = 0.0;
        } else {
            this._rendimento = valor;
        }
    }

    aplicaRendimento(): void {
        let rendimento = super.saldo * (this._rendimento / 100);
        super.depositar(rendimento);
    }

   viraMes(): number{
        this.aplicaRendimento()
        return this.saldo;
    }

    toString(): string {
        return (super.toString() +
            "\nRendimento = " + this._rendimento.toFixed(2) + "%");
    }
}

