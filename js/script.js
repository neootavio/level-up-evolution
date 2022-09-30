let menu1 = document.getElementById('menu1');

let tela = document.getElementById('tela');

let painel1 = document.getElementById('painel1');

function alerta() {

    alert("Caso recuse seu nível não subirá!");

}

function comecar() {

    voltarTela();

    painel1.innerHTML = '<button id="botao2" onclick="concluir()">Concluir</button>'

}

function concluir() {

    trocarTela();

    painel1.innerHTML = '<button id="botao1" onclick="comecar()">Começar</button>'

}

function trocarTela() {
    tela.classList.add('esconder');

    tela.classList.remove('mostrar');

    menu1.classList.add('escondider');

    menu1.classList.remove('mostrar');
}

function voltarTela() {
    tela.classList.remove('esconder');

    tela.classList.add('mostrar');

    menu1.classList.remove('escondider');

    menu1.classList.add('mostrar');
}
