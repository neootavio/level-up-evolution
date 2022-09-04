export class Jogador {

    _nome;
    _level = 1;
   
    constructor(nome){

        this._nome = nome;        

    }

    get nome(){
        return this._nome;
    }

    get level(){
        return this._level;
    }

}