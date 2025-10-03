
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nomes = [];

function menu() {
    console.log("\n=== Gerenciador de Nomes ===");
    console.log("1 - Adicionar nome");
    console.log("2 - Filtrar nomes por letra inicial");
    console.log("3 - Buscar nome específico");
    console.log("4 - Transformar nomes em maiúsculas");
    console.log("5 - Verificar se todos os nomes têm mais de 3 caracteres");
    console.log("6 - Sair");

    rl.question("Escolha uma opção: ", (opcao) => {
        if (opcao === "1") {
            rl.question("Digite um nome: ", (nome) => {
                nomes.push(nome);
                console.log("Lista atualizada:", nomes);
                menu();
            });

        } else if (opcao === "2") {
            rl.question("Digite a letra inicial: ", (letra) => {
                let filtrados = nomes.filter(n => n.toLowerCase().startsWith(letra.toLowerCase()));
                console.log("Nomes filtrados:", filtrados);
                menu();
            });

        } else if (opcao === "3") {
            rl.question("Digite o nome que deseja buscar: ", (busca) => {
                let encontrado = nomes.find(n => n.toLowerCase() === busca.toLowerCase());
                console.log(encontrado ? "Nome encontrado: " + encontrado : "Nome não encontrado.");
                menu();
            });

        } else if (opcao === "4") {
            let maiusculos = nomes.map(n => n.toUpperCase());
            console.log("Nomes em maiúsculas:", maiusculos);
            menu();

        } else if (opcao === "5") {
            let todosMaiorQueTres = nomes.every(n => n.length > 3);
            console.log("Todos os nomes têm mais de 3 caracteres?", todosMaiorQueTres);
            menu();

        } else if (opcao === "6") {
            console.log("Encerrando...");
            rl.close();

        } else {
            console.log("Opção inválida!");
            menu();
        }
    });
}

menu();
