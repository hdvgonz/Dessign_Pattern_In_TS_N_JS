const array: string[] = ["Daniel", "Eduardo", "Gonzalez"];

// array.forEach( index => console.log(index));

// const newArray:string[] = array.map( (e) => e.concat('NO') );

// console.log(newArray);

const numbers: number[] = [2, 4, 5, 5, 6, 7, 8, 8, 8];

let newArray = numbers.reduce((acc: number, value: number) => value + acc);

let getMax = (a: number, b: number) => Math.max(a, b);

let maxNumber = numbers.reduce(getMax);

// console.log(newArray);
// console.log(maxNumber);

enum TipoBebida {
  AZUCARADA = "Azucarada",
  AZUCAR_CERO = "Sin Azucar",
  AZUCAR_BAJA = "Baja En Azucar",
}

abstract class Bebida {
  constructor(public nombre:string, public marca: string, public tipo: TipoBebida[]) {
  }

  info(): string {
      return this.nombre;
  }
}

// let bebida = new Bebida("Botellona","Polar", [
//   TipoBebida.AZUCARADA,
//   TipoBebida.AZUCAR_BAJA,
// ]);

class Cerveza extends Bebida{
    constructor(nombre: string, marca: string, tipo: TipoBebida[], public contenido: number) {
        super(nombre, marca, tipo);
    }

    info(): string {
        let info = super.info();

        let completo = `${info} Contenido: ${this.contenido}`;

        return completo;
    }
}

let newCerveza = new Cerveza("Botellona","Polar", [
  TipoBebida.AZUCARADA,
], 12);

console.log(newCerveza.info());



