import { TramoHorario } from "./tramo_horario";

// Clase que modeliza las diferentes tareas en las que se divide un trabajo

export class Tarea{
    // Nombre de la tarea
    private _nombre: string;

    // Dia en la que se llevará a cabo la tarea
    private _dia: Date;

    // Tramo horario en la que se llevará a cabo
    private _tramo: TramoHorario;

    constructor(nombre:string, dia:Date, tramo:TramoHorario){
        this._nombre = nombre
        this._dia = dia
        this._tramo = tramo
    }
}