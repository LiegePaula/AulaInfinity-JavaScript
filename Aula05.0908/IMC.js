// Solicitar peso e altura do usuário
let peso = parseFloat(prompt("Digite seu peso (em kg):"));
let altura = parseFloat(prompt("Digite sua altura (em metros):"));

// Calcular o IMC
let imc = peso / (altura * altura);

// Exibir o IMC e a categoria
console.log("Seu IMC é: " + imc.toFixed(2));

if (imc < 18.5) {
    console.log("Você está abaixo do peso.");
} else if (imc >= 18.5 && imc < 25) {
    console.log("Você está com o peso normal.");
} else if (imc >= 25 && imc < 30) {
    console.log("Você está com sobrepeso.");
} else if (imc >= 30 && imc < 35) {
    console.log("Você está com obesidade grau 1.");
} else if (imc >= 35 && imc < 40) {
    console.log("Você está com obesidade grau 2.");
} else {
    console.log("Você está com obesidade grau 3 (mórbida).");
}