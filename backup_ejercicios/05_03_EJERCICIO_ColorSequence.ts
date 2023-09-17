import readlineSync from "readline-sync";
class ColorSequenceGenerator {
  private static instance: ColorSequenceGenerator | null = null;

  private colors: string[] = [
    "rojo",
    "verde",
    "azul",
    "Amarillo",
    "blanco",
    "negro",
    "turqueza",
  ];

  private constructor() {}

  public static getInstace(): ColorSequenceGenerator {
    if (!ColorSequenceGenerator.instance) {
      ColorSequenceGenerator.instance = new ColorSequenceGenerator();
    }
    
    return ColorSequenceGenerator.instance;
  }

  public generateSequence(): string[] {
    let generatedArray: string[] = [];

    this.colors.forEach((color, index) => {
      if (index < 4) {
        generatedArray.push(color);
      }
    });

    return generatedArray;
  }
}

const playGame = (instance: ColorSequenceGenerator) => {
  let pcArray: string[] = instance.generateSequence();
  let userArray: string[] = [];
  let userColors: string | null = "";

  if (!instance) {
    return "Inserte una instancia valida";
  }

  console.log(
    "El orden del Array es el siguiente: " + pcArray
  );

  console.log("------------------------");

  console.log("Ingrese los colores los colores en el mismo orden que se muestra;(presiona enter para ingresar)");

  for (let i = 0; i < userArray.length; i++) {
      userColors = prompt(`Ingrese el color ${i + 1}`);
      userArray.push(userColors!);
}

  console.log(userArray);
}

//Testing app

const test = ColorSequenceGenerator.getInstace();

playGame(test);

