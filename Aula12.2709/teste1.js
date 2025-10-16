// Recupera as notas do Local Storage (ou cria uma lista vazia)
function obterNotas() {
  const notasSalvas = localStorage.getItem("notas");
  if (notasSalvas) {
    return notasSalvas.split(","); // separa as notas por vírgula
  }
  return [];
}

// Salva as notas no Local Storage
function salvarNotas(notas) {
  localStorage.setItem("notas", notas.join(",")); // junta as notas em uma única string
}

// Mostra as notas na tela
function exibirNotas() {
  const lista = document.getElementById("listaNotas");
  lista.innerHTML = "";

  const notas = obterNotas();

  notas.forEach((titulo, index) => {
    const li = document.createElement("li");
    li.textContent = titulo;

    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    btnRemover.classList.add("remover");
    btnRemover.onclick = () => removerNota(index);

    li.appendChild(btnRemover);
    lista.appendChild(li);
  });
}

// Adiciona uma nova nota
function adicionarNota() {
  const input = document.getElementById("tituloNota");
  const titulo = input.value.trim();

  if (titulo === "") {
    alert("Digite um título para a nota!");
    return;
  }

  const notas = obterNotas();

  // Verifica se já existe uma nota com o mesmo título
  if (notas.includes(titulo)) {
    alert("Essa nota já existe!");
    return;
  }

  notas.push(titulo);
  salvarNotas(notas);
  input.value = "";
  exibirNotas();
}

// Remove uma nota
function removerNota(index) {
  const notas = obterNotas();
  notas.splice(index, 1);
  salvarNotas(notas);
  exibirNotas();
}

// Evento do botão
document.getElementById("btnAdicionar").addEventListener("click", adicionarNota);

// Carrega as notas ao abrir a página
window.onload = exibirNotas;
