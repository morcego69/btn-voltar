const botoesProximo = document.querySelectorAll(".btn-proximo");

botoesProximo.forEach(botao => {
    botao.addEventListener("click", () => {
        document.querySelector(".ativo").classList.remove("ativo");

        const proximoPasso = botao.getAttribute("data-proximo");
        document.getElementById(`passo-${proximoPasso}`).classList.add("ativo");
    });
});

const botoesVoltar = document.querySelectorAll(".btn-voltar");

botoesVoltar.forEach(botao => {
    botao.addEventListener("click", () => {
        document.querySelector(".ativo").classList.remove("ativo");

        const passoAnterior = botao.getAttribute("data-voltar");
        document.getElementById(`passo-${passoAnterior}`).classList.add("ativo");
    });
});
