class Persona {

    constructor(private _nombre: string) {}

    getInfo ():string {
        return this._nombre;
    }

    set nombre (nombre:string) {
        this._nombre = nombre;
    }
}

class Empleado extends Persona {

    constructor(nombre: string, private _cargo: string) {
        super(nombre);
    }

    info():string{
        return `Employee name is ${this.getInfo()}`
    }
}

let newE = new Empleado('Juan', 'Programador');

console.log(newE. info());

//Comentario





