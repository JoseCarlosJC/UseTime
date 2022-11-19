// Representación de una hora

export class Hora{
    // Hora 
    #hora : number;

    // Minutos
    #minutos: number;

    constructor(hora:number, minutos:number){
        this.#hora = hora;
        this.#minutos = minutos;
    }

    get hora(){
        return this.#hora
    }

    get minutos(){
        return this.#minutos
    }
}