import { Jogador2 } from "./Jogador2.js";

let nomeTela = document.getElementById('player');
let levelTela = document.getElementById('level');
let botaoConcluir = document.getElementById('botaoConcluir');
let barraProgresso = document.getElementById('barra-progresso');

let nome = document.getElementById('textoNome');

let botaoNome = document.getElementById('botaoNome');

const jogador = new Jogador2("novo");

const progresso = jogador.progresso;


botaoNome.onclick = cadastraJogador;

botaoConcluir.onclick = concluirQuest;

function cadastraJogador() {

    jogador.nome = nome.value;
    console.log(jogador);

    nomeTela.innerText = nome.value;
    levelTela.innerText = "Level - " + jogador.level;

}

function concluirQuest() {
    
    jogador.calculaXP(1);
    console.log(jogador);
    console.log("progresso "+ jogador.progresso);
    levelTela.innerText = "Level - " + jogador.level;
    atualizaBarra(jogador.progresso);

    
}

function atualizaBarra(p) {

    barraProgresso.style.backgroundImage = `linear-gradient(to right, red, red ${p}%, white ${p}%`;

}
