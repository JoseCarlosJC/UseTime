import { Tarea } from "./Tarea";

enum Dificultad{
    facil = 1,
    medio = 2,
    dificil = 3,
}

export class Trabajo{

    // Nombre del trabajo a realizar
    nombre: string;

    // Fecha límite de finalización
    fechaLimite : Date;

    // Dificultad del trabajo a realizar
    dificultad: Dificultad;

    // Tareas asignadas al trabajo
    tareas: Array<Tarea>

    constructor(nombre: string, fechaLimite:Date, dificultad: Dificultad){
        this.nombre = nombre;
        this.fechaLimite = fechaLimite;
        this.dificultad = dificultad;
        this.tareas = [];
    }    
}