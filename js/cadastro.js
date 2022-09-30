import { Jogador } from "./Jogador.js";

let nomeTela = document.getElementById('nomeJogador');
let levelTela = document.getElementById('levelJogador');
let botaoCadastro = document.getElementById('botaoCadastro');
let nome = document.getElementById('textoNome');
let tipoSanguineo = document.getElementById('tipoSanguineo');
let altura = document.getElementById('altura');
let peso = document.getElementById('peso');
let idade = document.getElementById('idade');


const jogador = new Jogador("novo");

botaoCadastro.onclick = cadastraJogador;


function cadastraJogador() {

    jogador.nome = nome.value;
    jogador.tipoSanguineo = tipoSanguineo.value;
    jogador.altura = altura.value;
    jogador.peso = peso.value;
    jogador.idade = idade.value;
    

    nomeTela.innerText = nome.value;
    levelTela.innerText = "Level - " + jogador.level;

    localStorage.jogador = JSON.stringify(jogador);

    alert("Jogador cadastrado!")

    
    

}
