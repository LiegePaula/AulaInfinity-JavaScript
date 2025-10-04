/* Crie um pequeno programa em JavaScript que simule um sistema simples de notas escolares. Seu código deve:
Declarar um objeto aluno com as seguintes propriedades:
nome (string)
idade (number)
notas (array de 3 números)
Possuir um método calcularMedia() que retorna a média das notas;
Utilizar desestruturação para acessar nome e idade;
Usar o spread operator para adicionar uma nova nota ao array original;
Criar uma função chamada verificarSituacao que:
Receba a média como parâmetro
Verifique se o aluno está aprovado (média ≥ 7) ou reprovado
Retorne uma mensagem adequada
Utilizar um loop para exibir todas as notas no console.
Exibir no console:
Nome e idade do aluno
Todas as notas
A média final
A situação (aprovado ou reprovado) */

const aluno = {
    nome: 'Liege',
    idade: 43,
    notas:[8.5, 9, 7.5],


calcularMedia: function() {
        let soma = 0;
        for(let nota of this.notas) {
            soma += nota;
        }
        return soma / this.notas.length;
    }
}

aluno.notas = [...aluno.notas, 9];

function verificarSituacao(media) {
    if (media >= 7) {
        return 'Aprovado'
    } else {
        return 'Reprovadpo'
    }
}

let {nome, idade} = aluno;

console.log(`Nome: ${nome}`);
console.log(`Idade: ${idade}`);
console.log('Notas do aluno:');

for (let nota of aluno.notas) {
    console.log(nota);
}
let mediaFinal = aluno.calcularMedia();
let situacao = verificarSituacao(mediaFinal);

console.log(`Média final: ${mediaFinal.toFixed(2)}`);
console.log(`Situação: ${situacao}`);