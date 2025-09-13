// 8 - Dado o array de nomes, você deve filtrar (filter) todos os nomes que contém "joão" (ignore se é maiusculo ou minusculo), 
// e depois crie um novo array onde todos os nomes devem estar em maiúsculo (map).
const nomes = [
    "Davi",
    "Guilherme",
    "João Pedro",
    "João Guilherme",
    "Maria",
    "Carlos JOÃO",
    "joão",
    "jOÃo Victor",
    "Victor",
    "Fernanda",
    "Lara",
    "Thays"
]

// const nomesJoao = (nomes.filter((nomes) => nomes.toUpperCase().includes('JOÃO')))
// // const nomesJoao = (nomes.filter((nomes) => nomes.toLowerCase().includes('joão')))
// console.log(nomesJoao)

// const nomesJoaoMaiusculo = nomesJoao.map((nomesJoao) => nomesJoao.toUpperCase())
// console.log(nomesJoaoMaiusculo)


// let nomes = ['bruno', 'julio', 'rafael', 'laura', 'maria', 'carlos']
// let nomesMaiusculo = nomes.map((nomes) => nomes.toUpperCase())

// console.log(nomesMaiusculo)

const todosChamadosJoao = nomes
    .filter((nomes) => nomes.toUpperCase().includes('JOÃO'))
    .map((nomes) => nomes.toUpperCase())

console.log(todosChamadosJoao)