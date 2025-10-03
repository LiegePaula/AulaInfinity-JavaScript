/* Crie uma pequena aplicação em JavaScript que analise um conjunto de dados utilizando métodos auxiliares de
arrays (forEach(), map(), filter(), reduce(), some(), find(), every()). O projeto deve incluir operações como filtragem
de dados, transformação de informações e cálculo de estatísticas.

Análise de Dados: Utilize métodos auxiliares de arrays para:
Filtrar itens que atendem a certos critérios.
Transformar dados para facilitar a análise (ex.: calcular o preço com desconto).
Somar valores ou calcular médias utilizando reduce().
Verificar condições gerais ou específicas com some(), every(), ou find().

Uso de IA: Durante o desenvolvimento, utilize uma ferramenta de inteligência artificial para:
Solicitar exemplos e explicações sobre os métodos de arrays.
Obter ajuda para depurar e otimizar o código.
Buscar ideias para aprimorar a funcionalidade e eficiência do projeto. */

// Mini aplicação de Análise de Dados com métodos de arrays

let produtos = [
    { nome: "Notebook", preco: 3500, estoque: true },
    { nome: "Mouse", preco: 80, estoque: true },
    { nome: "Teclado", preco: 150, estoque: false },
    { nome: "Monitor", preco: 1200, estoque: true },
    { nome: "Headset", preco: 200, estoque: false },
    { nome: "Cadeira Gamer", preco: 900, estoque: true }
];

// 1) forEach() → Listar todos os produtos
console.log("=== Lista de Produtos ===");
produtos.forEach(p => console.log(`${p.nome} - R$${p.preco}`));

// 2) filter() → Filtrar produtos em estoque
let emEstoque = produtos.filter(p => p.estoque);
console.log("\nProdutos em estoque:", emEstoque);

// 3) map() → Calcular preço com desconto de 10%
let comDesconto = produtos.map(p => {
    return { ...p, precoComDesconto: (p.preco * 0.9).toFixed(2) };
});
console.log("\nProdutos com desconto de 10%:", comDesconto);

// 4) reduce() → Calcular valor total dos produtos
let valorTotal = produtos.reduce((soma, p) => soma + p.preco, 0);
console.log("\nValor total dos produtos:", valorTotal);

// 5) some() → Verificar se existe algum produto barato (< R$100)
let existeBarato = produtos.some(p => p.preco < 100);
console.log("\nExiste produto mais barato que R$100?", existeBarato);

// 6) find() → Encontrar o primeiro produto fora de estoque
let foraDeEstoque = produtos.find(p => !p.estoque);
console.log("\nPrimeiro produto fora de estoque:", foraDeEstoque);

// 7) every() → Verificar se todos os produtos custam menos de R$5000
let todosMenos5000 = produtos.every(p => p.preco < 5000);
console.log("\nTodos os produtos custam menos de R$5000?", todosMenos5000);
