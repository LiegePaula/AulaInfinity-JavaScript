// 3 - Faça um programa onde você declare um array com 5 nomes, depois utilize a função "map" para criar um novo array onde todos 
// os nomes devem estar em maiúsculo (.toUpperCase).

let nomes = ['bruno', 'julio', 'rafael', 'laura', 'maria', 'carlos']
let nomesMaiusculo = nomes.map((nomes) => nomes.toUpperCase())

console.log(nomesMaiusculo)