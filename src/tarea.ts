import { TramoHorario } from "./tramo_horario";

// Representa la duración de una tarea
enum Duracion{
    media_hora,
    hora,
}

// Clase que modeliza las diferentes tareas en las que se divide un trabajo

export class Tarea{
    // Nombre de la tarea
    private _nombre: string;

    // Dia en la que se llevará a cabo la tarea
    private _dia: Date;

    // Tramo horario en la que se llevará a cabo
    private _tramo: TramoHorario;

    // Contructor al que se le pasan un nombre, la hora de inicio, y la Duracion: si es media hora o una hora entera
    constructor(nombre:string, dia:Date, horaInicio: number, minutoInicio: number, duracion:Duracion){
        this._nombre = nombre
        this._dia = dia
        if(duracion==Duracion.media_hora) {
            if(minutoInicio == 30){
                this._tramo = new TramoHorario([horaInicio,minutoInicio],[horaInicio+1,0])
            }else{
                this._tramo = new TramoHorario([horaInicio,minutoInicio],[horaInicio,30])
            }
        }else{
            this._tramo = new TramoHorario([horaInicio,0],[horaInicio+1,0])
        }
    }
}