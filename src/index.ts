import { Cliente } from "./Cliente";
import { Conta } from "./Conta";
import { ContaCorrente } from "./ContaCorrente";
import { Poupanca } from "./Poupanca";
import { ContaRemunerada } from "./ContaRemunerada";

import { IAplicacao } from "./IAplicacao";

const cliente1 = new Cliente("Pedro", "123.456.789-00", new Date("2004-12-16"));
const cliente2 = new Cliente("Katiane", "987.654.321-12", new Date("2004-07-22"));
const cliente3 = new Cliente("Joaquim", "434.232.123-21", new Date("2004-08-23"));
const cliente4 = new Cliente("Maria", "123.456.789-00", new Date("2000-05-28"));

// 1. Vetor de Contas
const vetContas: Conta[] = [
    new ContaCorrente(cliente1, 1000.00, 14.00, 100.00, 10),
    new Poupanca(cliente1, 100.00, 2),
    new ContaRemunerada(cliente1, 0.00, 18.00, 50.00, 5, 2),
    new ContaCorrente(cliente2, 2000.00, 14.00, 100.00, 10),
    new Poupanca(cliente2, 200.00, 4),
    new ContaRemunerada(cliente2, 1000.00, 18.00, 100.00, 10, 5),
]

console.log("\nExecutando o método viraMes() dos objetos de Conta");
vetContas.forEach(conta => console.log(conta.viraMes()));

// Tentando executar o método aplicaRendimento() em um objeto que não implementa a interface IAplicacao
// vetContas.forEach(conta => conta.aplicaRendimento());
/*  src/index.ts:23:46 - error TS2339: Property 'aplicaRendimento' does not exist on type 'Conta'.
        23 vetContas.forEach(conta => console.log(conta.aplicaRendimento()));
                                                        ~~~~~~~~~~~~~~~~
    Found 1 error in src/index.ts:23
*/

// 2. Vetor de Aplicacôes
const vetAplicacoes: IAplicacao[] = [
    new Poupanca(cliente3, 1000.00, 5),
    new ContaRemunerada(cliente3, 200.00, 20.00, 500.00, 10, 10),
    new Poupanca(cliente4, 100.00, 2),
    new ContaRemunerada(cliente4, 500.00, 15.00, 50.00, 5, 5),
]

// Tentando inserir no vetor de aplicações um objeto de ContaCorrente
// vetAplicacoes.push(new ContaCorrente(cliente1, 1000.00, 14.00, 100.00, 10));
/*  src/index.ts:44:20 - error TS2345: Argument of type 'ContaCorrente' is not assignable to parameter of type 'IAplicacao'.
        Property 'aplicaRendimento' is missing in type 'ContaCorrente' but required in type 'IAplicacao'.

    44 vetAplicacoes.push(new ContaCorrente(cliente1, 1000.00, 14.00, 100.00, 10));
                          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    src/IAplicacao.ts:2:5
        2     aplicaRendimento(): void;
          ~~~~~~~~~~~~~~~~~~~~~~~~~
        'aplicaRendimento' is declared here.

    Found 1 error in src/index.ts:44
*/

console.log("\nExecutando o método aplicaRendimento() dos objetos que implementam a interface IAplicacao");
vetAplicacoes.forEach(aplicacao => aplicacao.aplicaRendimento());
vetAplicacoes.forEach(aplicacao => console.log("\n" + aplicacao.toString()));

// Tentando executar o método viraMes() de um objeto que implementa a interface IAplicacao
//vetAplicacoes.forEach(aplicacao => aplicacao.viraMes());
/*  src/index.ts:64:46 - error TS2339: Property 'viraMes' does not exist on type 'IAplicacao'.

    64 vetAplicacoes.forEach(aplicacao => aplicacao.viraMes());
                                                    ~~~~~~~
    Found 1 error in src/index.ts:64
*/