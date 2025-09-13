// EXERCÍCIOS 2: CONDICIONAIS:

// Condicionais:


// 01 - Crie um algoritmo em que o usuário informe dois números (n1 e n2). Após, exiba na tela (terminal) qual deles é o maior.

let n1 = 10
let n2 = 20
if (n1 > n2){
    console.log(`${n1} é o maior`)
}
else{
    console.log(`${n2} é o maior`)
}


// 02 - Crie um algoritmo em que o usuário informe dois números (n1 e n2). Após, exiba na tela (terminal) qual deles é o menor.

n1 = 5
n2 = 20
if (n1 < n2){
    console.log(`${n1} é o menor`)
}
else{
    console.log(`${n2} é o menor`)
}

// 03 - Crie um algoritmo em que o usuário informe três números (n1, n2 e n3). Após, exiba na tela (terminal) qual deles é o maior

n1 = 25
n2 = 5
let n3 = 10
if (n1 > n2 && n1 > n3){
    console.log(`${n1} é o maior`)
}
else if(n2 > n1 && n2 > n3){
    console.log(`${n2} é o maior`)
}
else{
    console.log(`${n3} é o maior`)
}
// 06 - Crie um algoritmo em que o usuário informe três números (n1, n2 e n3). Após, exiba na tela (terminal) a ordem decrescente desses números.
n1 = 50
n2 = 70
n3 = 30
if (n1 > n2 && n2 > n3){
    console.log(`${n1}, ${n2}, ${n3}`)
}
else if (n1 > n3 && n3 > n2){
    console.log(`${n1}, ${n3}, ${n2}`)
}
else if (n2 > n1 && n1 > n3){
    console.log(`${n2}, ${n1}, ${n3}`)
}
else if (n2 > n3 && n3 > n1){
    console.log(`${n2}, ${n3}, ${n2}`)
}
else if (n3 > n1 && n1 > n2){
    console.log(`${n3}, ${n1}, ${n2}`)
}
else{
    console.log(`${n3}, ${n2}, ${n1}`)
}


// 07 - Crie um algoritmo em que o usuário informe sua idade. Após, exiba na tela (terminal) se o usuário é ou não maior de idade.

let idade = 16
if (idade >= 18) {
    console.log('Você é maior de idade');
}
else{
    console.log('Você é menor de idade');
}

// 08 - Crie um algoritmo em que o usuário informe seu gênero, sua altura e seu pese. Após, calcule e exiba na tela (terminal) o IMC do usuário.

let altura = 1.71
let genero = "feminino"
let peso = 72

let imc = peso/(altura*altura);

console.log(`Seu imc é ${imc}`)


// 09 - Crie um algoritmo em que o usuário informe um número qualquer. Após, informe se esse número é par ou ímpar.

n1 = 25
if(n1%2===0){
    console.log('O número é par')
}
else{
    console.log('O número é ímpar')
}

// 10 - Crie um algoritmo em que o usuário informe um número qualquer. Após, informe se esse número é múltiplo de 2.

n1 = 4
if(n1%2===0){
    console.log('O número é multiplo de 2')
}
else{
    console.log('O número não é multiplo de 2')
}


// 11 - Crie um algoritmo em que o usuário informe um número qualquer. Após, informe se esse número é múltiplo de 3.

n1 = 9
if(n1%3===0){
    console.log('O número é multiplo de 3')
}
else{
    console.log('O número não é multiplo de 3')
}
// 12 - Crie um algoritmo em que o usuário informe um número qualquer. Após, informe se esse número é múltiplo de 5.


n1 = 15
if(n1%5===0){
    console.log('O número é multiplo de 5')
}
else{
    console.log('O número não é multiplo de 5')
}

// Desafio: No dia 31/10/2022, aconteceu um crime na cidade de Jacareí (SP). Durante as investigações, o detetive Confúcio definiu cinco perguntas fundamentais
// para a elucidação do caso, sendo:
//
//   1. Telefonou para a vítima?
//   2. Esteve no local do crime?
//   3. Mora próximo do local do crime?
//   4. Devia favores/dinheiro à vítima?
//   5. Já trabalhou com a vítima?
//
// Para ajudar o detetive Confúcio na investigação, crie um algoritmo que faça as perguntas anteriores ao usuário e classifique se ele teve ou não participação
// no crime, considerando que: se a pessoa responder positivamente a 2 (duas) questões, ela deve ser classificada como "Suspeita". Se a pessoa responder
// positivamente entre 3 (três) e 4 (quatro) questões, classique como "Cúmplice". Caso todas as respostas sejam positivas, classifique o usuário como "Assassino".
// Caso contrário, ou seja, nenhuma das condições anteriores sejam atendidas, o usuário será classificado como "Inocente".
