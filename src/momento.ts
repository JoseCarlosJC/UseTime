// Representación de un momento, el cual está formado por la hora y minuto
export class Momento{
    hora: number;
    minuto : number;

    constructor(h: number, min: number){
        this.hora = h;
        this.minuto = min;
    }
}