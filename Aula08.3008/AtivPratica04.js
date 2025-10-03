/* Atividade 04
Crie um array chamado livros, onde cada elemento do array é um
objeto representando um livro, com as seguintes propriedades:

Objetivo:
Praticar a criação, manipulação e iteração de um array de objetos
Após criar o array:
Exiba no console todos os títulos dos livros.
Adicione um novo objeto representando outro livro ao array.
Exiba no console a lista completa de livros após a adição.
titulo: string com o título do livro.
autor: string com o nome do autor. */

const livros = [
   {titulo: 'livro1', autor: 'autor1'},
   {titulo: 'livro2', autor: 'autor2'},
   {titulo: 'livro3', autor: 'autor3'},
   {titulo: 'livro4', autor: 'autor4'}
]
livros.forEach(function(livro) {
    console.log(livro.titulo) 
})

livros.push({ titulo: "A Revolução dos Bichos", autor: "George Orwell" });
console.log('Lista completa de livros')
console.log(livros)