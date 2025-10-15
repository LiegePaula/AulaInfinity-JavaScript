
let aluno = {
    nome: "Ana",
    notas: [10, 8.9, 7.5],

   
    calcularMedia: function() {
        return this.notas.reduce((soma, nota) => soma + nota, 0) / this.notas.length;
    }
};


let { nome } = aluno;
console.log("Nome do aluno:", nome);


aluno.notas = [...aluno.notas, 9]; 


console.log("Notas atualizadas:", aluno.notas);
console.log("Média do aluno:", aluno.calcularMedia());
