// 2 - Faça um programa onde você declare um array com 6 precos, depois utilize a função "map" para criar um novo array de precos 
// onde deve ser aplicado um desconto de 20% em todos eles.

let preços = [59.90 , 79.99 , 45.90, 29.99 , 100 , 22];
let preçosComDesconto = preços.map((preços) => preços *0.8)

console.log(preçosComDesconto)