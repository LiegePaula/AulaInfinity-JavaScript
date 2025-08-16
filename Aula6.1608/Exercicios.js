// EXERCÍCIOS DE FIXAÇÃO:

// link https://drive.google.com/drive/folders/1xXlXpaHXz2mVyvc4XztVouP0H3S5Ocqk?usp=sharing

//O conceito:

//Funções são blocos de código que podem ser executado de forma modular.
//Elas auxiliam a não repetirmos código e funcionam como caixa de ferramentas para problemas que às vezes encontramos de forma recorrente
// no código. Ex: Carrinho de compras


//Nesses primeiros exercícios nem conversaremos sobre funções, o objetivo deles é "entender a dor" primeiro.


// Exercícios:


// Para melhor organização recomenda-se criarem arquivos separados para cada exercícios;
// A nomeação padrão dos arquivos é: "Ex01" para o primeiro e assim por diante;

// 1 - Crie um programa que exibe a mensagem "Olá, Bruno!"

function saudacao(nome) {
    let mensagem = `Olá, ${nome}!`
    return mensagem;
}
console.log(saudacao('Bruno'))


// 2 - Crie um programa que exiba a mensagem "Olá, Amanda!"

function saudacao(nome) {
    let mensagem = `Olá, ${nome}!`
    return mensagem;
}

console.log(saudacao('Amanda'))

// 3 - Crie um programa que exiba a mesma mensagem porém com o seu nome.

function saudacao(nome) {
    let mensagem = `Olá, ${nome}!`
    return mensagem;
}
console.log(saudacao('Liege'))



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

// 4 - Crie um programa que filtra a lista produtos pela letra "a"

function filtrarPorLetras(produtos, letra) {
    let filtro = produtos.filter(i => i.toLowerCase().includes(`${letra}`))
    return filtro
}



console.log(filtrarPorLetras(produtos, 'a'));

// 5 - Crie um programa que filtra a lista produtos pela letra "e"

function filtrarPorLetras(produtos, letra) {
    let filtro = produtos.filter(i => i.toLowerCase().includes(`${letra}`))
    return filtro
}



console.log(filtrarPorLetras(produtos, 'e'));









