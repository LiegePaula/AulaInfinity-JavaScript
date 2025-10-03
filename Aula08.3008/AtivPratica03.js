/* Atividade 03
Crie um objeto chamado livro que
contenha as seguintes propriedades:

titulo: uma string representando o título do livro.
autor: uma string com o nome do autor.
ano: um número representando o ano de publicação.
editora: uma string com o nome da editora.

Utilize a desestruturação para extrair as
propriedades titulo e autor do objeto livro.
Em seguida, exiba essas propriedades no console.
Objetivo:
Praticar a desestruturação de objetos em JavaScript,
extraindo propriedades e definindo valores padrão. */

let livro = {
    titulo: 'Testes Reais',
    autor: 'Liege',
    ano: 2021,
    editora: 'FTD'
};

let {titulo, autor} = livro
console.log(titulo)
console.log(autor)


