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