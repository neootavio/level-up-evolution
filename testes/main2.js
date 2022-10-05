import { Jogador2 } from "./Jogador2.js";

let nomeTela = document.getElementById('nomeJogador');
let levelTela = document.getElementById('levelJogador');
let botaoConcluir = document.getElementById('botaoConcluir');
let barraProgresso = document.getElementById('barra-progresso');

let nome = document.getElementById('textoNome');

let botaoNome = document.getElementById('botaoNome');

const jogador = new Jogador2("novo");

var progresso = jogador._progresso;

var condicao = jogador._condicao;


botaoNome.onclick = cadastraJogador;

botaoConcluir.onclick = concluirQuest;

function cadastraJogador() {

    jogador.nome = nome.value;
    console.log(nome.value);

    nomeTela.innerText = nome.value;
    levelTela.innerText = "Level - " + jogador.level;

}

function concluirQuest() {

    jogador.calculaXP(1);
    console.log(jogador);
    levelTela.innerText = "Level - " + jogador.level;
    atualizaBarra();


}

function atualizaBarra() {

    let xp_barra = jogador._pontosXP;
    progresso = (xp_barra * 100) / condicao;

    barraProgresso.style.backgroundImage = `linear-gradient(to right, red, red ${progresso}%, white ${progresso}%`;

    progresso = 0;
    xp_barra = 0;

}
