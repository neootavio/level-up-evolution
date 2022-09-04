import { Jogador } from "./Jogador.js";

const jogador1 = new Jogador("Otávio");

let nomeTela = document.getElementById('nomeJogador');
let levelTela = document.getElementById('levelJogador');


nomeTela.innerText = jogador1.nome;
levelTela.innerText += " - " + jogador1.level;