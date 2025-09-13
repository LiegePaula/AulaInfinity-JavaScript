// 2 - Crie um programa que exiba a mensagem "Olá, Amanda!"

function saudacao(nome) {
    let mensagem = `Olá, ${nome}!`
    return mensagem;
}
console.log(saudacao('Amanda'))

function chamafuncao(){
    let mensagem = console.log('Olá, Amanda!')
}
chamafuncao()