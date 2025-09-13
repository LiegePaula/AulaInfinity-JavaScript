// Array para armazenar as tarefas
let tarefas = [];

// Função para exibir o menu
function mostrarMenu() {
    return prompt(
        "Gerenciador de Tarefas:\n" +
        "1 - Adicionar Tarefa\n" +
        "2 - Listar Tarefas\n" +
        "3 - Remover Tarefa\n" +
        "4 - Concluir Tarefa\n" +
        "5 - Sair\n" +
        "Escolha uma opção:"
    );
}

// Função para adicionar uma tarefa
function adicionarTarefa() {
    let tarefa = prompt("Digite o nome da tarefa:");
    if (tarefa) {
        tarefas.push(tarefa);
        alert(`Tarefa "${tarefa}" adicionada!`);
    } else {
        alert("Nenhuma tarefa adicionada.");
    }
}

// Função para listar tarefas
function listarTarefas() {
    if (tarefas.length === 0) {
        alert("Nenhuma tarefa na lista.");
        return;
    }
    let lista = "Tarefas:\n";
    for (let i = 0; i < tarefas.length; i++) {
        lista += `${i} - ${tarefas[i]}\n`;
    }
    alert(lista);
}

// Função para remover tarefa
function removerTarefa() {
    listarTarefas();
    let indice = prompt("Digite o índice da tarefa que deseja remover:");
    indice = Number(indice);
    if (!isNaN(indice) && indice >= 0 && indice < tarefas.length) {
        let removida = tarefas.splice(indice, 1);
        alert(`Tarefa "${removida}" removida!`);
    } else {
        alert("Índice inválido.");
    }
}

// Função para concluir tarefa
function concluirTarefa() {
    listarTarefas();
    let indice = prompt("Digite o índice da tarefa que deseja concluir:");
    indice = Number(indice);
    if (!isNaN(indice) && indice >= 0 && indice < tarefas.length) {
        if (!tarefas[indice].startsWith("✅")) {
            tarefas[indice] = "✅ " + tarefas[indice];
            alert(`Tarefa "${tarefas[indice]}" concluída!`);
        } else {
            alert("Essa tarefa já foi concluída.");
        }
    } else {
        alert("Índice inválido.");
    }
}

// Loop principal
while (true) {
    let opcao = mostrarMenu();

    if (opcao === "1") {
        adicionarTarefa();
    } else if (opcao === "2") {
        listarTarefas();
    } else if (opcao === "3") {
        removerTarefa();
    } else if (opcao === "4") {
        concluirTarefa();
    } else if (opcao === "5") {
        alert("Saindo do gerenciador de tarefas...");
        break;
    } else {
        alert("Opção inválida. Digite um número de 1 a 5.");
    }
}
