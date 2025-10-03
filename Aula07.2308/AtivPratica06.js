/* Atividade 06
Crie um script que utilize o método find() para localizar o primeiro
número ímpar em um array de números. O script deve exibir no console
o número encontrado ou uma mensagem indicando que não há
números ímpares no array.

Objetivo:
Praticar o uso do método find() para buscar e retornar o primeiro
elemento em um array que satisfaz uma condição específica */

const numeros = [1,2,3,4,5,6];
const primeiroImpar = numeros.find((numeros) =>{ 
return numeros %2 !== 0});

console.log(primeiroImpar)