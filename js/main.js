import { Jogador } from "./Jogador.js";

let nomeTela = document.getElementById('nomeJogador');
let levelTela = document.getElementById('levelJogador');
let botaoConcluir = document.getElementById('botaoConcluir');

let nome = document.getElementById('textoNome');

let botaoNome = document.getElementById('botaoNome');

const jogador = new Jogador("novo");




botaoNome.onclick = cadastraJogador;

botaoConcluir.onclick = concluirQuest;



function cadastraJogador(){

    jogador.nome = nome.value;
    console.log(jogador);

    nomeTela.innerText = nome.value;
    levelTela.innerText = "Level - " + jogador.level;

}

function concluirQuest(){

   jogador.calculaXP(1);
   console.log(jogador);
   levelTela.innerText = "Level - " + jogador.level;
    
}