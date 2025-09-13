Sejam Bem Vindos a Aula 07 de JS
//Bom dia!!

Repositório Aula de Hoje:
https://github.com/Davi-Classes/JAVASCRIPT2025-DFS707/tree/main/Aula%2007
------------------------------------------------------------------------------------------------------------
revisao1.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // Revisão Funções
        // Uma função é uma ação

        // Mostra um prompt para o usuário e espera ele inserir uma entrada.
        // const texto = prompt('Insira um texto: ') 

        // Mostra um texto no console.
        // console.log(texto)

        // Definir Funções

        // Boas Práticas:
        // 1. Definir função com CamelCase (minhaFuncao)
        // 2. Não utilizar caracteres especiais
        // 3. Utilizar verbos

        /*
        function <nomeFuncao>(parametros...) {
            <blocoDeCodigo>...
        }
        */

        function mostrarSaudacao(nome) {
            alert(`Olá ${nome}, seja bem vindo.`)
        }

        mostrarSaudacao('Lara')
        mostrarSaudacao('Guilherme')
    </script>
</body>
</html>



------------------------------------------------------------------------------------------------------------

revisao2.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // Funções com Retornos
        const produtos = [
            "Café",
            "Arroz",
            "Feijão",
            "Azeite de Oliva",
            "Pão",
            "Leite",
            "Queijo",
            "Manteiga",
            "Macarrão",
            "Chocolate"
        ];

        // Funcao com return (Específica, filtra somente pela letra A)
        function filtrarProdutosPelaLetraA(produtos) {
            const produtosFiltrados = []

            for (const produto of produtos) {
                if (produto.includes('a')) {
                    produtosFiltrados.push(produto)
                }
            }

            return produtosFiltrados
        }

        const filtro = filtrarProdutosPelaLetraA(produtos)
        console.log(produtos)
        console.log(filtro)

        function filtrarProdutos(produtos, filtro) {
            const produtosFiltrados = []

            for (const produto of produtos) {
                if (produto.includes(filtro)) {
                    produtosFiltrados.push(produto)
                }
            }

            return produtosFiltrados
        }

        console.log(produtos)
        console.log(filtrarProdutos(produtos, 'Ma'))
 
    </script>
</body>
</html>

-------------------------------------------------------------------------------------------------------------------------------------
revisao3.html


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // Funções com Retornos
        const produtos = [
            "Café",
            "Arroz",
            "Feijão",
            "Azeite de Oliva",
            "Pão",
            "Leite",
            "Queijo",
            "Manteiga",
            "Macarrão",
            "Chocolate"
        ];


        // Funcao com return (Genérica, filtra pelo que o usuário informar no parametro "filtro")
        function filtrarProdutos(produtos, filtro) {
            const produtosFiltrados = []

            for (const produto of produtos) {
                if (produto.includes(filtro)) {
                    produtosFiltrados.push(produto)
                }
            }

            return produtosFiltrados
        }

        console.log(produtos)
        console.log(filtrarProdutos(produtos, 'Ma'))
 
    </script>
</body>
</html>

----------------------------------------------------------------------------------------------------------------------------------------
arrow-functions.html


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // Arrow Functions

        // Definição Tradicional...
        // function soma(n1, n2) {
        //     return n1 + n2
        // }

        // Definição com Arrow Function
        // Sintaxe (Simplificada)
        // (parametros...) => <retorno>
        const soma = (n1, n2) => n1 + n2

        // Sintaxe (Função Completa)
        const multiplicar = (n1, n2) => {
            return n1 * n2
        }

        console.log(multiplicar(2, 5))

    </script>
</body>
</html>


----------------------------------------------------------------------------------------------------------------------------
callbacks.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // Callbacks
        // Uma callback é quando a gente passa uma função como parametro
        // para outra função executar.
        const produtos = [
            "Café",
            "Arroz",
            "Feijão",
            "Azeite de Oliva",
            "Pão",
            "Leite",
            "Queijo",
            "Manteiga",
            "Macarrão",
            "Chocolate"
        ];

        // For Convencional
        // for (const produto of produtos) {
        //     console.log(produto)
        // }

        // ForEach: Para cada Elemento do Array, Execute A Arrow Function
        // Passando no primeiro parametro o elemento corrente do array.
        produtos.forEach((produto) => console.log(produto))
    </script>
</body>
</html>


----------------------------------------------------------------------------------------------------------------------------
funcoes-agregadoras.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // Map
        // Aplicar um Aumento de 10%
        const precos = [40.9, 44.99, 20, 10, 1200]
        const precosCorrigidos = precos.map((preco) => preco * 1.1)

        // Com JS Puro na Mão
        // const precosCorrigidos = []

        // for (const preco of precos) {
        //     precosCorrigidos.push(preco * 1.1)
        // }

        // console.log(precos)
        // console.log(precosCorrigidos)

        // Filter
        const produtos = [
            "Café",
            "Arroz",
            "Feijão",
            "Azeite de Oliva",
            "Pão",
            "Leite",
            "Queijo",
            "Manteiga",
            "Macarrão",
            "Chocolate"
        ];
        const filtro = 'Ma'
        
        const precosFiltrados = precos.filter((preco) => preco < 45)
        const produtosFiltrados = produtos.filter((produto) => produto.includes(filtro))

        // Com JS Puro na Mão
        // const produtosFiltrados = []

        // for (const produto of produtos) {
        //     if (produto.includes(filtro)) {
        //         produtosFiltrados.push(produto)
        //     }
        // }

        console.log(produtos)
        console.log(produtosFiltrados)

        // Reduce (...)

    </script>
</body>
</html>