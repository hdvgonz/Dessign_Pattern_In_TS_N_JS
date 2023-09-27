interface DiscountStrategy {
  calculateDiscount(price: number, quantity: number): void;
}

class PercentageDiscount implements DiscountStrategy {
  private percentajeDisc = 0.3;
  calculateDiscount(price: number, quantity: number): void {
    let finalPrice = price * quantity;
    let discount = finalPrice * this.percentajeDisc;
    let total = finalPrice - discount;
    console.log(
      `Percentage Discount: The price is $${finalPrice}, but we apply a discount of $${discount} and the final price is: $${total}`
    );
  }
}

class FixedAmountDiscount implements DiscountStrategy {
  private percentajeDisc = 5000;
  calculateDiscount(price: number, quantity: number): void {
    let finalPrice = price * quantity;
    let discount = quantity * this.percentajeDisc;
    let total = finalPrice - discount;
    console.log(
      `Fixed Amount Discount: The price is $${finalPrice}, but we apply a discount of $${discount} and the final price is: $${total}`
    );
  }
}

class NoDiscount implements DiscountStrategy {
  calculateDiscount(price: number, quantity: number): void {
    let total = price * quantity;

    console.log(
      `No Discount: Product not applicable for discount, you have to pay: $${total}`
    );
  }
}

class Product {
  constructor(private discountStrategy: DiscountStrategy) {
    this.discountStrategy = discountStrategy;
  }

  setDiscountStrategy(strat: DiscountStrategy) {
    this.discountStrategy = strat;
  }

  executeOp(price: number, quantity: number): void {
    this.discountStrategy.calculateDiscount(price, quantity);
  }
}
const price: number = 10000;
const quantity: number = 50;

const prod: Product = new Product(new PercentageDiscount());

prod.executeOp(price, quantity);

console.log("----Switching Strategy------");

prod.setDiscountStrategy(new FixedAmountDiscount());

prod.executeOp(price, quantity);

console.log("-----Switching Strategy------");

prod.setDiscountStrategy( new NoDiscount());

prod.executeOp(price, quantity);
