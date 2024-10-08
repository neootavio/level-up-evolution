export class Jogador {

    _nome;
    _level = 1;
    _pontosXP = 0;
    _condicao = 4;
    _progresso = 0;
    _tipoSanguineo = "";
    _altura = 0;
    _peso = 0;
    _idade = 0;
    _xpNivel = 0;

    constructor(nome) {

        this._nome = nome;

    }

    get nome() {
        return this._nome;
    }

    set nome(nome) {
        this._nome = nome;
    }

    set tipoSanguineo(tipoSanguineo) {
        this._tipoSanguineo = tipoSanguineo;
    }

    get tipoSanguineo() {
        return this._tipoSanguineo;
    }

    set altura(altura) {
        this._altura = altura;
    }

    get altura() {
        return this._altura;
    }

    set peso(peso) {
        this._peso = peso;
    }

    get peso() {
        return this._peso;
    }

    set idade(idade) {
        this._idade = idade;
    }

    get idade() {
        return this._idade;
    }

    set level(level) {
        this._level = level;
    }

    get level() {
        return this._level;
    }

    set xp(xp) {
        this.pontosXP = xp;
    }

    get xp() {
        return this._pontosXP;
    }

    set progresso(progresso) {
        this._progresso = progresso;
    }

    get progresso() {
        return this._progresso;
    }

    ganhaXP(xp) {

        //contador geral de xp
        this._pontosXP += xp;
        this._xpNivel += xp;

        //verifica se subiu de nivel
        if (this._pontosXP > this._condicao) {
            this.levelUp();
            this._xpNivel = 1;
        }

    }

    levelUp() {

        if (this._level < 5) {
            this._level++;
            this._condicao += 4;

        } else if (this._level < 10) {
            this._level++;
            this._condicao += 5;
        } else if (this._level < 30) {
            this._level++;
            this._condicao += 7;
        } else {
            this._level++;
            this._condicao += 21;
        }

        alert("Level up!");
    }

    apresentar() {
        alert("Oi eu sou " + this._nome);
    }

}