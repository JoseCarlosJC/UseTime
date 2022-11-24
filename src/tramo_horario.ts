// Representación de una hora

export class TramoHorario{
    // Hora en formato hora-minuto de comienzo del tramo horario
    private _horaComienzo : [number, number];

    // Hora en formato hora-minuto de finalizacion del tramo horario
    private _horaFinalizacion : [number, number];

    constructor(horaComienzo: [number,number], horaFinalizacion: [number,number]){
        this._horaComienzo = horaComienzo;
        this._horaFinalizacion = horaFinalizacion;
    }
}