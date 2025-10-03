/* Atividade 04
Crie um script que utilize o método reduce() para somar todos os
números de um array. O script deve calcular a soma total e exibir o
resultado no console.

Objetivo:
Praticar o uso do método reduce() para acumular valores em um
array, resultando em um único valor. */

const numeros = [1,3,5,7,9]
const soma = numeros.reduce(function(acumulador, numeros){
    return acumulador + numeros
})
console.log(soma)