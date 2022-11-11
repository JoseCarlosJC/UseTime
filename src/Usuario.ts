import { HuecosLibres } from "./HuecosLibres";
import { Trabajo } from "./Trabajo";


// Representa un usuario
export class Usuario{

    // Correo electrónico del usuario: se usará como identificador de este ya que es único para cada uno
    #correo: string;

    // Contraseña
    #password: string;

    // Intervalos de tiempo que estarán siempre ocupados.
    #huecosLibres: Array<HuecosLibres>;

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