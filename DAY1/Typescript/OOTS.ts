// interface IPerson {
//   name: string;
//   country: string;
// }

// type Person = {
//   name: string;
//   country: string;
// };
// let person: Person = { name: "Djokovic", country: "Spain", xyz: 123 };

// Class
class Car {
  name: string;
  speed: number;
  constructor(name: string = "BMW", speed: number = 200) {
    this.name = name;
    this.speed = speed;
  }
  accelerate(): string {
    return "The car " + this.name + " is running @ " + this.speed + " kmph !";
  }
}

// var carObj = new Car();
// carObj.accelerate();
class JamesBondCar extends Car {
  canFly: boolean = false;
  constructor(name: string, speed: number, canFly: boolean) {
    super(name, speed);
    this.canFly = canFly;
  }

  accelerate(): string {
    return super.accelerate() + " Can It Fly ?" + this.canFly;
  }
}

var jbc = new JamesBondCar("Aston Martin", 300, true);
// console.log(jbc.accelerate());
