/* Atividade 05
Crie um array chamado numeros com os valores [1, 2, 3, 4, 5]. Usando a função
map() e uma arrow function, crie um novo array chamado dobrados que contenha
todos os números do array numeros multiplicados por 2.

Objetivo:
Praticar a criação e uso de arrow functions em operações simples. */

const numeros = [1,2,3,4,5]

const dobrados = numeros.map(num => num * 2);


console.log("Números originais:", numeros);
console.log("Números dobrados:", dobrados);