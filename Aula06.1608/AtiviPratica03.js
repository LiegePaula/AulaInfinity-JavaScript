/* Atividade 03
Crie uma função chamada calcularSoma que utilize o rest operator para aceitar um número
indefinido de parâmetros e calcular a soma de todos eles.
Chame a função com diferentes quantidades de números e exiba o resultado no console.

Objetivo:
O console deve exibir a soma dos números passados para a função. */

function calcularSoma( ...numeros){
    let soma = 0;
    for (let num of numeros){
        soma += num
    }
    return soma
}
console.log(calcularSoma(1,2,5,6))