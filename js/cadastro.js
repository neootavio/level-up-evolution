import { Jogador } from "./Jogador.js";

let nomeTela = document.getElementById('nomeJogador');
let levelTela = document.getElementById('levelJogador');
let botaoCadastro = document.getElementById('botaoCadastro');
let nome = document.getElementById('texto-nome');
let tipoSanguineo = document.getElementById('texto-tipoSanguineo');
let altura = document.getElementById('texto-altura');
let peso = document.getElementById('texto-peso');
let idade = document.getElementById('texto-idade');

let botaoPreencher = document.getElementById('botaoPreencher');


const jogador = new Jogador("novo");

botaoCadastro.onclick = cadastraJogador;
botaoPreencher.onclick = preencher;


function cadastraJogador() {

    jogador._nome = nome.value;
    jogador._tipoSanguineo = tipoSanguineo.value;
    jogador._altura = altura.value;
    jogador._peso = peso.value;
    jogador._idade = idade.value;

    nomeTela.innerText = nome.value;
    levelTela.innerText = "Level - " + jogador._level;

    localStorage.nome = nome.value;
    localStorage.tipoSanguineo = tipoSanguineo.value;
    localStorage.altura = altura.value;
    localStorage.peso = peso.value;
    localStorage.idade = idade.value;
    localStorage.pontosXP = 0;
    localStorage.condicao = 4;
    localStorage.progresso = 0;

    alert("Jogador " + localStorage.nome + " cadastrado!");


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
    localStorage.progresso = 0;

    alert("Jogador " + localStorage.nome + " cadastrado!");
    
}

