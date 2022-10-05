import { Jogador } from "../js/Jogador.js";

let barraProgresso = document.getElementById('barra-progresso');
let menu1 = document.getElementById('menu1');
let tela = document.getElementById('tela');
let painel1 = document.getElementById('painel1');
let botaoComecar = document.getElementById('botao1');
let botaoConcluir = document.getElementById('botao2');
let botao3 = document.getElementById('botao3');

botao3.onclick = concluirQuest;


botaoComecar.onclick = comecar;

const jogador = JSON.parse(localStorage.jogador);

console.log(jogador);

const nomeJogador = document.getElementById('player');
const levelJogador = document.getElementById('level'); 

nomeJogador.innerText = jogador._nome;
levelJogador.innerText = jogador._level;

var progresso = jogador._progresso;

var condicao = jogador._condicao;

console.log(condicao, progresso);

function alerta() {

    alert("Caso recuse seu nível não subirá!");

}

function comecar() {

    voltarTela();

    painel1.innerHTML = '<button id="botao2" onclick="concluirQuest()">Concluir</button>'

}


function trocarTela() {
    tela.classList.add('esconder');

    tela.classList.remove('mostrar');

    menu1.classList.add('esconder');

    menu1.classList.remove('mostrar');
}

function voltarTela() {
    tela.classList.remove('esconder');

    tela.classList.add('mostrar');

    menu1.classList.remove('esconder');

    menu1.classList.add('mostrar');
}

function concluirQuest() {

    trocarTela();

    painel1.innerHTML = '<button id="botao1" onclick="comecar()">Começar</button>'

    jogador.calculaXP(1);
    console.log(jogador);
    levelTela.innerText = "Level - " + jogador.level;
    atualizaBarra(jogador._progresso);


}

function atualizaBarra(p) {

    barraProgresso.style.backgroundImage = `linear-gradient(to right, red, red ${p}%, white ${p}% `;

    if (p > 100) {

        barraProgresso.style.backgroundImage = `linear-gradient(to right, red, red ${0}%, white ${0}%`;

    }
}