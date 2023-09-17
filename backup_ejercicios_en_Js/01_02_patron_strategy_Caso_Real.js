class Contexto{
    constructor(estrategia){
      this.estrategia = estrategia;
    }
  
    realizarAccion(monto){
      this.estrategia.realizar(monto);
    }
    
  }
  
  //Definicion de la clase EstrategiaRegular
  
  class EstrategiaRegular{
    
    constructor(){
      this.impuesto = 0.19;
    }
  
    realizar(monto){
      const impuesto = monto * this.impuesto;
  
      let total = monto * impuesto;
      
      console.log(`Venta Regular - Monto: ${total}, Impuesto: ${impuesto}`);
  
      // return total;
      
      
    }
  }
  
  const estrategiaRegular = new EstrategiaRegular();
  
  const contexto = new Contexto(estrategiaRegular);
  
  contexto.realizarAccion(100);