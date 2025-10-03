/* Atividade 05
Crie dois objetos chamados representando
dois carros com as seguintes propriedades:

marca: string com a marca do carro.
modelo: string com o modelo do carro.
ano: número representando o ano de fabricação.

Em seguida:
Crie um novo objeto que combine as propriedades
dos dois objetos usando o spread operator.
Exiba o novo objeto no console.

Objetivo:
Praticar o uso do spread operator para combinar objetos.. */

let carro1 = {
    marca: 'fiat',
    modelo: 'siena',
    ano: 2020
}

let carro2 = {
    marca: 'WV',
    modelo: 'Tcross',
    ano: 2021
}

let carroCombinado = {...carro1, ...carro2}
console.log('Carro Combinado:', carroCombinado)

let carroCombinado2 = { carro1: { ...carro1 }, carro2: { ...carro2 } };
console.log('Carro combinados 2', carroCombinado2)