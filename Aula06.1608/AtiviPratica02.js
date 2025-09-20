/* Atividade 02
Crie uma função chamada calcularDesconto que receba dois parâmetros: preco e desconto.
A função deve calcular o preço final do produto após aplicar o desconto e retornar esse valor.
Chame a função com diferentes valores e exiba o resultado no console.

Objetivo:
Desenvolver a compreensão de funções com múltiplos parâmetros em JavaScript, praticando
cálculos matemáticos simples e o retorno de valores. */

function calcularDesconto(preco, desconto) {
    let valorDesconto = preco * (desconto/100);
    let precoFinal = preco - valorDesconto;
    return precoFinal
}
console.log(calcularDesconto(100,10))
console.log(calcularDesconto(100,50))
console.log(calcularDesconto(80,5))