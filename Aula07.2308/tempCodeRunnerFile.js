
        let maiusculos = nomes.map(n => n.toUpperCase());
        console.log("Nomes em maiúsculas:", maiusculos);

    } else if (opcao === "5") {
        let todosMaiorQueTres = nomes.every(n => n.length > 3);
        console.log("Todos os nomes têm mais de 3 caracteres?", todosMaiorQueTres);

    } else if (opcao === "6") {
        console.log("Encerrando o programa...");
        break;

    } else {