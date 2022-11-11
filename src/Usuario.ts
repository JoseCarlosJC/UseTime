import { HuecosLibresDia } from "./HuecosLibresDia";
import { Trabajo } from "./Trabajo";


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

    getCorreo(): string{
        return this.#correo;
    }

}