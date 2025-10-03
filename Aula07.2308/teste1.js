let nomes = [];
let opcao;

while(true){
    opcao = input(
        "=== Gerenciador de Nomes ===\n" +
        "1 - Adicionar nome\n" +
        "2 - Filtrar nomes por letra inicial\n" +
        "3 - Buscar nome específico\n" +
        "4 - Transformar nomes em maiúsculas\n" +
        "5 - Verificar se todos os nomes têm mais de 3 caracteres\n" +
        "6 - Sair\n\n" +
        "Escolha uma opção:"
    )

    if(opcao === '1'){
        let nome = input('Digite um nome para adicionar:');
        nomes.push(nome);
        console.log('Lista atualizada:', nomes);

    } else if (opcao === '2'){
        let letra = input('Digite a letra inicial para filtar:').toLowerCase();
        let filtrados = nomes.filter(n => n.toLowerCase().startsWith(letra));
        console.log('Nomes filtrados:', filtrados);

    } else if (opcao === '3'){
        let busca = input('Digite o nome que deseja buscar:').toLowerCase();
        let encontrado = nomes.find(n => n.toLowerCase() === busca.toLowerCase());
        if(encontrado) {
            
            console.log('Nomes encontrado:', encontrado);
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