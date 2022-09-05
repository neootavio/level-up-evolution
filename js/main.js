import { Jogador } from "./Jogador.js";

let nomeTela = document.getElementById('nomeJogador');
let levelTela = document.getElementById('levelJogador');

let nome = document.getElementById('textoNome');

let botaoNome = document.getElementById('botaoNome');

botaoNome.onclick = cadastraJogador;

botaoConcluir.onclick = concluirQuest;

const jogador = new Jogador(nome.value);


function cadastraJogador(){

    jogador.nome = nome.value;
    console.log(jogador);

    nomeTela.innerText = nome.value;
    levelTela.innerText += " - " + jogador.level;

}

function concluirQuest(){

    jogador.ganharXP(1);
    console.log(jogador);
    
}