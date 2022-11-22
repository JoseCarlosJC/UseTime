import { HuecosLibresDia } from "./huecos_libres_dia";
import { Trabajo } from "./trabajo";


// Representa un usuario
export class Usuario{

    // Correo electrónico del usuario: se usará como identificador de este ya que es único para cada uno
    private _correo: string;

    // Contraseña
    private _password: string;

    // Intervalos de tiempo de un dia que estarán libres.
    private _huecosLibresDia: Array<HuecosLibresDia>;

    // Trabajos que se desean distribuir en tareas
    private _trabajos: Array<Trabajo>;

    constructor(correo: string, password: string){
        this._correo = correo;
        this._password = password;
    }

    get correo(): string{
        return this._correo;
    }

    get trabajos(): Array<Trabajo>{
        return this._trabajos
    }

    get huecosLibresDia(): Array<HuecosLibresDia>{
        return this._huecosLibresDia
    }

}