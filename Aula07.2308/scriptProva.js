/* Crie um programa em JavaScript que gerencie uma lista de nomes utilizando diversos métodos auxiliares 
de arrays para realizar operações como adicionar, filtrar, encontrar e transformar os dados.

Requisitos do Projeto:
* Adicionar Nomes:
 - Permita ao usuário adicionar nomes à lista utilizando o método push().
 - Exiba a lista atualizada no console.

* Filtrar Nomes:
- Use o método filter() para criar uma nova lista contendo apenas os nomes que começam com uma letra específica 
fornecida pelo usuário.
 - Exiba os nomes filtrados no console.

* Buscar um Nome Específico:
- Use o método find() para localizar o primeiro nome na lista que corresponde exatamente a um valor fornecido pelo 
usuário.
 - Exiba o resultado no console ou uma mensagem informando que o nome não foi encontrado.

* Transformar Nomes:
- Utilize o método map() para transformar todos os nomes da lista em letras maiúsculas.
 - Exiba a nova lista no console.

* Verificar Condições:
 - Use o método every() para verificar se todos os nomes têm mais de três caracteres.
 - Exiba a resposta (true ou false) no console.

* Interação Contínua: 
 - Implemente um loop while para permitir que o usuário escolha realizar várias operações consecutivas (adicionar, 
 filtrar, buscar, 
    transformar ou verificar). */

let nomes = [];
let opcao;

while (true) {
    opcao = prompt(
        "=== Gerenciador de Nomes ===\n" +
        "1 - Adicionar nome\n" +
        "2 - Filtrar nomes por letra inicial\n" +
        "3 - Buscar nome específico\n" +
        "4 - Transformar nomes em maiúsculas\n" +
        "5 - Verificar se todos os nomes têm mais de 3 caracteres\n" +
        "6 - Sair\n\n" +
        "Escolha uma opção:"
    );

    if (opcao === "1") {
        let nome = prompt("Digite um nome para adicionar:");
        nomes.push(nome);
        console.log("Lista atualizada:", nomes);

    } else if (opcao === "2") {
        let letra = prompt("Digite a letra inicial para filtrar:").toLowerCase();
        let filtrados = nomes.filter(n => n.toLowerCase().startsWith(letra));
        console.log("Nomes filtrados:", filtrados);

    } else if (opcao === "3") {
        let busca = prompt("Digite o nome que deseja buscar:");
        let encontrado = nomes.find(n => n.toLowerCase() === busca.toLowerCase());
        if (encontrado) {
            console.log("Nome encontrado:", encontrado);
        } else {
            console.log("Nome não encontrado.");
        }

    } else if (opcao === "4") {
        let maiusculos = nomes.map(n => n.toUpperCase());
        console.log("Nomes em maiúsculas:", maiusculos);

    } else if (opcao === "5") {
        let todosMaiorQueTres = nomes.every(n => n.length > 3);
        console.log("Todos os nomes têm mais de 3 caracteres?", todosMaiorQueTres);

    } else if (opcao === "6") {
        console.log("Encerrando o programa...");
        break;

    } else {
        alert("Opção inválida! Tente novamente.");
    }
}
