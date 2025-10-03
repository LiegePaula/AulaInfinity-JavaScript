/* Atividade 02
Crie uma função chamada saudarUsuario que receba um parâmetro chamado nome.

A função deve exibir no console uma mensagem de saudação personalizada, como "Olá, [nome]!".

Chame a função três vezes, passando nomes diferentes como argumento.

Objetivo:
Praticar a criação de funções que recebem parâmetros. */

function saudarUsuario(nome) {
    let mensagem = (`Olá ${nome}`)
    return mensagem
}

console.log(saudarUsuario('Liege'))
console.log(saudarUsuario('Ana'))
console.log(saudarUsuario('Rafael'))