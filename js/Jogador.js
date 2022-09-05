export class Jogador {

    _nome;
    _level = 1;
    _experiencia = 0;

    constructor(nome) {

        this._nome = nome;

    }

    get nome() {
        return this._nome;
    }

    set nome(nome) {
        this._nome = nome;
    }

    get level() {
        return this._level;
    }

    ganharXP(xp) {
        this._experiencia += xp;
        this.levelUp();
    }

    levelUp() {
        if (this._experiencia === this._level + 3) {

            this._level++;

        }

    }
}