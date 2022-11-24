// Representación de una hora

export class TramoHorario{
    // Hora  de comienzo del tramo horario
    private _horaComienzo : number;

    // Hora de finalizacion del tramo horario
    private _horaFinalizacion : number;

    constructor(horaInicio: number, horaFin: number){
        this._horaComienzo = horaInicio;
        this._horaFinalizacion = horaFin;
    }
}