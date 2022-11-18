import { Hora } from "./hora";

// Representa aquellos intervalos de tiempo de un dia en los que se puede asignar una tarea
export class HuecosLibresDia{
    
    // Dia 
    #dia: Date;

    // Array de intervalos de tiempo asignables a tareas
    #intervalos: Array<[Hora,Hora]>

    constructor(dia: Date, intervalos: Array<[Hora,Hora]>){
        this.#dia = dia;
        this.#intervalos = intervalos;
    }

    // Getter de los intervalos
    get intervalos(){
        return this.#intervalos
    }

    // Getter del dia en cuestión
    get dia(){
        return this.#dia
    }

}
