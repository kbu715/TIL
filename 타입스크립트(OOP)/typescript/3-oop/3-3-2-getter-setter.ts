{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private _coffeeBeans: number = 0; // instance (object) level

    // private => makeMachine 메소드로만 인스턴스 생성 허용하겠다는 의미.
    private constructor(coffeeBeans: number) {
      this._coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    public fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }

      this._coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this._coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not Enough Coffee Beans !');
      }
  
      this._coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      
      return {
        shots,
        hasMilk: false
      }
    }

    get coffeeBeans(): number {
      return this._coffeeBeans;
    }

    set coffeeBeans(beans: number) {
      this._coffeeBeans = beans;
    }
  }

  const maker = CoffeeMaker.makeMachine(34);

  maker.fillCoffeeBeans(66);

  console.log(maker); // CoffeeMaker { coffeeBeans: 100 }

  // getter
  console.log(maker.coffeeBeans);

  // setter
  maker.coffeeBeans = 150;

  console.log(maker.coffeeBeans);
  

}