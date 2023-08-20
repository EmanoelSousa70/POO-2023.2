class Retangulo {
    l1: number;
    l2: number;

    constructor(l1: number, l2: number) {
        this.l1 = l1;
        this.l2 = l2;
    }

    calcularArea(): number {
        return this.l1 * this.l2;
    }

    calcularPerimetro(): number {
        return 2 * (this.l1 + this.l2);
    }
}

let retangulo: Retangulo;
retangulo = new Retangulo(10, 20);

console.log(`l1 do retângulo: ${retangulo.l1}`);
console.log(`l2 do retângulo: ${retangulo.l2}`);

const area: number = retangulo.calcularArea();
const perimetro: number = retangulo.calcularPerimetro();

console.log(`Área do retângulo: ${area}`);
console.log(`Perímetro do retângulo: ${perimetro}`);
