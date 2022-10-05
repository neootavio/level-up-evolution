const nomeJogador = document.getElementById('nomeJogador');
const levelJogador = document.getElementById('levelJogador');
const tipoSanguineo = document.getElementById('tipoSanguineo');
const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const idade = document.getElementById('idade');

const jogador = JSON.parse(localStorage.jogador)

console.log(jogador);


nomeJogador.innerText = jogador._nome;

levelJogador.innerText += jogador._level;

tipoSanguineo.innerText = "Tipo sanguíneo: " + jogador._tipoSanguineo;

altura.innerText = "Altura: " + jogador._altura;

peso.innerText = "Peso: " + jogador._peso;

idade.innerText = "Idade: " + jogador._idade;
