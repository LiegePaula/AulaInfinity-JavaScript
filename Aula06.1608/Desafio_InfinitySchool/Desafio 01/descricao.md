# Desafio de Lógica - Investigação Criminal 🕵️‍♂️

## 🗓 Contexto

No dia **31/10/2022**, um crime ocorreu na cidade de **Jacareí (SP)**. Durante a investigação, o detetive **Confúcio** definiu **cinco perguntas-chave** para ajudar na resolução do caso.

## ❓ Perguntas da Investigação

1. Telefonou para a vítima?
2. Esteve no local do crime?
3. Mora próximo do local do crime?
4. Devia favores/dinheiro à vítima?
5. Já trabalhou com a vítima?

## 🎯 Objetivo do Projeto

Criar um **algoritmo interativo** que:

- Faça as 5 perguntas acima ao usuário.
- Receba as respostas (sim/não).
- Classifique a pessoa de acordo com o número de respostas **positivas**:

### 🧠 Lógica de Classificação

- **2 respostas positivas** → 🔸 *Suspeita*
- **3 ou 4 respostas positivas** → 🔸 *Cúmplice*
- **5 respostas positivas** → 🔴 *Assassino*
- **0 ou 1 resposta positiva** → 🟢 *Inocente*

## 💻 Tecnologias Sugeridas

- Linguagem: Python, JavaScript, C, Java... (livre escolha)
- Entrada de dados: Via terminal ou interface gráfica (opcional)

## 📦 Entregáveis

- Código-fonte com a lógica de perguntas e classificação
- Documentação simples explicando o funcionamento (opcional)
- Arquivo de exemplo com possíveis execuções (opcional)

## 🚀 Extras (opcional)

- Validar respostas (aceitar apenas "sim" ou "não")
- Tornar o sistema mais interativo
- Adicionar cores no terminal (para destaque nas classificações)

## ✅ Exemplo de Execução

```bash
Você telefonou para a vítima? (sim/não): sim
Esteve no local do crime? (sim/não): não
Mora próximo do local do crime? (sim/não): sim
Devia favores à vítima? (sim/não): não
Já trabalhou com a vítima? (sim/não): não

Classificação: SUSPEITA
