
// Clase que representa una tarea a llevar a cabo en una franja horaria 
export class Tarea{

    // Titulo de la tarea a llevar a cabo
    #titulo: string;

    // Fecha de inicio de la tarea
    #fechaInicio: Date;

    // Fecha de finalización de la tarea
    #fechaFinal: Date;

    constructor(titulo:string, fechaInicio:Date, fechaFinal:Date){
        this.#titulo = titulo;
        this.#fechaInicio = fechaInicio;
        this.#fechaFinal = fechaFinal;
    }

    getTitulo(): string{
        return this.#titulo;
    }

}