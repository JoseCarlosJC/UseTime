import { HuecosLibresDia } from "./huecos_libres_dia";
import { Trabajo } from "./trabajo";


// Representa un usuario
export class Usuario{

    // Correo electrónico del usuario: se usará como identificador de este ya que es único para cada uno
    #correo: string;

    // Contraseña
    #password: string;

    // Intervalos de tiempo de un dia que estarán libres.
    #huecosLibresDia: Array<HuecosLibresDia>;

    // Trabajos que se desean distribuir en tareas
    #trabajos: Array<Trabajo>;

    constructor(correo: string, password: string){
        this.#correo = correo;
        this.#password = password;
    }

    get correo(): string{
        return this.#correo;
    }

    get trabajos(): Array<Trabajo>{
        return this.#trabajos
    }

    get huecosLibresDia(): Array<HuecosLibresDia>{
        return this.#huecosLibresDia
    }

}