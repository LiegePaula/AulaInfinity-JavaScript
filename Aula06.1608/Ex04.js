

// 4 - Crie um programa que filtra a lista produtos pela letra "a"

const produtos = [
    "Café",
    "Arroz",
    "Feijão",
    "Azeite de Oliva",
    "Pão",
    "Leite",
    "Queijo",
    "Manteiga",
    "Macarrão",
    "Chocolate"
];

function filtrarPorLetras(produtos, letra) {
    let filtro = produtos.filter(i => i.toLowerCase().includes(letra))
    return filtro
}



console.log(filtrarPorLetras(produtos, 'c'));
