const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    desselecionarBotao();

    desselecionarPersonagem();

    botao.classList.add("selecionado");

    personagens[indice].classList.add("padrao");
  });
});

function desselecionarPersonagem() {
  const personagemSelecionado = document.querySelector(".personagem.padrao");
  personagemSelecionado.classList.remove("padrao");
}

function desselecionarBotao() {
  const botaoSelecionado = document.querySelector(".botao.selecionado");
  botaoSelecionado.classList.remove("selecionado");
}
