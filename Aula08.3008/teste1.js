// Criando um objeto literal
let aluno = {
    nome: "Ana",
    notas: [10, 8.9, 7.5],

    // Método para calcular a média das notas
    calcularMedia: function() {
        return this.notas.reduce((soma, nota) => soma + nota, 0) / this.notas.length;
    }
};

// --- Usando desestruturação para acessar o nome
let { nome } = aluno;
console.log("Nome do aluno:", nome);

// --- Usando spread operator para adicionar uma nova nota
aluno.notas = [...aluno.notas, 9]; 

// Exibindo resultados
console.log("Notas atualizadas:", aluno.notas);
console.log("Média do aluno:", aluno.calcularMedia());
