
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let listaCompras = [];

function mostrarMenu() {
    console.log("\n=== Lista de Compras ===");
    console.log("1 - Adicionar item");
    console.log("2 - Remover item");
    console.log("3 - Exibir lista");
    console.log("4 - Atualizar item");
    console.log("5 - Sair");
    rl.question("Escolha uma opção: ", opcao => {
        if (opcao === "1") {
            adicionarItem();
        } else if (opcao === "2") {
            removerItem();
        } else if (opcao === "3") {
            exibirLista();
            mostrarMenu();
        } else if (opcao === "4") {
            atualizarItem();
        } else if (opcao === "5") {
            console.log("Saindo do programa. Até logo!");
            rl.close();
        } else {
            console.log("Opção inválida!");
            mostrarMenu();
        }
    });
}

function adicionarItem() {
    rl.question("Digite o item que deseja adicionar: ", item => {
        listaCompras.push(item);
        console.log(`"${item}" foi adicionado à lista.`);
        mostrarMenu();
    });
}

function removerItem() {
    rl.question("Digite o índice do item que deseja remover: ", indice => {
        indice = parseInt(indice);
        if (indice >= 0 && indice < listaCompras.length) {
            let removido = listaCompras.splice(indice, 1);
            console.log(`"${removido}" foi removido da lista.`);
        } else {
            console.log("Índice inválido!");
        }
        mostrarMenu();
    });
}

function exibirLista() {
    console.log("\n=== Sua Lista de Compras ===");
    if (listaCompras.length === 0) {
        console.log("(lista vazia)");
    } else {
        for (let [i, item] of listaCompras.entries()) {
            console.log(`${i} - ${item}`);
        }
    }
}

function atualizarItem() {
    rl.question("Digite o índice do item que deseja atualizar: ", indice => {
        indice = parseInt(indice);
        if (indice >= 0 && indice < listaCompras.length) {
            rl.question(`Digite o novo valor para "${listaCompras[indice]}": `, novoValor => {
                listaCompras[indice] = novoValor;
                console.log(`Item atualizado para "${novoValor}".`);
                mostrarMenu();
            });
        } else {
            console.log("Índice inválido!");
            mostrarMenu();
        }
    });
}


mostrarMenu();
