import { TramoHorario, Hora } from "./tramo_horario";

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

    // Contructor al que se le pasan un nombre, la hora de inicio, y la Duracion: si es media hora o una hora entera
    constructor(nombre:string, dia:Date, horaInicio: Hora, duracion:Duracion){
        this._nombreTarea = nombre
        let horaFinalizacion: Hora
        if(duracion==Duracion.media_hora) {
            if(horaInicio.minuto == 30){
                horaFinalizacion = {hora:horaInicio.hora+1, minuto:0}
            }else{
                horaFinalizacion = {hora:horaInicio.hora, minuto:30}
            }
        }else{
            horaFinalizacion = {hora:horaInicio.hora+1, minuto:horaInicio.minuto}
        }
        this._tramoTarea = new TramoHorario(dia ,horaInicio,horaFinalizacion)
    }
}