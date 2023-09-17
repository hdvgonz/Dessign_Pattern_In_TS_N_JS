enum Temp{
    K = "Kelvin",
    C = "Celsius",
    F = "Farenheit"
}

const tempValida = (temp:number, unidad: string):boolean => {
    const unidadesValidas = Object.keys(Temp)

    if ( isNaN( temp ) || !unidadesValidas.includes(unidad) ) {
        console.error("Digite temp Valida")
        return false;
    }

    return true;
}

const convertirTemp = (temperatura: number, unidad: string) => {

    if (!tempValida(temperatura, unidad)) return;

    

}



convertirTemp(3, "C")
