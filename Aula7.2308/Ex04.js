// 4 - Faça um programa que tenha um array com 10 numeros (negativos e positivos), utilize o filter para criar um array somente 
// com os numeros positivos.

let numeros = [ 1, -1 , 3, -3, 5, -5, 7, -7, 9 ,-9]
let numerosPositivo = numeros.filter((numeros) => numeros > 0)

console.log(numerosPositivo)