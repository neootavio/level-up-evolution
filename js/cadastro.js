import { Jogador } from "./Jogador.js";

let nomeTela = document.getElementById('nomeJogador');
let levelTela = document.getElementById('levelJogador');
let botaoCadastro = document.getElementById('botaoCadastro');
let nome = document.getElementById('texto-nome');
let tipoSanguineo = document.getElementById('texto-tipoSanguineo');
let altura = document.getElementById('texto-altura');
let peso = document.getElementById('texto-peso');
let idade = document.getElementById('texto-idade');


const jogador = new Jogador("novo");

botaoCadastro.onclick = cadastraJogador;


function cadastraJogador() {

    jogador._nome = nome.value;
    jogador._tipoSanguineo = tipoSanguineo.value;
    jogador._altura = altura.value;
    jogador._peso = peso.value;
    jogador._idade = idade.value;
    
    jogador._level = 100;

    nomeTela.innerText = nome.value;
    levelTela.innerText = "Level - " + jogador._level;

    localStorage.jogador = JSON.stringify(jogador);



    alert("Jogador cadastrado!");


}
