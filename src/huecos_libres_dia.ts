import { TramoHorario } from "./tramo_horario";

// Representa aquellos intervalos de tiempo de un dia en los que se puede asignar una tarea
export class HuecosLibresDia{
    
    // Dia 
    private _dia: Date;

    // Array de intervalos de tiempo asignables a tareas
    private _intervalos: Array<TramoHorario>

    constructor(dia: Date, intervalos: Array<TramoHorario>){
        this._dia = dia;
        this._intervalos = intervalos;
    }

}