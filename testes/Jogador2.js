export class Jogador2 {

    _nome;
    _level = 1;
    _pontosXP = 0;
    _condicao = 4;
    _progresso = 0;

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

    get xp(){
        return this._pontosXP;
    }

    get progresso(){
        return this._progresso;
    }

    calculaXP(xp) {

        this._pontosXP += xp;

        this._progresso = (this._pontosXP / this._condicao) * 100;

        if (this._pontosXP > this._condicao) {
            this.levelUp();  
            this._progresso = 0;
            
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