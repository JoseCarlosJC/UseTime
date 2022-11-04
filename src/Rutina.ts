
// Representa aquellos intervalos de tiempo que estarán ocupados todas las semanas
export class Rutina{
    
    // Hora a la que comienza la actividad rutinaria
    horaComienzo: number;

    // Hora a la que termina
    horaFinalizacion: number;

    constructor(horaComienzo: number, horaFinalizacion: number){
        this.horaComienzo = horaComienzo;
        this.horaFinalizacion = horaFinalizacion;
    }
}