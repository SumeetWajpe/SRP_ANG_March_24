// var str = "Hello Typescript !"; // Type Inference
var str: string; // Type Annotation
str = "Hello Typescript !";
//str = 100; // Error !
console.log(str);

var b: boolean;
var n: number;
var o: object;

var a: any;
a = 10;
a = "Hello";
a = true;
a = [];
a = {};

// functions
// function Add(x: number, y: number): number {
//   return x + y;
// }

// Add("Hello", "World !"); // Error !
// var result: number = Add(20, 30);
// Add();// Error ! Parameters are not optional

// Optional Parameters
// function PrintBook(author: string, title?: string, noOfPages?: number): void {

//   console.log(author, title, noOfPages);
// }

// PrintBook("Dr. APJ Abdul Kalam", "", 200);

// Default Parameters
// function PrintBook(
//   author: string = "Unknown",
//   title: string = "Unknown",
// ): void {
//   console.log(author, title);
// }

// PrintBook();
// PrintBook("Dr. APJ Abdul Kalam", "Wings Of Fire");

// Arrays

// let cars: string[] = ["BMW", "AUDI", "FERRARI"];

// OR
// let cars: Array<string> = new Array<string>("BMW", "AUDI", "FERRARI"); // Using Generics

// let firstCar = cars[0];
// let secondCar = cars[1];
// destructuring
// let cars: string[] = ["BMW", "AUDI", "FERRARI"];

// let [firstCar, , secondCar] = cars;
// console.log(secondCar);

// With Objects
// let player = { lname: "Alcaraz", isSeededOne: true, country: "Spain" };
// let lname: string = player.lname;
// let country: string = player.country;
// OR
// let { lname, country } = player;

// function PrintPlayer({ lname, country }) {
//   console.log(lname + " represents " + country);
// }

// PrintPlayer(player);
// console.log(player.lname);

// Spread Operator
let cars: string[] = ["BMW", "AUDI"];
let moreCars: string[] = ["TATA", "MAHINDRA"];
let allCars: string[] = [...cars, ...moreCars];
console.log(allCars);

// Spread Operator with Objects
let person = { name: "Djokovic", country: "Spain" };
let player = { ...person, sport: "Tennis" };
