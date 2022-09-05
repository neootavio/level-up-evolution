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

        if(this._experiencia > this._level + 3)
        
        this.levelUp();
    }

    levelUp(xp) {

            this._level++;

    }
}