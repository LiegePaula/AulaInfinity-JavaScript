/* Atividade 05
Crie um script que utilize o método some() para verificar se um array
contém algum número negativo. O script deve exibir no console uma
mensagem indicando se há ou não números negativos no array.

Objetivo:
Praticar o uso do método some() para verificar se pelo menos um
elemento em um array atende a uma condição específica. */

const numeros = [1,-2,-3,5,-6,8,9,7]

// Usar some() para verificar se existe algum número negativo
let temNegativo = numeros.some(function(numeros) {
    return numeros < 0;
});

// Exibir resultado no console
if (temNegativo) {
    console.log("⚠️ O array contém pelo menos um número negativo.");
} else {
    console.log("✅ Não há números negativos no array.");
}
