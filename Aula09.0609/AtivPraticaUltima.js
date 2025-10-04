/* Atividade 04
Crie uma classe chamada Carro que tenha as seguintes propriedades e métodos:

Propriedades:
marca: uma string que representa a marca do carro.
modelo: uma string que representa o modelo do carro.
ano: um número que representa o ano de fabricação do carro.

Métodos:
detalhes(): Este método deve exibir no console uma mensagem no formato
"Carro: [marca] [modelo], Ano: [ano]".

Requisitos:
Crie dois objetos (instâncias) da classe Carro com diferentes valores para as propriedades
marca, modelo, e ano.
Chame o método detalhes() para ambos os objetos e exiba as informações no console.

Objetivo:
Praticar a criação de classes e objetos em JavaScript, além de manipular métodos e propriedades
dentro de uma classe */

class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    detalhes() {
        console.log(`Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}`);
    }
};
    
const carro1 = new Carro("Toyota", "Corolla", 2020);
const carro2 = new Carro("Honda", "Civic", 2022);


carro1.detalhes()
carro2.detalhes()