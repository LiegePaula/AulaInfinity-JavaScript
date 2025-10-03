/* Atividade 06
Crie um array chamado numeros com os valores [1, 2, 3, 4, 5].

Usando o método reduce(), calcule a soma de todos os números do array e armazene o resultado em uma variável chamada somaTotal.

Usando o método reduce() novamente, calcule o produto de todos os números do array (multiplicação) e armazene o resultado 
em uma variável chamada produtoTotal.

Exiba ambos os resultados no console.

Objetivo:
Praticar o uso do método reduce(). */
const numeros = [1,2,3,4,5]

const somaTotal = numeros.reduce((acumulador, num) => acumulador + num, 0);

const produtoTotal = numeros.reduce((acumulador, num) => acumulador * num, 1);


console.log("Soma total:", somaTotal);       
console.log("Produto total:", produtoTotal);