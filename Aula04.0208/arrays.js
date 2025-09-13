let cadastros = ['Bruno', 'Arthur', 'Gabriel', 'Lucas', 'Amanda', 'Bárbara']



console.log(cadastros.length)
console.log(cadastros[cadastros.length -1])

console.log(cadastros[0])

// let nome = 'Geoavani'
// console.log(nome[0])

// Propriedas de Array:

//array.length

console.log(cadastros.length)// Retornar o valor da extensão do array (númerico)

//array.push
//Adiciona um ou mais valores AO FINAL do array:

cadastros.push('Diogo', 'Roberta')

console.log(cadastros)

//Array.pop 
//Remove um valor do FINAL DO ARRAY.

let ultimo = cadastros.pop()

console.log(cadastros)

//Array.shift
//Remove um valor no inicio da lista

let primeiro=cadastros.shift()

console.log(primeiro)

console.log(cadastros)

//array.unshift
//Adicona um ou mais valore no inicio do array

let retorno = cadastros.unshift('Maria','João ')

console.log(cadastros)


//array.splice
// ???

let frutas = ['Maça', 'Pera', 'Banana', 'Uva']
cadastros.splice(1,1, 'Abobora', 'Corneto' , 'Sábado')

console.log(frutas)