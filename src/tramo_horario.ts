import { Momento } from "./momento";

// Representación de un tramo horario
export class TramoHorario{

    // Dia en el que se lleva a cabo el tramo horario
    private _dia: Date;

    // Hora en formato hora-minuto de comienzo del tramo horario
    private _momentoComienzo : Momento;

    // Hora en formato hora-minuto de finalizacion del tramo horario
    private _momentoFinalizacion : Momento;

    constructor(dia: Date,horaComienzo: Momento, horaFinalizacion: Momento){
        this._dia = dia;
        this._momentoComienzo = horaComienzo;
        this._momentoFinalizacion = horaFinalizacion;
    }
}