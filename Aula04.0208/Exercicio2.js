// 2 - Crie um algoritmo que lê uma palavra e imprime as letras separadamente e cada letra em caixa alta (maiúscula)

let palavra = "banana"

for(let i = 0; i < palavra.length; i +=1) {
    console.log(palavra[i].toUpperCase())
}

let nome = "Rodrigo"

let nomezao = ''

for(let i = 0; i < nome.length; i +=1) {
    nomezao = nomezao + nome[i].toUpperCase()
    
}
console.log(nomezao)

let nome1 = 'Bruno'
for(let letra of nome1){
    console.log(letra)
}
