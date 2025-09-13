// 5 - Dado o array de preços abaixo, faça um programa que crie um novo array utilizando o filter, onde ele deve trazer somente 
// os preços menores que 100.
// const precos = [12, 45, 76, 34, 65, 87, 88, 12, 344, 200, 445]

// const precosMenores100 = precos.filter((i) => i < 100)

// console.log(...precosMenores100)


const precos = [12, 45, 76, 34, 65, 87, 88, 12, 344, 200, 445]

const precosMenores100 = precos.filter((preco) => preco < 100)

console.log(...precosMenores100)

