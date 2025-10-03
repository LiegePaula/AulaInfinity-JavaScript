/* Atividade 03
Crie uma função chamada realizarOperacao que receba
dois números e uma função de callback como parâmetros.

Requisitos:
A função deve executar o callback passando os dois números como argumentos.
Crie duas funções de callback:
somar: que recebe dois números e exibe no console a soma deles.
multiplicar: que recebe dois números e exibe no console o produto deles.
Teste a função realizarOperacao chamando-a duas vezes, uma vez com o
callback somar e outra vez com o callback multiplicar.

Objetivo:
Praticar a criação e uso de funções de callback. */

function realizarOperacao(num1, num2, callback){
    callback(num1, num2)
}
    function somar(a,b){
        console.log(`'A soma é:' `, a + b);
    }
    function multiplicar(a,b){
        console.log(`A multiplicação é:`, a * b);
    }

realizarOperacao(10, 5, somar);
realizarOperacao(8, 2, multiplicar);