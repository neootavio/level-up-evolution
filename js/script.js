let menu1 = document.getElementById('menu1');
let tela = document.getElementById('tela');
let painel1 = document.getElementById('painel1');
let painel2 = document.getElementById('painel2');
let botaoComecar = document.getElementById('botao1');
let botaoConcluir = document.getElementById('botao2');


botaoComecar.onclick = comecar;

botaoConcluir.onclick = concluirQuest;



function alerta() {

    alert("Caso recuse seu nível não subirá!");

}

function comecar() {

    voltarTela();

    painel2.innerHTML = '<button id="botao2">Concluir</button>'

}

function concluirQuest() { 
    trocarTela();
    
    painel1.innerHTML = '<button id="botao1"">Começar</button>'
    

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