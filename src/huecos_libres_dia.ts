import { Hora } from "./hora";

// Representa aquellos intervalos de tiempo de un dia en los que se puede asignar una tarea
export class HuecosLibresDia{
    
    // Dia 
    private _dia: Date;

    // Array de intervalos de tiempo asignables a tareas
    private _intervalos: Array<[Hora,Hora]>

    constructor(dia: Date, intervalos: Array<[Hora,Hora]>){
        this._dia = dia;
        this._intervalos = intervalos;
    }

}