import { Cliente } from "./Cliente";
import { ContaCorrente } from "./ContaCorrente";
import { IAplicacao } from "./IAplicacao";

export class ContaRemunerada extends ContaCorrente implements IAplicacao {
    private _rendimento: number;

    constructor(cliente: Cliente, saldo: number = 0.0, tarifa: number = 0.0, limiteCredito: number = 100.0, juros: number = 0.0, rendimento: number = 0.0) {
        super(cliente, saldo, tarifa, limiteCredito, juros);
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
        if (super.saldo >= 0.0) {
            let rendimento = super.saldo * (this._rendimento / 100);
            super.depositar(rendimento);
        }
    }

    viraMes(): number {
        super.viraMes();
        this.aplicaRendimento();
        return this.saldo;
    }

    toString(): string {
        return (super.toString() +
            "\nRendimento = " + this._rendimento.toFixed(2) + "%");
    }
}