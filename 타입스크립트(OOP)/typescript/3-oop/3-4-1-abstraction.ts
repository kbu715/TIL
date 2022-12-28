{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    // private => makeMachine 메소드로만 인스턴스 생성 허용하겠다는 의미.
    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    public fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }

      this.coffeeBeans += beans;
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);

      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not Enough Coffee Beans !');
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log(`heating up...`);
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`);

      return {
        shots,
        hasMilk: false
      }
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);

      // if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
      //   throw new Error('Not Enough Coffee Beans !');
      // }
  
      // this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      
      // return {
      //   shots,
      //   hasMilk: false
      // }
    }
  }

  const maker = CoffeeMaker.makeMachine(34);

  maker.fillCoffeeBeans(66);

  console.log(maker); // CoffeeMaker { coffeeBeans: 100 }

  maker.makeCoffee(2); // make 2-shots-coffee

}