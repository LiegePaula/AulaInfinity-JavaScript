
function obterNotas() {
  const notasSalvas = localStorage.getItem("notas");
  if (notasSalvas) {
    return notasSalvas.split(","); 
  }
  return [];
}


function salvarNotas(notas) {
  localStorage.setItem("notas", notas.join(",")); 
}


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


function adicionarNota() {
  const input = document.getElementById("tituloNota");
  const titulo = input.value.trim();

  if (titulo === "") {
    alert("Digite um título para a nota!");
    return;
  }

  const notas = obterNotas();

 
  if (notas.includes(titulo)) {
    alert("Essa nota já existe!");
    return;
  }

  notas.push(titulo);
  salvarNotas(notas);
  input.value = "";
  exibirNotas();
}


function removerNota(index) {
  const notas = obterNotas();
  notas.splice(index, 1);
  salvarNotas(notas);
  exibirNotas();
}


document.getElementById("btnAdicionar").addEventListener("click", adicionarNota);


window.onload = exibirNotas;
