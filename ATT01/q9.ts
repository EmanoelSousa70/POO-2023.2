class SituacaoFinanceira {
    valorCreditos: number;
    valorDebitos: number;

    constructor(valorCreditos: number, valorDebitos: number) {
        this.valorCreditos = valorCreditos;
        this.valorDebitos = valorDebitos;
    }

    saldo(): number {
        return this.valorCreditos - this.valorDebitos;
    }
}

const valorCreditos: number = parseFloat(prompt("Digite o valor dos créditos: "));
const valorDebitos: number = parseFloat(prompt("Digite o valor dos débitos: "));

const situacao: SituacaoFinanceira = new SituacaoFinanceira(valorCreditos, valorDebitos);
const saldoAtual: number = situacao.saldo();

console.log(`Saldo atual: ${saldoAtual}`);
