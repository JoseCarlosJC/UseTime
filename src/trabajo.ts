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
    #nombre: string;
    
    // Fecha limite de finalización
    #fechaLimite: Date;

    // Complejidad del trabajo
    #complejidad: Complejidad;

    // Tareas en las que se repartira el trabajo a lo largo del horario
    #tareas: Array<Tarea>;

    constructor(nombre: string, fechaLimite: Date, complejidad:Complejidad){
        this.#nombre = nombre;
        this.#fechaLimite = fechaLimite;
        this.#complejidad = complejidad;
        this.#tareas = []
    }

}