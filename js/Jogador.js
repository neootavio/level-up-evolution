export class Jogador {

    _nome;
    _level = 1;
    _pontosXP = 0;
    _condicao = 4;

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

    calculaXP(xp) {

        this._pontosXP += xp

        if (this._pontosXP > this._condicao) {
            this.levelUp();  
        }
    
    }
    
    levelUp() {
       
        if(this._level < 5){
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
}