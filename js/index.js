import { Jogador } from "../js/Jogador.js";

let barraProgresso = document.getElementById('barra-progresso');
var nomeJogador = document.getElementById('player');
var levelJogador = document.getElementById('level'); 
let botao3 = document.getElementById('botao3');
let botao5 = document.getElementById('botao5');
let botao4 = document.getElementById('botao4');


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

console.log(jogador1);



botao4.onclick = preencher;

botao3.onclick = concluir;

botao5.onclick = limpar;


function concluir(){

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
    atualizaBarra(jogador1._progresso);
}


function atualizaBarra(p) {

    barraProgresso.style.backgroundImage = `linear-gradient(to right, red, red ${p}%, white ${p}% `;

    if (p > 100) {

        barraProgresso.style.backgroundImage = `linear-gradient(to right, red, red ${0}%, white ${0}%`;

    }
}

function preencher(){

    localStorage.nome = "Otávio";
    localStorage.level = 1;
    localStorage.tipoSanguineo = "O+";
    localStorage.altura = "1,73";
    localStorage.peso = 75 + "Kg";
    localStorage.idade = 38;
    localStorage.pontosXP = 0;
    localStorage.condicao = 4;
    localStorage.progresso = jogador1.calculaProgresso(0, 4);
    
}
 
function limpar(){
    localStorage.clear();
}