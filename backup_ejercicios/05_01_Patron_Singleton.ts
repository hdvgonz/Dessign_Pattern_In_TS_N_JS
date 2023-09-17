class Singleton {
    private static instance: Singleton | null = null;
    private data: string;

    private constructor(){
        this.data = "Hola Soy la instancia";
    }

    public static getInstance(): Singleton {
        let cont = 0;
        if( !Singleton.instance){
            Singleton.instance = new Singleton();
        }
        cont++;
        return Singleton.instance;
    }

    public setData(data: string){
       this.data = data;
    }

    public getData(): string{
        return this.data;
    }

    }

    const instancia1 = Singleton.getInstance()
    const instancia2 = Singleton.getInstance()

    console.log(instancia1.getData())
    instancia2.setData("Hola soy la segunda instancia");
    console.log(instancia2.getData());
    console.log(instancia1.getData());

//    console.log(instancia1)
//    console.log(instancia2)

   class Singleton2{
    private static instance: Singleton2 | null = null;

    constructor(){
        if(Singleton2.instance){
            console.log("Ya existe instancia");
            return Singleton2.instance
        }
        Singleton2.instance = this;
        console.log("Instancia creada");
    }
   }

//    const instancia3 = new Singleton2();
//    const instancia4 = new Singleton2();
//    const instancia5 = new Singleton2();

