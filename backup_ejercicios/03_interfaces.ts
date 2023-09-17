interface Animal {
    emitirSonido():void;
    mostrarEdad():number;
}

 class Perro implements Animal{

    constructor(private sonido: string = "Grrrr", public edad: number){}

     emitirSonido(): void {
        console.log(this.sonido)
     }
     mostrarEdad(): number {
         return this.edad
     }

 }

 class Gato implements Animal{

    constructor(private sonido: string = "Miau Miau", public edad: number){}

     emitirSonido(): void {
        console.log(this.sonido)
     }
     mostrarEdad(): number {
         return this.edad
     }

 }

 const animales: Animal[] = [
    new Perro('Guau', 21),
    new Gato('Miau',21)
 ]

 for (const animal of animales) {
    animal.emitirSonido()
    console.log(animal.mostrarEdad())
 }