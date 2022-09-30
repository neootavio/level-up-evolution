const nomeJogador = document.getElementById('nomeJogador');
const levelJogador = document.getElementById('levelJogador');
const tipoSanguineo = document.getElementById('tipoSanguineo');
const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const idade = document.getElementById('idade');

const jogador = JSON.parse(localStorage.jogador)

console.log(jogador._nome);


nomeJogador.innerText = jogador._nome;

levelJogador.innerText += jogador._level;

tipoSanguineo.innerText = jogador._tipoSanguineo;
