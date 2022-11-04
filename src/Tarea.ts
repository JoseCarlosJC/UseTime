
export class Tarea{

    // Titulo de la tarea a llevar a cabo
    titulo: string;

    // Fecha de inicio de la tarea
    fecha_inicio: Date;

    // Fecha de finalización de la tarea
    fecha_final: Date;

    constructor(titulo:string, fechaInicio:Date, fechaFinal:Date){
        this.titulo = titulo;
        this.fecha_inicio = fechaInicio;
        this.fecha_final = fechaFinal;
    }

}