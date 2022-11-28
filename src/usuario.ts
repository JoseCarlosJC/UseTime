import { Trabajo } from "./trabajo";
import { TramoHorario } from "./tramo_horario";

// Representa un usuario
export class Usuario{

    // Huecos libres en los que se puede asignar una tarea.
    private _huecosLibresDia: Array<TramoHorario>;

    // Trabajos que se desean distribuir en tareas
    private _trabajos: Array<Trabajo>;

    constructor(correo: string, huecosLibresDia: Array<TramoHorario>, trabajos: Array<Trabajo>){
        this._correo = correo;
        this._huecosLibresDia = huecosLibresDia;
        this._trabajos = trabajos;
    }
}