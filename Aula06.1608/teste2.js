
function filtrarProdutos(lista) {
  return lista.filter(produto => 
    produto.toLowerCase().includes("q")
  );
}

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

const filtrados = filtrarProdutos(produtos);

console.log(filtrados);
