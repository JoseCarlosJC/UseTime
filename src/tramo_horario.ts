// Representación de una hora
export type Hora={
    hora: number;
    minuto: number;
}

// Representación de un tramo horario
export class TramoHorario{

    // Dia en el que se lleva a cabo el tramo horario
    private _dia: Date;

    // Hora en formato hora-minuto de comienzo del tramo horario
    private _horaComienzo : Hora;

    // Hora en formato hora-minuto de finalizacion del tramo horario
    private _horaFinalizacion : Hora;

    constructor(dia: Date,horaComienzo: Hora, horaFinalizacion: Hora){
        this._dia = dia;
        this._horaComienzo = horaComienzo;
        this._horaFinalizacion = horaFinalizacion;
    }
}