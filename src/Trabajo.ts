import { Tarea } from "./Tarea";

// Enumerado que representa la complejidad del trabajo
enum Complejidad{
    facil = 1,
    medio = 2,
    dificil = 3,
}

// Representa un trabajo que se desea repartir en diferentes tareas según la dificultad y 
// la fecha límite aplicando la lógica de negocio.
export class Trabajo{

    // Nombre del trabajo a realizar
    nombre: string;

    // Fecha límite de finalización
    fechaLimite : Date;

    // Complejidad del trabajo a realizar
    complejidad: Complejidad;

    // Tareas asignadas al trabajo
    tareas: Array<Tarea>

    constructor(nombre: string, fechaLimite:Date, complejidad: Complejidad){
        this.nombre = nombre;
        this.fechaLimite = fechaLimite;
        this.complejidad = complejidad;
        this.tareas = [];
    }    
}