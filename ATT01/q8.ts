lass Circulo {
    raio: number;

    constructor(raio: number) {
        this.raio = raio;
    }

    calcularArea(): number {
        return Math.PI * this.raio ** 2;
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.raio;
    }
}

const raioCirculo = parseFloat(prompt("Digite o raio do círculo: "));
const circulo = new Circulo(raioCirculo);

const areaCirculo = circulo.calcularArea();
const perimetroCirculo = circulo.calcularPerimetro();

console.log(`Área do círculo: ${areaCirculo}`);
console.log(`Perímetro do círculo: ${perimetroCirculo}`);
