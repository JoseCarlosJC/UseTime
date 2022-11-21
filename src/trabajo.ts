import { Tarea } from "./tarea";

// Enumerado que representará la complejidad de los trabajos
enum Complejidad{
    facil = 1,
    medio = 2,
    dificil = 3,
}

// Clase que modeliza los trabajos que un usuario ha de acabar antes de una fecha limite
export class Trabajo{
    // Nombre del trabajo a realizar
    private nombre: string;
    
    // Fecha limite de finalización
    private fechaLimite: Date;

    // Complejidad del trabajo
    private complejidad: Complejidad;

    // Tareas en las que se repartira el trabajo a lo largo del horario
    private tareas: Array<Tarea>;

    constructor(nombre: string, fechaLimite: Date, complejidad:Complejidad){
        this.nombre = nombre;
        this.fechaLimite = fechaLimite;
        this.complejidad = complejidad;
        this.tareas = []
    }

}