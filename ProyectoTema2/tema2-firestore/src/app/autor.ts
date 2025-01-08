export interface Autor {
    nombre: string;
    apellidos: string;
    lugarNacimiento: string;
    fechaNacimiento: Date;
    fechaDefuncion: Date | null;
    obrasNotables: string[];
    fotografía: string;
    
}
