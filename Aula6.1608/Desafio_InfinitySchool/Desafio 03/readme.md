# Desafio 2 - Interface de Agendamento de Viagens

## Descrição

Uma interface de agendamento de viagens recebe informações dos usuários em diferentes formatos. O objetivo deste desafio é validar esses dados de entrada conforme critérios específicos.

### Formato da entrada

As informações são recebidas como uma lista, por exemplo:

```js
info = ["Lucas", "28", "Chile", true, "30/07/2026"]
Critérios de Validação
Nome (info[0])
Não deve conter caracteres numéricos.

Idade (info[1])
Deve representar um número (pode ser string numérica ou number).

Destino (info[2])
Deve ser composto por apenas uma palavra (sem espaços e sem números).

Confirmação (info[3])
Deve ser um valor booleano (true ou false), não uma string.

Data da Viagem (info[4])
Deve representar uma data futura (em relação à data atual).



