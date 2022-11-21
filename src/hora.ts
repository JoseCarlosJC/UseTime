// Representación de una hora

export class Hora{
    // Hora 
    private _hora : number;

    // Minutos
    private _minutos: number;

    constructor(hora:number, minutos:number){
        this._hora = hora;
        this._minutos = minutos;
    }

    get hora(){
        return this._hora
    }

    get minutos(){
        return this._minutos
    }
}