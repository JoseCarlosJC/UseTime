import { HuecosLibresDia } from "./huecos_libres_dia";
import { Trabajo } from "./trabajo";

// Representa un usuario
export class Usuario{

    // Correo electrónico del usuario: se usará como identificador de este ya que es único para cada uno
    private _correo: string;

    // Intervalos de tiempo de un dia que estarán libres.
    private _huecosLibresDia: Array<HuecosLibresDia>;

    // Trabajos que se desean distribuir en tareas
    private _trabajos: Array<Trabajo>;

    constructor(correo: string, huecosLibresDia: Array<HuecosLibresDia>, trabajos: Array<Trabajo>){
        this._correo = correo;
        this._huecosLibresDia = huecosLibresDia;
        this._trabajos = trabajos;
    }
}