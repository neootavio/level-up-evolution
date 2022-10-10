import { Jogador } from "../js/Jogador.js";

let barraProgresso = document.getElementById('barra-progresso');
var nomeJogador = document.getElementById('player');
var levelJogador = document.getElementById('level');
let botao2 = document.getElementById('botao2');
let botao4 = document.getElementById('botao4');
let botao3 = document.getElementById('botao3');
let botao5 = document.getElementById('botao5');


botao2.onclick = concluir;

var jogador1 = new Jogador("nome");

jogador1._nome = localStorage.nome;
jogador1._level = parseInt(localStorage.level);
jogador1._pontosXP = parseInt(localStorage.pontosXP);
jogador1._condicao = parseInt(localStorage.condicao);
jogador1._progresso = parseInt(localStorage.progresso);
jogador1._tipoSanguineo = localStorage.tipoSanguineo;
jogador1._altura = localStorage.altura;
jogador1._peso = localStorage.peso;
jogador1._idade = parseInt(localStorage.idade);



nomeJogador.innerText = jogador1.nome;
levelJogador.innerText = jogador1.level;

//botao3.onclick = concluir;

//botao4.onclick = preencher;

//botao5.onclick = limpar;


function concluir() {

    jogador1.ganhaXP(1);
    console.log(`Pontos XP: ${jogador1._pontosXP}`);


    //manipulação do DOM
    level.innerText = jogador1._level;

    //atualização do localStorage
    localStorage.pontosXP = jogador1._pontosXP;
    localStorage.level = jogador1._level;
    localStorage.progresso = jogador1._progresso;
    localStorage.condicao = jogador1._condicao;

    //atualiza a barra
    atualizaBarra(1);
}


function atualizaBarra(p) {

    if(jogador1._level == 1 ){

        calculaProgresso(jogador1._xpNivel, 4);

    } else 

    if (jogador1._level <= 5) {

        calculaProgresso(jogador1._xpNivel, 4);


    } else if (jogador1._level <= 10) {
        calculaProgresso(jogador1._xpNivel, 5);
    } else if (jogador1._level <= 30) {
        calculaProgresso(jogador1._xpNivel, 7);
    } else {
        calculaProgresso(jogador1._xpNivel, 21);
    }

    p = jogador1._progresso;

    barraProgresso.style.backgroundImage = `linear-gradient(to right, red, red ${p}%, white ${p}% `;

    if (p > 100) {

        barraProgresso.style.backgroundImage = `linear-gradient(to right, red, red ${0}%, white ${0}%`;

    }
}

function calculaProgresso(xpNivel, barra) {

    jogador1._progresso = (xpNivel/barra) * 100;
    return jogador1._progresso;

}

function preencher() {

    localStorage.nome = "Otávio";
    localStorage.level = 1;
    localStorage.tipoSanguineo = "O+";
    localStorage.altura = "1,73";
    localStorage.peso = 75 + "Kg";
    localStorage.idade = 38;
    localStorage.pontosXP = 0;
    localStorage.condicao = 4;
    localStorage.xpNivel = 0;
}

function limpar() {
    localStorage.clear();
}