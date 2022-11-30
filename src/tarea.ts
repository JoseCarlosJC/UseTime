import { TramoHorario } from "./tramo_horario";
import { Momento } from "./momento";

// Representa la duración de una tarea
enum Duracion{
    media_hora,
    hora,
}

// Clase que modeliza las diferentes tareas en las que se divide un trabajo

export class Tarea{
    // Nombre de la tarea
    private _nombreTarea: string;

    // Tramo horario en la que se llevará a cabo
    private _tramoTarea: TramoHorario;

    // Contructor al que se le pasan un nombre, el momento de inicio, y la Duracion: si es media hora o una hora entera
    constructor(nombre:string, dia:Date, momentoInicio: Momento, duracion:Duracion){
        this._nombreTarea = nombre;
        let momentoFinalizacion: Momento;
        if(duracion==Duracion.media_hora) {
            if(momentoInicio.minuto == 30){
                momentoFinalizacion = new Momento(momentoInicio.hora+1, 0);
            }else{
                momentoFinalizacion = new Momento(momentoInicio.hora, 30);
            }
        }else{
            momentoFinalizacion = new Momento(momentoInicio.hora+1, momentoInicio.minuto)
        }
        this._tramoTarea = new TramoHorario(dia ,momentoInicio,momentoFinalizacion)
    }
}