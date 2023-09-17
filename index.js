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
    return this.strategy.execute;
  }
}

class strategy {
  execute() {
    throw new Error(" You must implement by a specific strategy ");
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
        return "Executing the concrete strategy 1";
    }
}

class concreteStrategy3
{
    execute(){
        return "Executing the concrete strategy 1";
    }
}