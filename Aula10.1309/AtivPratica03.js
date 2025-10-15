// Seleciona todas as divs com a classe 'box'
const boxes = document.querySelectorAll('.box');


// Altera a cor de fundo de cada div
const cores = ['#ffcccc', '#ccffcc', '#ccccff'];
boxes.forEach((box, index) => {
box.style.backgroundColor = cores[index];
});
