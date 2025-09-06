//Funcoes (Revisão)
//Uma função é uma ação onde dós definimos entrada, processamento e saída.

//  Assinatura da Função
//  function <nomeFunção> (<parametros>...) {
//  <codigo da função>
//  }

function mostrarSaudacao(nome) {
    console.log(`olá ${nome}`)
}
function mostrarSaudacao(nome, sobrenome) {
    console.log(`olá ${nome} ${sobrenome}`)
}

// Os parametros definidos na assinatura, precisam ser infomados caso sejam obrigatórios
mostrarSaudacao('Alessandra')
mostrarSaudacao('Usuario', 'Infinity')

//Retorno
//Ao retornar um valor em uma função, esse valor vai substiruir
function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura)
    return imc
}
// Armazena o retorno da função em uma variavel
const variavel = calcularIMC(75, 1.71)
console.log(variavel)

//Passando o retorno da função como parametro para outra função
console.log(calcularIMC(85, 1.67))