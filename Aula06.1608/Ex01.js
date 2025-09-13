// 1 - Crie um programa que exibe a mensagem "Olá, Bruno!"

function saudacao(nome) {
    let mensagem = `Olá, ${nome}!`
    return mensagem;
}
console.log(saudacao('Bruno'))

function chamafuncao(){
    let mensagem = console.log('Olá, Bruno!')
}
chamafuncao()