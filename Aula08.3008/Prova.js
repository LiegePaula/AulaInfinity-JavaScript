/* [JSIA-A08]  Explique o que são objetos literais em JavaScript e mostre um exemplo prático de um 
objeto chamado aluno, que contenha as seguintes propriedades e métodos:

nome (string)
notas (array de números)
calcularMedia() (método que retorna a média das notas)
Além disso, utilize a desestruturação para acessar o nome do aluno, e o spread operator para adicionar 
uma nova nota ao array original. */

/* Resposta: 

Objetos literais em JavaScript são estruturas de dados que permitem armazenar pares de chave-valor.

Eles são uma maneira simples e direta de criar objetos, onde as chaves (também chamadas de propriedades) são strings
que identificam os valores armazenados.

Os valores podem ser de qualquer tipo, incluindo números, strings, arrays, funções ou outros objetos. */

const aluno = {
    nome: 'Miguel',
    notas: [10, 8.9, 7.5]
}

function calcularMedia(notas) {
    return notas.reduce((soma, nota) => soma + nota, 0) / notas.length;
}

console.log(calcularMedia(aluno.notas))

let {nome} = aluno
console.log(nome)

aluno.notas = [...aluno.notas, 9];

console.log("Notas atualizadas:", aluno.notas);
console.log("Média do aluno:", calcularMedia(aluno.notas));