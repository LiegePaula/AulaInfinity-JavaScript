const array = [1, 2, 3, 4, 5]
console.log(array.length)

let frutas = ['maça', 'banana', 'laranja'];
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);

let animais = ['cachorro', 'gato', 'papagaio', 'tartaruga'];

console.log(animais[2]);

let fruta = ['maça', 'banana'];
fruta.push('laranja');
console.log(fruta)
let ultimafruta = fruta.pop();
console.log(fruta)

const frutas1 = ['maça', 'banana','laranja'];
const primeirafruta = frutas1.shift()
console.log(frutas1)

const frutas2 = [ 'banana','laranja'];
frutas2.unshift('maça')
console.log(frutas2)

const frutas3 = ['maça', 'banana', 'laranja'];
frutas3.splice(3 , 0, 'morango', 'uva');
console.log(frutas3)

const frutas01 = ['maça', 'banana']
const frutas02 = ['laranja', 'morango']
const todasFrutas = frutas01.concat(frutas02)
console.log(todasFrutas)

const numeros =[1,2,3,4,5]
numeros.reverse()
console.log(numeros)

const frutas03 = ['maça', 'banana', 'laranja']
const frutasstring = frutas03.join(',')
console.log(frutasstring)

const frutas04 = ['maça', 'banana', 'laranja', 'uva']
frutas04.sort()
console.log(frutas04)

const arr= [1,2,3,4,5]
console.log(arr.includes(3))
console.log(arr.includes(6))
console.log(arr.includes(2,1))

const numeros1 = [1,2,3,4,5]
for (let i = 0; i< numeros1.length; i++){
    console.log(numeros1[i])
}

const frutas05 = ['maça', 'banana', 'laranja']
for (const fruta of frutas05) {
    console.log(fruta)
}