let pessoa = {
    nome: 'Joao',
    idade: 30,
    profissao: 'Desenvolvedor'
};
console.log(pessoa);

let pessoa1 = { nome: 'Liege', idade: 42, profissao: 'Desenvolvedor'};
let {nome, idade} = pessoa1

console.log(nome);
console.log(idade)

function somar(...numeros) {
    return numeros.reduce((acc, num)=> acc + num, 0);

}
console.log(somar(1,2,3,4));

const pessoas = [
    {nome: 'Ana', idade: 25, profissao:'Engenheira'},
    {nome: 'Bia', idade: 24, profissao:'Veterinária'},
    {nome: 'Carol', idade: 25, profissao:'Diretora'},
];


const arr1 = [1,2,3];
const arr2 = [...arr1, 4,5];

const obj1 = {a:1, b: 2};
const obj2 = {...obj1, c:3};

console.log(arr2)
console.log(obj2)