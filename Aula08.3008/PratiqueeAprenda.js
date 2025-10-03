/* Crie um objeto chamado aluno que deve conter as seguintes propriedades:
nome: uma string com o nome do aluno.
notas: um array com as notas do aluno.
Além das propriedades, adicione os seguintes métodos ao objeto aluno:
calcularMedia(): Este método deve calcular e retornar a média das notas armazenadas no array notas.
adicionarNota(nota): Este método deve permitir adicionar novas notas ao array de notas do aluno.
Calcule a média das notas usando o método calcularMedia() e exiba o resultado no console.
Após criar o objeto:

Objetivo: Praticar a criação de objetos com métodos em JavaScript, manipulando
dados dentro do objeto e aplicando lógica para calcular a média das notas. */

/* let aluno1 = {
    nome: 'Ana',
    notas: [10, 8.9, 7.5]

};

console.log(aluno)

aluno.notas.push(8);

console.log(aluno) */

// Criando o objeto aluno
let aluno = {
    nome: "Ana",
    notas: [10, 8.9, 7.5],

    // Método para calcular a média das notas
    calcularMedia: function() {
        if (this.notas.length === 0) return 0;
        let soma = 0;
        for (let nota of this.notas) {
            soma += nota;
        }
        return soma / this.notas.length;
    },

    // Método para adicionar uma nova nota
    adicionarNota: function(nota) {
        this.notas.push(nota);
    }
};

// Usando os métodos do objeto
console.log("Nome:", aluno.nome);
console.log("Notas iniciais:", aluno.notas);

aluno.adicionarNota(9); // adicionando nova nota

console.log("Notas após adição:", aluno.notas);
console.log("Média do aluno:", aluno.calcularMedia());
