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
    constructor(name = "BMW", speed = 200) {
        this.name = name;
        this.speed = speed;
    }
    accelerate() {
        // return "The car " + this.name + " is running @ " + this.speed + " kmph !";
        return `The car ${this.name} is running @ ${this.speed} kmph !`;
    }
}
// var carObj = new Car();
// carObj.accelerate();
class JamesBondCar extends Car {
    constructor(name, speed, canFly) {
        super(name, speed);
        this.canFly = false;
        this.canFly = canFly;
    }
    accelerate() {
        return super.accelerate() + " Can It Fly ?" + this.canFly;
    }
}
var jbc = new JamesBondCar("Aston Martin", 300, true);
// console.log(jbc.accelerate());
// interface IPerson {
//   name: string;
//   country?: string;
//   getDetails?: () => void;
// }
// class Person implements IPerson {
//   name: string;
// }
class EnhancedCar {
    constructor(name = "BMW", speed = 200) {
        this.name = name;
        this.speed = speed;
    }
}
var eCarObj = new EnhancedCar();
let cars = new Array("BMW", "AUDI", "FERRARI"); // Using Generics
function Swap(x, y) {
    let t;
    t = x;
    x = y;
    y = t;
}
Swap("Hello ", "World");
class Point {
}
var point = new Point();
let x = 100;
// x = "XYZ";
function Test(a) {
}
