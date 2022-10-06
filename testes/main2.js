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

console.log(condicao, progresso);


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
    atualizaBarra(jogador._progresso);


}

function atualizaBarra(p) {

    barraProgresso.style.backgroundImage = `linear-gradient(to right, red, red ${p}%, white ${p}% `;

    if (p > 100) {

        barraProgresso.style.backgroundImage = `linear-gradient(to right, red, red ${0}%, white ${0}%`;

    }
}

