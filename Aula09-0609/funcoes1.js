// Funções (Revisão)
// Uma função é uma ação onde nós definimos entrada, processamento e saída

// Assinatura da Função
// function <nomeFunção>(<parametros>...) {
//      <codigo da funcao>
// }

/**
 * Mostra uma saudação no console para uma pessoa
 * @param {string} nome - Nome da pessoa
 * @param {string} sobrenome - Sobrenome da pessoa (Opcional)
 * @returns {void}
 */
function mostrarSaudacao(nome, sobrenome = "") {
  console.log(`Olá ${nome} ${sobrenome}`);
}

mostrarSaudacao("Alessandra");
mostrarSaudacao("Usuário", "Infinity");
