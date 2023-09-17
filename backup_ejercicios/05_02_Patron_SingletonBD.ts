class Database {

    private static instance: Database | null = null;

    constructor(){

        if(Database.instance){
            console.log('Ya existe una instancia');
            return Database.instance
        }

        /**
         * Simulando conexion
         * this.host = 'localhost';
         * this.user = 'root';
         * this.password = 'root';
         */

        Database.instance = this;
    }

    public query (sql:string){
        console.log(`Ejecutando query: ${sql}`);
    }
    
    
}

const database1 =  new Database();
const database2 =  new Database();

console.log(database1 === database2);