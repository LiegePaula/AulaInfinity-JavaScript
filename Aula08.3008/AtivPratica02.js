/* Atividade 02
Crie um objeto chamado pessoa com as
propriedades nome, idade, e profissao.

Objetivo:
Praticar a manipulação de objetos, alterando propriedades existentes,
adicionando novas propriedades, e exibindo o objeto atualizado.
Em seguida:
Altere a propriedade profissao para um novo valor.
Adicione uma nova propriedade chamada cidade ao objeto.
Exiba no console o objeto completo após as modificações. */

let pessoa = {
    nome: 'Liege',
    idade: 43,
    profissao: 'Bancaria'
};
console.log(pessoa);

pessoa.profissao = 'nutricionista';
pessoa.cidade = 'Belo Horizonte';

console.log(pessoa);

