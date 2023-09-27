class Context {
    constructor(strategy) {
      this.strategy = strategy;
    }
  
    //Method for set the strategy in runtime
  
    setStrateggy(strategy) {
      this.strategy = strategy;
    }
  
    //Method to using current strategy for doing a operation or task
  
    executeStrategy() {
      return this.strategy.execute();
    }
  }
  
  
  class concreteStrategy1
  {
      execute(){
          return "Executing the concrete strategy 1";
      }
  }
  class concreteStrategy2
  {
      execute(){
          return "Executing the concrete strategy 2";
      }
  }
  
  class concreteStrategy3
  {
      execute(){
          return "Executing the concrete strategy 3";
      }
  }
  
  const context =  new Context( new concreteStrategy1());
  
  //Initial Execution
  console.log( context.executeStrategy())
  
  //Switch Strategy on runtime
  
  context.setStrateggy(new concreteStrategy2());
  
  console.log( context.executeStrategy());
  
  //Switch Strategy on runtime again (2nd time)
  
  context.setStrateggy(new concreteStrategy3());
  
  console.log( context.executeStrategy());
  