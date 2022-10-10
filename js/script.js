import { Jogador } from "../js/Jogador.js";

let menu1 = document.getElementById('menu1');
let tela = document.getElementById('tela');
//let painel1 = document.getElementById('painel1');
let painel2 = document.getElementById('painel2');
let botao1 = document.getElementById('botao1');
let botao2 = document.getElementById('botao2');
let barraProgresso = document.getElementById('barra-progresso');
var nomeJogador = document.getElementById('player');
var levelJogador = document.getElementById('level');
//let botao2 = document.getElementById('botao2');
//let botao4 = document.getElementById('botao4');
//let botao3 = document.getElementById('botao3');
//let botao5 = document.getElementById('botao5');

let startcrono = document.getElementById('startcrono');
let stopcrono = document.getElementById('stopcrono');
let resetcrono = document.getElementById('resetcrono');

startcrono.addEventListener("click", iniciar);
stopcrono.addEventListener("click", parar);
resetcrono.addEventListener("click", resetar);


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

botao1.onclick = comecar;
botao2.addEventListener("click", concluir);

//botao3.onclick = concluir;

//botao4.onclick = preencher;

//limpar();

//preencher();

//botao5.onclick = limpar;


function comecar() {

    voltarTela();

    iniciar();

    painel2.innerHTML = '<p>Stay Hard</p>'

}

function concluir() {

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
    atualizaBarra(1);

    trocarTela();

    parar();
    resetar();

}


function atualizaBarra(p) {

    if (jogador1._level == 1) {

        calculaProgresso(jogador1._xpNivel, 4);

    } else

        if (jogador1._level <= 5) {

            calculaProgresso(jogador1._xpNivel, 4);


        } else if (jogador1._level <= 10) {
            calculaProgresso(jogador1._xpNivel, 5);
        } else if (jogador1._level <= 30) {
            calculaProgresso(jogador1._xpNivel, 7);
        } else {
            calculaProgresso(jogador1._xpNivel, 21);
        }

    p = jogador1._progresso;

    barraProgresso.style.backgroundImage = `linear-gradient(to right, red, red ${p}%, white ${p}% `;

    if (p > 100) {

        barraProgresso.style.backgroundImage = `linear-gradient(to right, red, red ${0}%, white ${0}%`;

    }
}

function calculaProgresso(xpNivel, barra) {

    jogador1._progresso = (xpNivel / barra) * 100;
    return jogador1._progresso;

}

function preencher() {

    localStorage.nome = "Otávio";
    localStorage.level = 1;
    localStorage.tipoSanguineo = "O+";
    localStorage.altura = "1,73";
    localStorage.peso = 75 + "Kg";
    localStorage.idade = 38;
    localStorage.pontosXP = 0;
    localStorage.condicao = 4;
    localStorage.xpNivel = 0;
}

function limpar() {
    localStorage.clear();
}

//here

function alerta() {

    alert("Caso recuse seu nível não subirá!");

}


function trocarTela() {
    tela.classList.add('esconder');

    tela.classList.remove('mostrar');

    menu1.classList.add('esconder');

    menu1.classList.remove('mostrar');
}

function voltarTela() {
    tela.classList.remove('esconder');

    tela.classList.add('mostrar');

    menu1.classList.remove('esconder');

    menu1.classList.add('mostrar');
}

//controlador do cronometro
const miliseg = document.querySelector('.milissegundos')
const seg = document.querySelector('.segundos')
const min = document.querySelector('.minutos')

let miliNum = 0
let segNum = 0
let minNum = 0
let INTERVALO

function milissegundos() {
  miliNum++
  if (miliNum < 10) {
    miliseg.innerHTML = '0' + miliNum
  } else {
    miliseg.innerHTML = miliNum
  }

  if (miliNum == 99) {
    miliNum = 0
    segundos()
  }
}

function segundos() {
  segNum++
  if (segNum < 10) {
    seg.innerHTML = '0' + segNum
  } else {
    seg.innerHTML = segNum
  }

  if (segNum == 59) {
    segNum = 0
    minutos()
  }
}

function minutos() {
  minNum++
  if (minNum < 10) {
    min.innerHTML = '0' + minNum
  } else {
    min.innerHTML = minNum
  }
}

function iniciar() {
  clearInterval(INTERVALO)
  INTERVALO = setInterval(() => {
    milissegundos()
  }, 10)
}

function parar() {
  clearInterval(INTERVALO)
}

function resetar() {
  clearInterval(INTERVALO)
  miliNum = 0
  segNum = 0
  minNum = 0
  miliseg.innerHTML = '00'
  seg.innerHTML = '00'
  min.innerHTML = '00'
}

//fim do controlador do cronometro