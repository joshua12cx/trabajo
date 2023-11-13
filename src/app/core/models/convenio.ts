import { TipoConvenio } from "./tipoconvenio";
import { Ubicacion } from "./ubicacion";

export class Convenio {
    id: number;
    nombre: string;
    inicio: Date; // Cambiado de fecha_inicio a inicio
    fin: Date; // Cambiado de fecha_fin a fin
    referencia: string; // Cambiado de anexo a referencia
    archivo: string;
    tipo: TipoConvenio = new TipoConvenio;
    ubicacion: Ubicacion = new Ubicacion;

    // id : number;
    // nombre: string;
    // apellido: string;
    // email:string;
}
