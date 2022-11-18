// Clase que modeliza las diferentes tareas en las que se divide un trabajo

export class Tarea{
    // Nombre de la tarea
    #nombre: string;

    // Definición de la franja horaria a la que se desea asignar a la tarea
    // Fecha de inicio de dicha franja horaria
    #fechaInicio: Date;

    // Fecha de finalizacion de dicha franja horaria
    #fechaFinal: Date;

    constructor(nombre:string, fechaInicio:Date, fechaFinal:Date){
        this.#nombre = nombre
        this.#fechaInicio = fechaInicio
        this.#fechaFinal = fechaFinal
    }
}