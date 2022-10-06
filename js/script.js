import { Jogador } from "../js/Jogador.js";

let barraProgresso = document.getElementById('barra-progresso');
let menu1 = document.getElementById('menu1');
let tela = document.getElementById('tela');
let painel1 = document.getElementById('painel1');
let painel2 = document.getElementById('painel2');
let botaoComecar = document.getElementById('botao1');
let botaoConcluir = document.getElementById('botao2');
let botaoTeste = document.getElementById('botao3');
var nomeJogador = document.getElementById('player');
var levelJogador = document.getElementById('level'); 

var jogador = new Jogador("novo"); 

jogador = JSON.parse(localStorage.jogador);

var progresso = jogador._progresso;

var condicao = jogador._condicao;


botaoComecar.onclick = comecar;

botaoTeste.onclick = concluirQuest;

botaoConcluir.onclick = concluirQuest;

console.log(jogador);

nomeJogador.innerText = jogador._nome;
levelJogador.innerText = jogador._level;

var progresso = jogador._progresso;

var condicao = jogador._condicao;

console.log("Condição: " + condicao, "Progresso: " + progresso);

function alerta() {

    alert("Caso recuse seu nível não subirá!");

}

function comecar() {

    voltarTela();

    painel2.innerHTML = '<button id="botao2">Concluir</button>'

}

function concluirQuest() { 
    console.log("Executou");
    console.log(jogador);
    trocarTela();
    
    painel1.innerHTML = '<button id="botao1"">Começar</button>'
    
    jogador.calculaXP(1);
    
    levelJogador.innerText = jogador._level;
    atualizaBarra(jogador._progresso);

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

function atualizaBarra(p) {

    barraProgresso.style.backgroundImage = `linear-gradient(to right, red, red ${p}%, white ${p}% `;

    if (p > 100) {

        barraProgresso.style.backgroundImage = `linear-gradient(to right, red, red ${0}%, white ${0}%`;

    }
}