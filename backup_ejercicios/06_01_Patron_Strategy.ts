//Defining strategy's interface

interface Strategy {
    excute(amount: number): void;
  }
  
  //Regular Strategy class implementation
  
  class RegularStrategy implements Strategy {
    private tax: number = 0.19;
    excute(amount: number): void {
      const tax: number = amount * this.tax;
  
      const total: number = amount * tax;
  
      console.log(`Regular sale - Amount: ${total}, Taxes: ${tax}`);
    }
  }
  
  
  class Context {
    constructor(private strategy: Strategy) {
      this.strategy = strategy;
    }
  
    public actionExec(amount: number) {
      this.strategy.excute(amount);
    }
  }
  
  const strategy: Strategy = new RegularStrategy();
  
  const context: Context = new Context(strategy);
  
  context.actionExec(1000);